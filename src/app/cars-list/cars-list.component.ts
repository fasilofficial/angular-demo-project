import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-list.component.html',

})

export class CarsListComponent {
  cars: any[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars = this.carsService.getAllCars();
  }

}
