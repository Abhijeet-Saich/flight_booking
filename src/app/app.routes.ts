import { Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { MyBookingComponent } from './pages/website/my-booking/my-booking.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { CityComponent } from './pages/admin/city/city.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';

export const routes: Routes = [
    {
        path : 'search',
        component : SearchComponent
    },
    {
        path : 'book-flight',
        component : BookFlightComponent
    },
    {
        path : 'bookings',
        component : MyBookingComponent
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : '',
        component : LayoutComponent,
        children : [
            {
                path : "airport",
                component  : AirportComponent
            },
            {
                path : "city",
                component  : CityComponent
            },
            {
                path : "all-bookings",
                component  : BookingsComponent
            },
            {
                path : 'new-flight',
                component : NewFlightComponent
            },
            {
                path : 'all-flights',
                component : AllFlightsComponent
            }
        ]
    },
];
