import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service'

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
})
export class CarComponent implements OnInit {
  carId: number = 1;
  car: any;

  constructor(private route: ActivatedRoute, private carsService: CarsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.carId = Number(params.get('id') as string);
      this.car = this.carsService.getCarById(this.carId)
    });
  }
}