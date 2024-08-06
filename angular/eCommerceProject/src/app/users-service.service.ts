import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Users{
  id?: string;
  first_name: string;
  last_name: string;
  email:string;
  password:string;
  issend:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient) { }

  myapi:string="http://localhost:3000/users";

  getUsers():Observable<any>{
    return this.http.get(this.myapi)
  }

  getUser(data:Users):Observable<any>{
    return this.http.get(`${this.myapi}/${data.id}`)
  }

  updateUser(data:Users):Observable<any>{
    return this.http.put(`${this.myapi}/${data.id}`,data)
  }
  addUser(data:Users):Observable<any>{
    return this.http.post(`${this.myapi}`,data)

  }
  deleteRecord(data:Users){
    return this.http.delete(this.myapi+`/${data.id}`);
  }


}
