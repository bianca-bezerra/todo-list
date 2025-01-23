import { Task } from "./types/Task";

export interface TaskState {
  tasks: Task[];
}

export enum ActionType {
  Added,
  Updated,
  Deleted,

}

type TaskAdded = { type: ActionType.Added; payload: { text: string } };
type TaskUpdated = { type: ActionType.Updated; payload: { task: Task } };
type TaskDeleted = { type: ActionType.Deleted; payload: { id: string } };

type Action = TaskAdded | TaskDeleted | TaskUpdated;

export const reducer = (state: TaskState, action: Action) => {
  switch (action.type) {
    case ActionType.Added: {
        return state
    }
    case ActionType.Added: {
        return state
    }
    case ActionType.Updated: {
      return state
    }
    case ActionType.Deleted: {
      return state
    }

    return state
  }
};
