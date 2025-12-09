import { Component, signal } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { Admin } from "./components/admin/admin";
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { ControlFlow } from './components/control-flow/control-flow';
import { Attribute } from './components/attribute/attribute';
import { Photos } from './components/photos/photos';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,RouterLinkActive, Admin,User,DataBinding,Signal,ControlFlow,Attribute,Photos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected  title = signal('first-app');
}
