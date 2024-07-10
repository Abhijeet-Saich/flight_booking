import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-flight',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css'
})
export class NewFlightComponent {

  airportList : any[] = [];
  flightObj = 
  {
    "flightId": 0,
    "flightNumber": "",
    "departureAirportId": 0,
    "departureTime": "",
    "arrivalAirportId": 0,
    "arrivalTime": "",
    "price": 0,
    "totalSeats": 0,
    "flightVendorId": 0,
    "travelDate": ""
  }

  constructor(private  httpClient : HttpClient){  }

  ngOnInit() : void{
    this.loadAirports()
  }

  loadAirports(){
    this.httpClient.get("http://localhost:3002/airports").subscribe((res : any)=>{
      this.airportList = [...res?.data];
    })
  }

  addNewFlight(){

    try {
      
      this.httpClient.post("http://localhost:3002/flights/addNew",this.flightObj).subscribe((res : any)=>{
        console.log(res)
      })
    } catch (error : any) {
      console.log(error.message);
    }
  }

}
