import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert implements OnInit {

  @Input() alertType: string = '';
  @Input() alertMessage: string = '';

  //className: string = '';

  ngOnInit(): void {
    // if (this.alertType == 'Success') {
    //   this.className = 'alert-success'
    // } else if (this.alertType == 'Error') {
    //   this.className = 'alert-danger'
    // } else {
    //   this.className = 'alert-warning'
    // }
  }

}

