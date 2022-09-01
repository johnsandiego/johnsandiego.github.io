import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { component_name, DataTransferService } from '../data-transfer.service';

export interface ScheduleShell{
  Name: string,
  Training: TrainingType
}

export interface TrainingType{
  Name: string,
  Type: string,
  TrainingArea: TrainingAreas
}

export enum TrainingAreas{
  UpperBody = "upper-body",
  Legs = "legs",
  Core = "core"
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  scheduleShells: ScheduleShell[] = [];
  trainings: TrainingType[] = [];
  selectedValue: any;

  constructor(private messageService: DataTransferService) { }

  ngOnInit(): void {
    this.selectedValue = null;

      let training1: TrainingType = {
        Name: "Training upper body",
        Type: "Upper Body",
        TrainingArea: TrainingAreas.UpperBody
      }

      let training2: TrainingType = {
        Name: "Training legs",
        Type: "Legs",
        TrainingArea: TrainingAreas.Legs
      }

      let training3: TrainingType = {
        Name: "Training core",
        Type: "Core",
        TrainingArea: TrainingAreas.Core
      }

      this.trainings.push(training1);
      this.trainings.push(training2);
      this.trainings.push(training3);

  }

  /**
   * this function will create a new shell of a training schedule
   */
  createNewTrainingSchedule(): void{
    let training: TrainingType = {
      Name: "Training upper body",
      Type: "Upper Body",
      TrainingArea: TrainingAreas.UpperBody
    }

    let newSchedule: ScheduleShell = {
      Name: "",
      Training: training
    };

    this.scheduleShells.push(newSchedule);
  }

  downloadTraining(): void{
    let element = document.querySelector('#training-schedule') as HTMLElement;
    if(element !== null){
      html2canvas(element).then(canvas => {
        var image = canvas.toDataURL()

        let tempLink = document.createElement('a');
        tempLink.download = 'image.png';
        tempLink.href = image;

        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      });
    }
 
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
