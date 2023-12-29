import Image from "next/image"
import Link from "next/link"
import React from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

async function fetchDrinks() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default async function DrinksPage() {
  const data = await fetchDrinks()

  return (
    <div>
      <h1 className="text-5xl">Drinks Page</h1>
    </div>
  )
}
