"use client"
import React from "react"
import { useFormStatus } from "react-dom"
import toast from "react-hot-toast"

const ClientDeleteButton = () => {
  const { pending } = useFormStatus()

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    )
    if (!isConfirmed) {
      toast.error("Cancelled")
      event.preventDefault()
    }
    if (isConfirmed) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Task deleted")
    }
  }

  return (
    <button
      type="submit"
      className="btn btn-sm btn-error"
      onClick={handleSubmit}
      disabled={pending}
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  )
}

export default ClientDeleteButton
