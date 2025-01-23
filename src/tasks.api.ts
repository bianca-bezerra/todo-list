import { Task } from "./types/Task";

const serverUrl = import.meta.env.BASE_URL;

async function getAll(): Promise<Task[]> {
  const res = await fetch(serverUrl + "/tasks");
  const tasks: Task[] = await res.json();
  return tasks;
}

async function post(payload: Task): Promise<Task> {
  const res = await fetch(serverUrl + `/tasks`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  const newTask = await res.json();
  return newTask;
}

async function update(id: number): Promise<boolean> {
  const res = await fetch(serverUrl + `/tasks/${id}`, { method: "PATCH" });
  return res.ok;
}

async function remove(id: number): Promise<boolean> {
  const res = await fetch(serverUrl + `/tasks/${id}`, { method: "DELETE" });
  return res.ok;
}

export const tasksApi = {
  getAll,
  post,
  update,
  remove,
};
