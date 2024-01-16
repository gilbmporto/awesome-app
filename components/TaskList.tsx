"use server"
import Link from "next/link"
import React from "react"
import DeleteForm from "./DeleteForm"
import { getAllTasks } from "@/utils/actions"
import CompleteForm from "./CompleteForm"

export default async function TaskList() {
  const tasks = await getAllTasks()

  if (tasks?.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks here!</h2>
  }

  return (
    <ul className="mt-8">
      {tasks?.map((task) => {
        return (
          <li
            key={task.id}
            className="flex justify-between items-center px-6 py-4 mt-4
            border border-base-300 bg-base-300 rounded-xl shadow-lg"
          >
            <h2
              className={`text-lg capitalize ${
                task.completed ? "line-through" : null
              }`}
            >
              {task.content}
            </h2>
            <div className="flex gap-3 items-center">
              <Link
                href={`/tasks/${task.id}`}
                className="btn btn-accent btn-sm"
              >
                Edit
              </Link>
              <DeleteForm id={task.id} />
              <CompleteForm id={task.id} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
