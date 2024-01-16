"use client"
import React from "react"
import { useFormStatus } from "react-dom"
import toast from "react-hot-toast"

const ClientCompleteButton = ({ completed }: { completed: boolean }) => {
  const { pending } = useFormStatus()

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to complete this task?"
    )
    if (!isConfirmed) {
      toast.error("Cancelled")
      event.preventDefault()
    }
    if (isConfirmed) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Task completed!")
    }
  }

  const handleUncompleteSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to uncomplete this task?"
    )
    if (!isConfirmed) {
      toast.error("Cancelled")
      event.preventDefault()
    }
    if (isConfirmed) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Task uncompleted!")
    }
  }

  if (!completed) {
    return (
      <button
        type="submit"
        className="btn btn-sm btn-success"
        onClick={handleSubmit}
        disabled={pending}
      >
        Complete
      </button>
    )
  }

  return (
    <button
      type="submit"
      className="btn btn-sm btn-secondary"
      onClick={handleUncompleteSubmit}
      disabled={pending}
    >
      Uncomplete
    </button>
  )
}

export default ClientCompleteButton
