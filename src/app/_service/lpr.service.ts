import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LprService {
  PATH_OF_API = "http://127.0.0.1:9090/lpr/lpr";
  requestHeader = new HttpHeaders(
    {
      "No-Auth":"True"
    }
  );

  constructor(private httpClient: HttpClient) { }

  public save(lpr: any){
    return this.httpClient.post<any>(this.PATH_OF_API + "/create", lpr, {responseType: 'json'});
  }

  public read(lprID: any){
    return this.httpClient.get<any>(this.PATH_OF_API + "/read/" + lprID, {responseType: 'json'});
  }

  public update(lpr: any){
    return this.httpClient.put<any>(this.PATH_OF_API + "/update", lpr, {responseType: 'json'});
  }

  public delete(lprID: any){
    return this.httpClient.delete<any>(this.PATH_OF_API + "/delete/" + lprID);
  }

  public findAll(){
    let users = this.httpClient.get<any>(this.PATH_OF_API + "/getAll").subscribe(
      (response: any)=>{
        if (response != null){
          console.log("Nice!");
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return users;
  }
}
