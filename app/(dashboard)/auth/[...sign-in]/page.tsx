import React from "react"

type SignInParams = {
  "sign-in": string[]
}

export default function SignInPage({ params }: { params: SignInParams }) {
  console.log(params)

  return (
    <div>
      <h1 className="text-7xl">SignInPage</h1>
    </div>
  )
}
