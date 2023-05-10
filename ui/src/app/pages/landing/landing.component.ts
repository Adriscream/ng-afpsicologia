import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'af-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private router: Router) {}

  async login() {
    this.router.navigate(['/home']);
  }
}
