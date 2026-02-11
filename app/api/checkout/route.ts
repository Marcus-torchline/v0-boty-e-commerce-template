import { NextResponse } from "next/server"

const MEDUSA_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL!
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!

// Helper to call Medusa Store API with publishable key
async function medusaFetch(path: string, init?: RequestInit) {
  const res = await fetch(`${MEDUSA_URL}${path}`, {
    ...init,
    headers: {
      "content-type": "application/json",
      "x-publishable-api-key": PUBLISHABLE_KEY,
      ...(init?.headers || {}),
    },
  })
  return res
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items, email } = body as {
      items: { id: string; quantity: number }[]
      email: string
    }

    if (!items?.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 })
    }

    // 1) Create cart
    const cartRes = await medusaFetch("/store/carts", {
      method: "POST",
      body: JSON.stringify({
        email,
        // You can set region / currency explicitly if needed
      }),
    })

    if (!cartRes.ok) {
      const text = await cartRes.text()
      console.error("Medusa cart error", cartRes.status, text)
      return NextResponse.json(
        { error: "Failed to create cart" },
        { status: 500 }
      )
    }

    const cartData = await cartRes.json()
    const cart = cartData.cart

    // 2) Add line items
    for (const item of items) {
      const lineRes = await medusaFetch(`/store/carts/${cart.id}/line-items`, {
        method: "POST",
        body: JSON.stringify({
          variant_id: item.id,
          quantity: item.quantity,
        }),
      })

      if (!lineRes.ok) {
        const text = await lineRes.text()
        console.error("Medusa line-item error", lineRes.status, text)
        return NextResponse.json(
          { error: "Failed to add line item" },
          { status: 500 }
        )
      }
    }

    // 3) Create payment sessions (Stripe should be one of them)
    const paySessRes = await medusaFetch(
      `/store/carts/${cart.id}/payment-sessions`,
      { method: "POST" }
    )

    if (!paySessRes.ok) {
      const text = await paySessRes.text()
      console.error("Medusa payment sessions error", paySessRes.status, text)
      return NextResponse.json(
        { error: "Failed to create payment sessions" },
        { status: 500 }
      )
    }

    const paySessData = await paySessRes.json()
    const updatedCart = paySessData.cart

    // 4) Select Stripe payment session (assuming it's called "stripe")
    const stripeSession = updatedCart.payment_sessions?.find(
      (s: any) => s.provider_id === "stripe"
    )

    if (!stripeSession) {
      console.error("No Stripe payment session on cart", updatedCart)
      return NextResponse.json(
        { error: "Stripe payment session not found" },
        { status: 500 }
      )
    }

    const selectRes = await medusaFetch(
      `/store/carts/${cart.id}/payment-session`,
      {
        method: "POST",
        body: JSON.stringify({ provider_id: "stripe" }),
      }
    )

    if (!selectRes.ok) {
      const text = await selectRes.text()
      console.error("Medusa select payment session error", selectRes.status, text)
      return NextResponse.json(
        { error: "Failed to select Stripe payment session" },
        { status: 500 }
      )
    }

    // 5) Complete cart to get redirect URL (Stripe Checkout)
    const completeRes = await medusaFetch(`/store/carts/${cart.id}/complete`, {
      method: "POST",
    })

    if (!completeRes.ok) {
      const text = await completeRes.text()
      console.error("Medusa complete cart error", completeRes.status, text)
      return NextResponse.json(
        { error: "Failed to complete cart" },
        { status: 500 }
      )
    }

    const completeData = await completeRes.json()
    const redirectUrl = completeData.redirect_url || completeData.url

    if (!redirectUrl) {
      console.error("No redirect URL in complete response", completeData)
      return NextResponse.json(
        { error: "No redirect URL from Stripe" },
        { status: 500 }
      )
    }

    return NextResponse.json({ url: redirectUrl })
  } catch (err) {
    console.error("Checkout API error", err)
    return NextResponse.json(
      { error: "Unexpected checkout error" },
      { status: 500 }
    )
  }
}
