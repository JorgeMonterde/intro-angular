import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: "./employee.component.html",
  styles: ["p{background-color: aqua}"],
  //styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  name = "Luis";
  surname = "García";
  age = 27;

  disableInput = true;
  userRegistered = false;

  getUserRegistration(){
    this.userRegistered=false;
  };

  setUserToRegistered(){
    alert("The user has been registered.");
  }

}
