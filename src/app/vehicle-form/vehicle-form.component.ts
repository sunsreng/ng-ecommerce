import { FeatureService } from './../feature.service';
import { MakeService } from './../make.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  features: any[];
  makes: any[];
  models: any[];
  vehicle: any = {};

  constructor(private makeService: MakeService, private featureService: FeatureService) { }

  ngOnInit() {
    this.makeService.getMakes().subscribe(makes => this.makes = makes);
    this.featureService.getFeatures().subscribe(features => this.features = features);
  }

  onMakeChange() {
    const selectedMake = this.makes.find(m => m.id === this.vehicle.make);
    this.models = selectedMake ?  selectedMake.models : [];
  }
}
