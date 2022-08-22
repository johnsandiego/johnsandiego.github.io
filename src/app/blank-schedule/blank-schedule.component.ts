import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-blank-schedule',
  templateUrl: './blank-schedule.component.html',
  styleUrls: ['./blank-schedule.component.scss']
})
export class BlankScheduleComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Monday', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Tuesday', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Wednesday', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Thursday', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Friday', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Saturday', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Sunday', cols: 1, rows: 1, color: '#DDBDF1'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
