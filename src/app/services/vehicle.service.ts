import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleService {

  constructor(private http: Http) { }

  getMakes() {
    return this.http.get('http://localhost:5000/api/makes')
      .map(res => res.json());
  }
  getFeatures() {
    return this.http.get('http://localhost:5000/api/features')
      .map(res => res.json());
  }

  create(vehicle) {
    return this.http.post('http://localhost:5000/api/vehicles', vehicle)
    .map(res => res.json());
  }
}