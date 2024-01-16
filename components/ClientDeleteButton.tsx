"use client"
import React from "react"

const ClientDeleteButton = () => {
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    )
    if (!isConfirmed) {
      event.preventDefault() // Prevent form submission if not confirmed
    }
  }

  return (
    <button
      type="submit"
      className="btn btn-sm btn-error"
      onClick={handleSubmit}
    >
      Delete
    </button>
  )
}

export default ClientDeleteButton
