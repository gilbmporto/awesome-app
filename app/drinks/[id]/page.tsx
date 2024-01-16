import React from "react"
import Link from "next/link"
import Image from "next/image"

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const fetchDrink = async (id: string) => {
  try {
    const res = await fetch(url + id)
    const data = await res.json()
    return data
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default async function DrinkPage({
  params,
}: {
  params: { id: string }
}) {
  const data = await fetchDrink(params.id)
  const title = data.drinks[0]?.strDrink
  const imgSrc = data.drinks[0]?.strDrinkThumb
  const instructions = data.drinks[0]?.strInstructions

  return (
    <div className="flex flex-col items-start">
      <Link href="/drinks" className="btn btn-secondary mt-8 mb-12">
        Back to drinks
      </Link>
      <div className="relative w-80 h-80 mb-4">
        {imgSrc && (
          <Image
            src={imgSrc}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
            className="rounded-lg shadow-lg object-cover"
            priority
            alt={title}
          />
        )}
      </div>
      <h1 className="text-4xl mb-4">{title}</h1>
      <p>{instructions}</p>
    </div>
  )
}
