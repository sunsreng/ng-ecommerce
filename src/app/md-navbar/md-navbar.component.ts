import { Component } from '@angular/core';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-md-navbar',
  templateUrl: './md-navbar.component.html',
  styleUrls: ['./md-navbar.component.css']
})
export class MdNavbarComponent {
  step = 0;
}
