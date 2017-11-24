import { SaveVehicle } from './../models/vehicle';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleService {
  private readonly vehiclesEndpoint = 'http://localhost:5000/api/vehicles';
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
  getVehicle(id) {
    return this.http.get('http://localhost:5000/api/vehicles/' + id)
      .map(res => res.json());
  }
  getVehicles() {
    return this.http.get(this.vehiclesEndpoint)
      .map(res => res.json());
  }

  // toQueryString(obj) {
  //   const parts = [];
  //   for (const property in obj) {
  //     const value = obj[property];
  //     if (value !== null && value !== undefined)
  //       parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
  //   }

  //   return parts.join('&');
  // }
  update(vehicle: SaveVehicle) {
    return this.http.put('http://localhost:5000/api/vehicles/' + vehicle.id, vehicle)
      .map(res => res.json());
  }
  delete(id) {
    return this.http.delete('http://localhost:5000/api/vehicles/' + id)
      .map(res => res.json());
  }
}
