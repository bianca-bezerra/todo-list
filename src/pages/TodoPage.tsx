import { useEffect, useReducer, useState } from "react";
import { TodoForm } from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { ActionType, reducer } from "../tasks.reducer";
import { tasksApi } from "../tasks.api";
import { Task } from "../types/Task";

export default function TodoPage() {
  const initialState = { tasks: [], loading: true, error: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const fetchedTasks = await tasksApi.getAll();
      dispatch({
        type: ActionType.Loaded,
        payload: { tasks: fetchedTasks },
      });
    })();
  });

  const handleAdd = async (payload: Task) => {
    const newTask = await tasksApi.post(payload);
    dispatch({
      type: ActionType.Added,
      payload: newTask,
    });
  };

  const handleDelete = async (taskId: number) => {
    await tasksApi.remove(taskId);
    dispatch({ type: ActionType.Deleted, payload: { id: taskId } });
  };

  return (
    <div className="flex-1 h-full min-h-screen">
      <TodoForm onAddTask={handleAdd} />
      <TodoList tasks={state.tasks} onDeleteTask={handleDelete} />
    </div>
  );
}
