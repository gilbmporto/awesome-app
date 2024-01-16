import TaskformCustom from "@/components/TaskFormCustom"
import TaskList from "@/components/TaskList"
import React from "react"

export default function TasksPage() {
  return (
    <div className="max-w-xl">
      <TaskformCustom />
      <TaskList />
    </div>
  )
}
