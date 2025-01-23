const serverUrl = import.meta.env.BASE_URL;

async function getAll(): Promise<Task[]> {
  const res = await fetch(serverUrl + "/tasks");
  const tasks: Task[] = await res.json();
}

async function update(id: number): Promise<boolean> {
  const res = await fetch(serverUrl + `/tasks/${id}`, { method: "PATCH" });
  return res.ok;
}

async function delete(id: number): Promise<boolean> {
    const res = await fetch(serverUrl + `/tasks/${id}`, { method: "DELETE" });
    return res.ok;
  }

export const tasksApi = {
    getAll, update, delete
};
