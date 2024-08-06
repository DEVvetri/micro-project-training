import { Component, OnInit } from '@angular/core';
import { Users, UsersServiceService } from '../../users-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  allUser:Users[]=[];
  constructor(private service:UsersServiceService){

  }
  newUser:Users={
    email:"",
    first_name:"",
    last_name:"",
    password:"",
    issend:false,
  }
  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser(){
    this.service.getUsers().subscribe(data=>this.allUser=data);
  }
  addUser(){
    this.service.addUser(this.newUser).subscribe();
  }
}
