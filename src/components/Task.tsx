import { Task } from "../types/Task";

type TaskCompProps = {
  task: Task;
  onDeleteTask: (taskId: number) => void
};

export default function TaskComp({ task, onDeleteTask }: TaskCompProps) {
  return (
    <div className="bg-blue-800">
      <h3 className="text-white">{task.title}</h3>
      <h3 className="text-white">{task.updated_at}</h3>
    </div>
  );
}
