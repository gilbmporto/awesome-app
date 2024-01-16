import prisma from "@/utils/db"

const prismaHandlers = async () => {
  const allTasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  })
  return allTasks
}

export default async function PrismaExample() {
  const tasks = await prismaHandlers()

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
