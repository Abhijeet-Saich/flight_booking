import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-airport',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})
export class AirportComponent {

  airportList : any[] = [];

  constructor(private httpClient : HttpClient){}

  ngOnInit() : void{
    this.getAllports()
  }

  getAllports(){
    this.httpClient.get("http://localhost:3002/airports").subscribe((res : any) => {
      console.log(res.data);
      this.airportList = res.data;
    })  
  }

  addNew():void{
    const empObj = {id : 0,cityName:""}
    this.airportList.unshift(empObj)
  }

  portColUpdate(){
    this.httpClient.post("http://localhost:3002/cities",this.airportList[0]).subscribe((res:any)=>{
      console.log(res.data);
    })
  }

}
