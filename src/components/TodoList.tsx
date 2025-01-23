import { Task } from "../types/Task";
import TaskComp from "./Task";

type Props = {
  tasks: Task[];
};
export default function TodoList({ tasks }: Props) {
  return tasks.map((task) => {
    return <TaskComp task={task} />;
  });
}
