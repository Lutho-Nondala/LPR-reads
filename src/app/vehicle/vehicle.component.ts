import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../_service/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit{
  vehicles: any;
  show: any;
  
  constructor(private vehicleService: VehicleService){}
  
  ngOnInit(): void {
    this.getAll()
  }

  save(saveForm: any){
    console.log(saveForm.value);
    this.vehicleService.save(saveForm.value).subscribe(
      (response: any)=>{
        console.log(response);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  update(updateForm: any){
    this.vehicleService.update(updateForm.value).subscribe(
      (response: any)=>{
        console.log("Updated: "+ response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public deleteByNumberPlate(numberPlate: any){
    return this.vehicleService.deleteByNumberPlate(numberPlate.value).subscribe(
      (response: any)=>{
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getAll(){
    this.vehicles = this.vehicleService.findAll();
    this.show = true;
  }
}
