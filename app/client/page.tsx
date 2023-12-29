"use client"
import React, { useState } from "react"

export default function ClientPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col max-w-6xl mx-auto justify-center items-center h-full">
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          className="btn btn-primary sm:text-lg"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="btn btn-secondary sm:text-lg"
          onClick={() => {
            if (count === 0) {
              alert("You can't decrease the count")
              return
            }
            return setCount(count - 1)
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  )
}
