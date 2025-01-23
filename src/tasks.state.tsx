import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Task } from "./types/Task";

interface TasksContextType {
  onDelete: Dispatch<SetStateAction<number>>;
  onUpdate: Dispatch<SetStateAction<Task>>;
  onAdd: Dispatch<SetStateAction<Task>>;
}

const TasksContext = createContext<TasksContextType>({} as TasksContextType);

export const useTask = (): TasksContextType => {
  const tasksContext = useContext(TasksContext);

  if (!tasksContext) throw new Error("useTask out of TaskProvider");

  return tasksContext;
};
