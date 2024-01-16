import { createTask } from "@/utils/actions"

export default async function Taskform() {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type here..."
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Add
        </button>
      </div>
    </form>
  )
}
