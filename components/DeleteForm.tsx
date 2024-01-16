import { deleteTask } from "@/utils/actions"
import React from "react"
import ClientDeleteButton from "./ClientDeleteButton"

export default async function DeleteForm({ id }: { id: string }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <ClientDeleteButton />
    </form>
  )
}
