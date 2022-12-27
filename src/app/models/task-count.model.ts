import { TaskStatus } from "./task-status.enum";

export const doableTasks: string[] = [ TaskStatus.Overdue, TaskStatus.DueSoon, TaskStatus.Active, TaskStatus.Pending ];

export interface TaskCount {
  status: TaskStatus,
  count: number;
}