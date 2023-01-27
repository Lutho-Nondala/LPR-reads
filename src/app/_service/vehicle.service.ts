import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  PATH_OF_API = "http://127.0.0.1:9090/lprreads/vehicle";
  requestHeader = new HttpHeaders(
    {
      "No-Auth":"True"
    }
  );

  users: any;

  constructor(private httpClient: HttpClient) { }

  public save(vehicle: any){
    return this.httpClient.post<any>(this.PATH_OF_API + "/create", vehicle, {responseType: 'json'});
  }

  public read(vehicleID: any){
    return this.httpClient.get<any>(this.PATH_OF_API + "/read/" + vehicleID, {responseType: 'json'});
  }

  public findVehiclesByNumberPlate(numberPlate: any){
    return this.httpClient.get<any>(this.PATH_OF_API + "/findByNumberPlate/" + numberPlate, {responseType: 'json'});
  }

  public update(vehicle: any){
    return this.httpClient.put<any>(this.PATH_OF_API + "/update", vehicle, {responseType: 'json'});
  }

  public delete(vehicleID: any){
    return this.httpClient.delete<any>(this.PATH_OF_API + "/delete/" + vehicleID);
  }

  public deleteByNumberPlate(numberPlate: any){
    return this.httpClient.delete<any>(this.PATH_OF_API + "/deleteVehicleByNumberPlate/" + numberPlate);
  }

  public findAll(){
    this.httpClient.get<any>(this.PATH_OF_API + "/getAll").subscribe(
      (response: any)=>{
        if (response != null){
          this.users = response;
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return this.users;
  }
}