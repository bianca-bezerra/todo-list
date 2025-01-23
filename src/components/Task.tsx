import { Task } from "../types/Task";

type TaskCompProps = {
  task: Task;
};

export default function TaskComp({ task }: TaskCompProps) {
  return (
    <div className="bg-blue-800">
      <h3 className="text-white">{task.text}</h3>
      <h3 className="text-white">{task.updated_at}</h3>
    </div>
  );
}
