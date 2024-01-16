import prisma from "@/utils/db"

export const dynamic = "force-dynamic"

const prismaHandlers = async () => {
  const allTasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  })
  return allTasks
}

export default async function PrismaExample() {
  const tasks = await prismaHandlers()

  if (tasks?.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks here!</h2>
  }

  return (
    <div>
      <h1 className="text-7xl mb-4">PrismaExample</h1>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h2 className="text-xl py-2">😃 {task.content}</h2>
          </div>
        )
      })}
    </div>
  )
}
