import { editTask } from "@/utils/actions"
import React from "react"

type TaskProps = {
  id: string
  content: string
  createdAt: Date
  completed: boolean
} | null

export default function EditForm({ task }: { task: TaskProps }) {
  if (task) {
    const { id, content, completed } = task
    return (
      <form
        action={editTask}
        className="max-w-lg p-12 border border-base-300 rounded-xl"
      >
        <input type="hidden" name="id" value={id} />

        {/* content */}
        <input
          type="text"
          required
          defaultValue={content}
          name="content"
          className="input input-bordered w-full mb-4"
        />

        {/* completed */}
        <div className="form-control">
          <label htmlFor="completed" className="label cursor-pointer mb-3">
            <span className="label-text">Completed</span>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              defaultChecked={completed}
              className="checkbox checkbox-primary checkbox-md"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary btn-block btn-md">
          Update
        </button>
      </form>
    )
  }
}
