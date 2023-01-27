import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LprService } from '../_service/lpr.service'

@Component({
  selector: 'app-lpr',
  templateUrl: './lpr.component.html',
  styleUrls: ['./lpr.component.css']
})
export class LprComponent implements OnInit{
  
  constructor(private lprService: LprService){}
  ngOnInit(): void {
  }
  
  public addLpr(details: NgForm){
    this.lprService.save(details).subscribe(
      (response: any)=>{
        details.reset();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public onFileSelected(event: any){
    if (event.target.files){
      const file = event.target.files[0];
    }
  }
}