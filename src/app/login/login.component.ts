import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_service/user-auth.service';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  constructor(
    private userService: UserService, 
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  login(loginForm: any){
    this.userService.login(loginForm.value).subscribe(
      (response: any)=>{
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if (role === 'Admin'){
          this.router.navigate(['/admin'])
        } else {
          this.router.navigate(['/observer'])
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
}