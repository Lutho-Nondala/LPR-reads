import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_service/user-auth.service';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  message: any;
  entry: any;
  users: any;
  show: any;
  constructor(
    private userAuthService: UserAuthService, 
    private router: Router,
    private userService: UserService
    ){}

  ngOnInit(): void {
    this.forAdmin();
    this.getAll();
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public forAdmin(){
    return this.userService.forAdmin().subscribe(
      (response) => {
        this.message = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  register(registerForm: any){
    this.userService.register(registerForm.value).subscribe(
      (response: any)=>{
        console.log("Registered: "+ response);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public deleteById(userName: any){
    let val = userName.value.userName;
    console.log(val);
    return this.userService.deleteById(userName.value.userName).subscribe(
      (response: any)=>{
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  public getById(username: any){
    let check: any = username.value;
    let userN: string = check.userName;
    this.userService.getById(userN).subscribe(
      (response: any)=>{
        this.entry = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getAll(){
    this.users = this.userService.findAll();
    this.show = true;
  }
}
