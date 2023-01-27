import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  loger: boolean = false;
  tok: any;
  wam: any;

  constructor() { }

  public setRoles(roles:[]){
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): []{
    return JSON.parse(localStorage.getItem('roles') || '{}');
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string{
    return localStorage.getItem('jwtToken') || '{}';
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    if (localStorage.getItem('jwtToken')){
      if (localStorage.getItem('roles')){
        return this.loger = true;
      }
    } 
    this.loger = false;
    return this.loger;
  }
}