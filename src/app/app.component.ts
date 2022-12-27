import { Component, OnInit } from '@angular/core';
import { FileModel } from './models/file.model';
import { Patient } from './models/patient.model';
import { doableTasks, TaskCount } from './models/task-count.model';
import { TaskStatus } from './models/task-status.enum';
import { TransplantCenter } from './models/transplant-center.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  patient: Patient = {
    name: 'John Doe',
    admittanceDate: new Date('04/12/1993')
  }
  
  centers: TransplantCenter[] = [
    { 
      name: 'TN VALLEY HEALTHCARE TRANSPLAN', city: 'Nashville', state: 'TN', status: 'Referral Not Made', startDate: new Date('12/22/2012'), 
      taskCounts: [
        { status: TaskStatus.Overdue, count: 2 },
        { status: TaskStatus.DueSoon, count: 3 },
        { status: TaskStatus.Active, count: 7 },
        { status: TaskStatus.Pending, count: 12 },
        { status: TaskStatus.Completed, count: 34 },
        { status: TaskStatus.Incompleted, count: 2 },
      ], 
      files: [
        { name: 'testfile.pdf', groupTypeID: 0 },
        { name: 'testfile.pdf', groupTypeID: 1 },
        { name: 'testfile.pdf', groupTypeID: 3 },
        { name: 'testfile.pdf', groupTypeID: 4 },
      ]
    },
    { 
      name: 'TN KNOXVILLE UNIV TRANSPLANT', city: 'Knoxville', state: 'TN', status: 'Evaluation', startDate: new Date('02/23/2020'), 
      taskCounts: [
        { status: TaskStatus.Overdue, count: 12 },
        { status: TaskStatus.DueSoon, count: 23 },
        { status: TaskStatus.Completed, count: 12 },
      ], 
      files: [
        { name: 'testfile.pdf', groupTypeID: 0 },
        { name: 'testfile.pdf', groupTypeID: 2 },
      ]
    },
    { 
      name: 'ERLANGER TRANSPLANT', city: 'Chattanooga', state: 'TN', status: 'Transplanted', startDate: new Date('06/17/2003'), endDate: new Date('02/23/2021'),
      taskCounts: [
        { status: TaskStatus.Completed, count: 56 },
        { status: TaskStatus.Incompleted, count: 5 },
      ], 
      files: [
        { name: 'testfile.pdf', groupTypeID: 0 },
        { name: 'testfile.pdf', groupTypeID: 1 },
        { name: 'testfile.pdf', groupTypeID: 2 },
        { name: 'testfile.pdf', groupTypeID: 3 },
        { name: 'testfile.pdf', groupTypeID: 4 },
        { name: 'testfile.pdf', groupTypeID: 5 },
        { name: 'testfile.pdf', groupTypeID: 6 },
        { name: 'testfile.pdf', groupTypeID: 7 },
        { name: 'testfile.pdf', groupTypeID: 8 },
      ]
    },
    { 
      name: 'ST. THOMAS TRANSPLANT', city: 'Nashville', state: 'TN', status: 'Referral Not Made', startDate: new Date('06/17/2003'), 
      taskCounts: [
        { status: TaskStatus.Pending, count: 16 },
      ], 
      files: []
    },
  ];


  get daysSinceAdmission(): number { return Math.ceil((Math.abs(this.patient.admittanceDate.getTime() - new Date().getTime())) / (1000 * 3600 * 24)) }
  
  taskStatusLabel(task: TaskCount): string { return Object.values(TaskStatus)[Object.values(TaskStatus).indexOf(task.status)] }
  taskStatusClass(task: TaskCount): string { return Object.keys(TaskStatus)[Object.values(TaskStatus).indexOf(task.status)] }
  tackCount(taskCounts: TaskCount[]): number { return taskCounts.reduce((accumulator, taskcount) => accumulator + taskcount.count, 0) }
  missingFile(files: FileModel[], id: number): boolean { return !files.some(file => file.groupTypeID === id) }
}
