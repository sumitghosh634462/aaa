import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  employees:Array<any>=[
    {name:"Sumit Ghosh"},
    {name:"Sayan nag"},
    {name:"Partha Patel"}
  ]
}

