import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  {ICar} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
private _url : string = "/assets/DATA/car.json"
  constructor(private Http : HttpClient) { }
  getCars():Observable<ICar[]>{
    return this .Http .get<ICar[]>(this._url);

  }
}
