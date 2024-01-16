import EditForm from "@/components/EditForm"
import { getTask } from "@/utils/actions"
import Link from "next/link"
import React from "react"

export default async function TaskPage({ params }: { params: { id: string } }) {
  const task = await getTask(params.id)
  return (
    <>
      <EditForm task={task} />
      <Link href="/tasks" className="btn btn-accent mt-6">
        Back to tasks
      </Link>
    </>
  )
}
