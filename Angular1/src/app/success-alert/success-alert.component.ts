import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  username = '';
  allowNewUserName = false;
  ShowSecret = false;
  secrets = [];

  constructor() {
  
   }

  ngOnInit() {
  }

  onReset() {
    this.username = '';
  }

  onToggleDetails(){
    this.ShowSecret = !this.ShowSecret;
    this.secrets.push(this.secrets.length + 1);
  }

  onUpdateUserName(event: Event){
    this.username = (<HTMLInputElement>event.target).value;

  }

   
}
