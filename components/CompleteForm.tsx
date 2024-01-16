import { completeTask, getTask, uncompleteTask } from "@/utils/actions"
import React from "react"
import ClientCompleteButton from "./ClientCompleteButton"

export default async function CompleteForm({ id }: { id: string }) {
  const task = await getTask(id)

  if (task) {
    if (task.completed) {
      return (
        <form action={uncompleteTask}>
          <input type="hidden" name="id" value={id} />
          <ClientCompleteButton completed={task.completed} />
        </form>
      )
    }

    return (
      <form action={completeTask}>
        <input type="hidden" name="id" value={id} />
        <ClientCompleteButton completed={task.completed} />
      </form>
    )
  }
}
