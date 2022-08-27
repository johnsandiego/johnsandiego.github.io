import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { component_name, DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private messageService: DataTransferService) { }

  ngOnInit(): void {
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);


    //myObservable.subscribe(myObserver);


  }

  openSidenav(): void{
    console.log("menu ")
    this.messageService.sendMessage(component_name.pregenerate);
  }

}
