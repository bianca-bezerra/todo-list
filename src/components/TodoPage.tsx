import { useEffect, useReducer, useState } from "react";
import { Task } from "../types/Task";
import { TodoForm } from "./TodoForm";
import TodoList from "./TodoList";
import { reducer } from "../tasks.reducer";

export default function TodoPage() {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });

  useEffect(()=> {
    
  })

  return (
    <div className="flex-1">
      <TodoForm />
      <TodoList tasks={state.tasks} />
    </div>
  );
}
