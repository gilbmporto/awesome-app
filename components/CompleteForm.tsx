import { completeTask, getTask, uncompleteTask } from "@/utils/actions"
import React from "react"

export default async function CompleteForm({ id }: { id: string }) {
  const task = await getTask(id)

  if (task) {
    if (task.completed) {
      return (
        <form action={uncompleteTask}>
          <input type="hidden" name="id" value={id} />
          <button type="submit" className="btn btn-sm btn-secondary">
            Uncomplete
          </button>
        </form>
      )
    }

    return (
      <form action={completeTask}>
        <input type="hidden" name="id" value={id} />
        <button type="submit" className="btn btn-sm btn-success">
          Complete
        </button>
      </form>
    )
  }
}
