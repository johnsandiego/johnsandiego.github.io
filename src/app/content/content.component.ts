import { Component, OnInit } from '@angular/core';
import { component_name, DataTransferService } from '../data-transfer.service';

export interface ScheduleShell{
  Name: string,
  Type: string
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  scheduleShells: ScheduleShell[] = [];
  constructor(private messageService: DataTransferService) { }

  ngOnInit(): void {
  }

  /**
   * this function will create a new shell of a training schedule
   */
  createNewTrainingSchedule(): void{
    let newSchedule: ScheduleShell = {
      Name: "",
      Type: ""
    };

    this.scheduleShells.push(newSchedule);
  }


  /**
   * this will generate a training schedule
   * a. it will use a template component that houses the training schedule
   * b. it will show a calendar styled view broken down into weekdays
   * c. in each column it will the same of the workout and what type of work out is being done
   */
  generateTrainingSchedule(): void{
    this.messageService.sendMessage(component_name.generate);
  }
}
