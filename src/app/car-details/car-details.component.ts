import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';


@Component({
  selector: 'app-car-details',
  template: `

         <h2>CarDetails</h2>
          <ul *ngFor="let car of cars">
            <li>{{car.id}} {{car.name}}</li>
          </ul>
  `,
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
public cars :any;
  constructor(private _carService : CarService) { }

  ngOnInit(): void {
    this. _carService.getCars()
    .subscribe((DATA: any) => this.cars = DATA);
  }

}
