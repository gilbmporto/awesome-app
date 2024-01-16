"use client"
import React from "react"

export default function Error(error: any) {
  console.log(error)
  return (
    <div>
      <h1>There was an error...</h1>
      <p>{error?.error.message}</p>
    </div>
  )
}
