"use server"

import { revalidatePath } from "next/cache"
import prisma from "./db"
import { redirect } from "next/navigation"
import { StateProps } from "@/components/TaskFormCustom"
import { z } from "zod"

export const getAllTasks = async () => {
  const tasks = prisma.task
    .findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
    .then((tasks) => {
      return tasks
    })
    .finally(() => {
      revalidatePath("/tasks")
    })
  return tasks
}

export const getTask = async (id: string) => {
  return await prisma.task.findUnique({
    where: { id },
  })
}

export const createTask = async (formData: FormData) => {
  const content = formData.get("content")
  if (content) {
    await prisma.task.create({
      data: {
        content: content.toString(),
        completed: false,
      },
    })
  }
  revalidatePath("/tasks")
}

export const createTaskCustom = async (
  prevState: StateProps,
  formData?: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const content = formData?.get("content")

  const Task = z.object({
    content: z.string().min(5),
  })

  try {
    Task.parse({ content })
    if (content) {
      await prisma.task.create({
        data: {
          content: content.toString(),
          completed: false,
        },
      })
      revalidatePath("/tasks")
      return { message: "Success!" }
    }
  } catch (error: any) {
    console.log(error)
    return { message: `Error: ${error.message}` }
  }
}

export const updateTask = async (id: string, content: string) => {
  if (content) {
    await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        content: content.toString(),
      },
    })
  }
  revalidatePath("/tasks")
}

export const editTask = async (formatData: FormData) => {
  const content = formatData.get("content")
  const id = formatData.get("id") as string
  const completed = formatData.get("completed")
  if (content && id) {
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        content: content.toString(),
        completed: completed === "on" ? true : false,
      },
    })
  }
  redirect("/tasks")
}

export const completeTask = async (formData: FormData) => {
  const id = formData.get("id") as string

  if (id) {
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        completed: true,
      },
    })
  }
  revalidatePath("/tasks")
}

export const uncompleteTask = async (formData: FormData) => {
  const id = formData.get("id") as string

  if (id) {
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        completed: false,
      },
    })
  }
  revalidatePath("/tasks")
}

export const deleteTask = async (formData: FormData) => {
  const id = formData.get("id") as string
  if (id) {
    await prisma.task.delete({
      where: {
        id,
      },
    })
  }
  revalidatePath("/tasks")
}
