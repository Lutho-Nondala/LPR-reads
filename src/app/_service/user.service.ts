import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = "http://127.0.0.1:9090/lprreads";
  requestHeader = new HttpHeaders(
    {
      "No-Auth":"True"
    }
  );

  private dlist: any;

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  public login(logInData: any){
    return this.httpClient.post(this.PATH_OF_API + "/jwt/authenticate", logInData, {headers: this.requestHeader});
  }

  public register(registerData: any){
    return this.httpClient.post(this.PATH_OF_API + "/user/registerNewUser", registerData, {responseType: 'json'});
  }

  public getById(user: any){
    return this.httpClient.get(this.PATH_OF_API + "/user/getById/"+ user, {responseType: 'json'});
  }

  public update(user: any){
    return this.httpClient.put(this.PATH_OF_API + "/user/update", user, {responseType: 'json'});
  }

  public deleteById(user:any){
    console.log(user);
    return this.httpClient.delete(this.PATH_OF_API + "/user/delete/" + user);
  }

  public findAll(){
    let users = this.httpClient.get<any>(this.PATH_OF_API + "/user/findAll").subscribe(
      (response: any)=>{
        this.dlist = response;
      },
      (error) => {
        console.log(error);
      }
    );

    return this.dlist;
  }

  public forAdmin(){
    return this.httpClient.get(this.PATH_OF_API + "/user/forAdmins", {responseType: 'text'});
  }

  public roleMatch(allowedRoles: any): boolean{
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles){
      for (let i = 0; i < userRoles.length; i++){
        for (let j = 0; j < allowedRoles.length; j++){
          if (userRoles[i].roleName === allowedRoles[j]){
            isMatch = true;
            return isMatch;
          } else{
            return isMatch;
          }
        }
      }
    }
    return false;
  }
}