import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit,AfterViewInit,OnDestroy{
  constructor() {
    console.log('constructor executed')
    //propertyinitialization
  }
 
  ngOnInit(): void {
    console.log('ngOnInit')
    //api call
    //subscription
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
   ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
