import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent, RouterOutlet, CarsListComponent ],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'Cars';
}
