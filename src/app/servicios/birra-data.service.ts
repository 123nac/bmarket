import { Injectable } from '@angular/core';
import { BIRRAS } from "../mocks/mocks";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BirraDataService {

  getBirras(){
    // Prueba de firebase
    // return this.http.get('https://test-7ffd9.firebaseio.com/beers.json')
    //   .pipe(map(data => data));
    return BIRRAS;
  }

  constructor( private http: HttpClient) { }
}
