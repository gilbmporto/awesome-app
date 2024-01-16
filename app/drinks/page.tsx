import DrinksList from "@/components/DrinksList"
import React from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

async function fetchDrinks() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default async function DrinksPage() {
  const data = await fetchDrinks()

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  )
}
