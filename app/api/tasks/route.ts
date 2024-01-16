import db from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const tasks = await db.task.findMany()

  return NextResponse.json(
    {
      message: "Tasks were successfully retrieved",
      data: tasks,
    },
    { status: 200 }
  )
}

export async function POST(req: NextRequest) {
  const { content } = await req.json()
  const task = await db.task.create({
    data: {
      content: content,
      completed: false,
    },
  })

  return NextResponse.json(
    {
      message: "Task was successfully created",
      data: task,
    },
    { status: 201 }
  )
}
