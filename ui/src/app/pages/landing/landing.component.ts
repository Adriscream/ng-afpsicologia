import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/common/auth/auth.service';

@Component({
  selector: 'af-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    await this.authService.login();
    this.router.navigate(['/home']);
  }
}
