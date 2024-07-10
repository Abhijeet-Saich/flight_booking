import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-all-flights',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './all-flights.component.html',
  styleUrl: './all-flights.component.css'
})
export class AllFlightsComponent {

}
