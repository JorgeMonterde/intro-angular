import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  template: `
    <p>{{name.value ? "Hello, " + name.value + "! Welcome to our webpage" : "Hi!"}}</p>
    <input type="text" id="Name" #name>
    <label for="Name">What is your name? </label>
    <input type="button" value="Add your name" (click)="addName(name.value)">
  `,
  styles: [""],
  //templateUrl: './greetings.component.html',
  //styleUrls: ['./greetings.component.css']
})

export class GreetingsComponent {
  addName(value: String){

  };
}
