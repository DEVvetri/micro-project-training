import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersServiceService } from '../../users-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private service:UsersServiceService){

  }
  ngOnInit(): void {

  }
  
}
