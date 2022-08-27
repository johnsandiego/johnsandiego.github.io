import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { component_name, DataTransferService } from '../data-transfer.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  borderColor: string;
}

export enum colors{
  blue = "#8ACDEA",
  grey = "#746D75",
  darkblue = "#4F699F",
  darkorange = "#9E643C",
  dirtwhite = "#EDE6F2",
  sunyellow = "#FFE66D",
  bluegrey = "#6CA6C1"
}

@Component({
  selector: 'app-blank-schedule',
  templateUrl: './blank-schedule.component.html',
  styleUrls: ['./blank-schedule.component.scss']
})
export class BlankScheduleComponent implements OnInit {

  headerTiles: Tile[] = [
    {text: 'Monday', cols: 1, rows: 1, color: colors.blue, borderColor: 'grey solid 1px'},
    {text: 'Tuesday', cols: 1, rows: 1, color: colors.grey, borderColor: 'grey solid 1px'},
    {text: 'Wednesday', cols: 1, rows: 1, color: colors.darkblue, borderColor: 'grey solid 1px'},
    {text: 'Thursday', cols: 1, rows: 1, color: colors.darkorange, borderColor: 'grey solid 1px'},
    {text: 'Friday', cols: 1, rows: 1, color: colors.dirtwhite, borderColor: 'grey solid 1px'},
    {text: 'Saturday', cols: 1, rows: 1, color: colors.sunyellow, borderColor: 'grey solid 1px'},
    {text: 'Sunday', cols: 1, rows: 1, color: colors.bluegrey, borderColor: 'grey solid 1px'}
  ];

  subscriptionToGenerateSchedule: Subscription;
  dayTiles: Tile[] = [];
  
  constructor(private messageService: DataTransferService) { 
    this.subscriptionToGenerateSchedule = this.messageService.getMessage().subscribe(message => {
      if (message == component_name.generate) {
        this.dayTiles = this.generateDays(28);
      }
    });

  }

  ngOnInit(): void {
    //add 
    // subscribe to home component messages
    
    //this.dayTiles = this.generateDays(28);
  }



  generateDays(numberOfdays: number): Tile[]{
    let sample: Tile[] = [];
    let tempColor: string = "lightblue";

    for(let i = 0; i < numberOfdays; i++){
      switch(i){
        case 0:
        case 7:
        case 14:
        case 21:
          tempColor = colors.blue
          break;
        case 1:
        case 8:
        case 15:
        case 22:
          tempColor = colors.grey
          break;
        case 2:
        case 9:
        case 16:
        case 23:
          tempColor = colors.darkblue
          break;
        case 3:
        case 10:
        case 17:
        case 24:
          tempColor = colors.darkorange
          break;
        case 4:
        case 11:
        case 18:
        case 25:
          tempColor = colors.dirtwhite
          break;
        case 5:
        case 12:
        case 19:
        case 26:
          tempColor = colors.sunyellow
          break;
        case 6:
        case 13:
        case 20:
        case 27:
          tempColor = colors.bluegrey
          break;
      }
      let day: Tile = {
        text: '',
        cols: 1, 
        rows: 1, 
        color: tempColor,
        borderColor: 'grey solid 1px'
      };

      sample.push(day);
    }

    return sample;

  }

}
