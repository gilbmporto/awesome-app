import Image from "next/image"
import Link from "next/link"
import React from "react"

type Drink = {
  idDrink: number
  strDrink: string
  strDrinkThumb: string
  strGlass: string
  strInstructions: string
  strIngredient1: string
}

export default function DrinksList({ drinks }: { drinks: Array<Drink> }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-4 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                alt={drink.strDrink}
                className="rounded-md object-cover"
              />
            </div>
            <h2>{drink.strDrink}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}
