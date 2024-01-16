"use client"
import { createTaskCustom } from "@/utils/actions"
import { useEffect } from "react"
import { useFormState, useFormStatus } from "react-dom"
import toast from "react-hot-toast"

export type StateProps =
  | {
      message: string
    }
  | undefined

const initialState: StateProps = {
  message: "",
}

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Please wait..." : "Add"}
    </button>
  )
}

export default async function TaskformCustom() {
  const [state, formAction] = useFormState(createTaskCustom, initialState)

  useEffect(() => {
    if (state?.message?.includes("Error")) {
      toast.error(state.message)
      return
    } else if (state?.message?.includes("Success")) {
      toast.success(state?.message)
      return
    }
  }, [state])

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type here..."
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  )
}
