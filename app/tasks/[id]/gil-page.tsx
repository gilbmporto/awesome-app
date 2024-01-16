"use client"
import { getTask, updateTask } from "@/utils/actions"
import React, { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type TaskContent = {
  id: string
  content: string
  createdAt: Date
  completed: boolean
}

export default function TaskPage({ params }: { params: { id: string } }) {
  const [input, setInput] = useState("")
  const router = useRouter()

  useEffect(() => {
    getContent()
  }, [])

  async function getContent() {
    const taskContent = await getTask(params.id)
    if (taskContent) {
      setInput(taskContent.content)
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const content = input

    if (window.confirm("Você realmente deseja atualizar esta tarefa?")) {
      if (content) {
        await updateTask(params.id, content)
        router.push("/tasks")
      }
    }
  }

  return (
    <div className="max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="Type here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="content"
            required
          />
          <button type="submit" className="btn btn-primary join-item">
            Update
          </button>
        </div>
      </form>
    </div>
  )
}
