'use server'

import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'

export interface CheckoutItem {
  name: string
  description: string
  priceInCents: number
  quantity: number
  image?: string
}

export async function createCheckoutSession(items: CheckoutItem[]) {
  if (!items.length) {
    throw new Error('No items provided for checkout')
  }

  const headersList = await headers()
  const origin = headersList.get('origin') || 'http://localhost:3000'

  const line_items = items.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        description: item.description,
        ...(item.image ? { images: [item.image] } : {}),
      },
      unit_amount: item.priceInCents,
    },
    quantity: item.quantity,
  }))

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    billing_address_collection: 'required',
    shipping_address_collection: {
      allowed_countries: [
        'AC','AD','AE','AF','AG','AI','AL','AM','AO','AQ','AR','AT','AU','AW','AX','AZ',
        'BA','BB','BD','BE','BF','BG','BH','BI','BJ','BL','BM','BN','BO','BQ','BR','BS','BT','BV','BW','BY','BZ',
        'CA','CD','CF','CG','CH','CI','CK','CL','CM','CN','CO','CR','CV','CW','CY','CZ',
        'DE','DJ','DK','DM','DO','DZ',
        'EC','EE','EG','EH','ER','ES','ET',
        'FI','FJ','FK','FO','FR',
        'GA','GB','GD','GE','GF','GG','GH','GI','GL','GM','GN','GP','GQ','GR','GS','GT','GU','GW','GY',
        'HK','HN','HR','HT','HU',
        'ID','IE','IL','IM','IN','IO','IQ','IS','IT',
        'JE','JM','JO','JP',
        'KE','KG','KH','KI','KM','KN','KR','KW','KY','KZ',
        'LA','LB','LC','LI','LK','LR','LS','LT','LU','LV','LY',
        'MA','MC','MD','ME','MF','MG','MK','ML','MM','MN','MO','MQ','MR','MS','MT','MU','MV','MW','MX','MY','MZ',
        'NA','NC','NE','NF','NG','NI','NL','NO','NP','NR','NU','NZ',
        'OM',
        'PA','PE','PF','PG','PH','PK','PL','PM','PN','PR','PS','PT','PY',
        'QA',
        'RE','RO','RS','RU','RW',
        'SA','SB','SC','SE','SG','SH','SI','SJ','SK','SL','SM','SN','SO','SR','SS','ST','SV','SX','SZ',
        'TA','TC','TD','TF','TG','TH','TJ','TK','TL','TM','TN','TO','TR','TT','TV','TW','TZ',
        'UA','UG','US','UY','UZ',
        'VA','VC','VE','VG','VN','VU',
        'WF','WS',
        'XK',
        'YE','YT',
        'ZA','ZM','ZW',
      ],
    },
    phone_number_collection: {
      enabled: true,
    },
    customer_creation: 'always',
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/checkout`,
  })

  if (!session.url) {
    throw new Error('Failed to create checkout session')
  }

  return session.url
}
