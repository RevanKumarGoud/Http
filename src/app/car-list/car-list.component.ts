import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  template: `
          <h2>Car-list</h2>
          <ul *ngFor="let car of cars">
            <li>{{car.id}} {{car.name}}</li>
          </ul>
  `,
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  public cars :any;
  constructor(private _carService : CarService) { }

  ngOnInit(): void {
    this. _carService.getCars()
    .subscribe((DATA: any) => this.cars = DATA);
  }

}
