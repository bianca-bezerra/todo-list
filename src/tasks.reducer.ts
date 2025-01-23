import { Task } from "./types/Task";

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: boolean;
}

export enum ActionType {
  Added,
  Updated,
  Deleted,
  Loaded,
}

type TaskAdded = {
  type: ActionType.Added;
  payload: { title: string; description: string };
};
type TaskUpdated = { type: ActionType.Updated; payload: { task: Task } };
type TaskDeleted = { type: ActionType.Deleted; payload: { id: number } };
type TaskLoaded = { type: ActionType.Loaded; payload: { tasks: Task[] } };

type Action = TaskAdded | TaskDeleted | TaskUpdated | TaskLoaded;

export const reducer = (state: TaskState, action: Action) => {
  switch (action.type) {
    case ActionType.Added: {
      const newTask: Task = {
        title: action.payload.title,
        description: action.payload.description,
        updated_at: null,
      };

      return { ...state, tasks: [newTask, ...state.tasks] };
    }

    case ActionType.Loaded: {
      return { ...state, tasks: action.payload.tasks };
    }

    case ActionType.Updated: {
      return { ...state, tasks: [] };
    }
    case ActionType.Deleted: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
};
