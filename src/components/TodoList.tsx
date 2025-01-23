import { Task } from "../types/Task";
import TaskComp from "./Task";

type TodoListProps = {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void
};

export default function TodoList({ tasks, onDeleteTask }: TodoListProps) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskComp task={task} onDeleteTask={onDeleteTask}/>
      ))}
    </div>
  );
}
