import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  username = '';
  allowNewUserName = false;

  constructor() {
   }

  ngOnInit() {
  }

  onReset() {
    this.username = '';
  }

  onUpdateUserName(event: Event){
    this.username = (<HTMLInputElement>event.target).value;

  }

   
}
