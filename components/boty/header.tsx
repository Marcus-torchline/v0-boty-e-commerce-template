"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag, Search, User } from "lucide-react"
import { CartDrawer } from "./cart-drawer"
import { useCart } from "./cart-context"

const navLinks = [
  { label: "Our Products", href: "/#our-products" },
  { label: "Our Story", href: "/#our-story" },
  { label: "Shop All", href: "/shop" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setIsOpen, itemCount } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 backdrop-blur-md rounded-lg py-0 my-0 animate-scale-fade-in bg-[rgba(255,255,255,0.85)] supports-[backdrop-filter]:bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.32)]" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}>
          <div className="flex items-center justify-between h-[100px]">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground boty-transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo -- center, 4x bigger */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            {/* Full logo on larger screens */}
            <Image
              src="/images/logo-confitone-green.png"
              alt="Confitone"
              width={960}
              height={240}
              className="hidden sm:block h-28 w-auto"
              priority
            />
            {/* CT monogram on small screens */}
            <Image
              src="/images/logo-ct-green.png"
              alt="Confitone"
              width={240}
              height={240}
              className="sm:hidden h-20 w-auto"
              priority
            />
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-2 text-foreground/70 hover:text-foreground boty-transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/account"
              className="hidden sm:block p-2 text-foreground/70 hover:text-foreground boty-transition"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-foreground/70 hover:text-foreground boty-transition"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0 -right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <CartDrawer />

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden boty-transition ${
            isMenuOpen ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/account"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Account
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
