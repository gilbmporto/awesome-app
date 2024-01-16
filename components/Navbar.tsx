"use client"
import Link from "next/link"
import React from "react"

const links = [
  { href: "/tasks", label: "tasks" },
  { href: "/prisma-example", label: "prisma" },
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
]

export default function Navbar() {
  return (
    <nav className="bg-base-300 py-4">
      <div
        className="navbar px-8 max-w-6xl mx-auto 
        flex-col sm:flex-row"
      >
        <Link href="/" className="btn btn-primary sm:text-lg">
          Home
        </Link>
        <ul className="menu menu-horizontal md:ml-8 md:gap-4 md:text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="capitalize">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
