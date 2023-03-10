import { FileModel } from "./file.model";
import { TaskCount } from "./task-count.model";

export interface TransplantCenter {
  name: string;
  city: string;
  state: string;
  status: string;
  startDate: Date;
  endDate?: Date;
  taskCounts: TaskCount[];
  files: FileModel[];
}