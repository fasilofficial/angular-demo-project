import { Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component'
import { CarComponent } from './car/car.component'

export const routes: Routes = [
    { path: '', component: CarsListComponent },
    { path: 'cars/:id', component: CarComponent },
];
