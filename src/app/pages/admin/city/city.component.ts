import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {

  cityList : any[] = []

  constructor(private httpClient : HttpClient){}

  ngOnInit() : void{
    this.getAllCities()
  }

  getAllCities(){
    this.httpClient.get("http://localhost:3002/cities").subscribe((res : any) => {
      console.log(res.data);
      this.cityList = res.data;
    })  
  }

  addNew():void{
    const empObj = {id : 0,cityName:""}
    this.cityList.unshift(empObj)
  }

  cityColUpdate(){
    this.httpClient.post("http://localhost:3002/cities",this.cityList[0]).subscribe((res:any)=>{
      console.log(res.data);
    })
  }
}
