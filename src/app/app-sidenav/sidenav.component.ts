import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { component_name, DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    subscription: Subscription;
    messages: any[] = [];
    isOpened: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private messageService: DataTransferService) {

    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message === component_name.pregenerate) {
        if(this.isOpened){
          this.isOpened = false;
        }else{
          this.isOpened = true;
        }
      }
    });
  }

}
