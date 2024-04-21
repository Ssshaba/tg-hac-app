import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileform',
  standalone: true,
  imports: [],
  templateUrl: './profileform.component.html',
  styleUrl: './profileform.component.css'
})
export class ProfileformComponent {

  constructor(private router: Router) { }

  goToStatistics() {
    this.router.navigate(['/statistics']);
  }
  
   goToProfile() {
     this.router.navigate(['/profile']);
   }

   goToBonus() {
    this.router.navigate(['/bonus']);
  }

  goToMainPage() {
    this.router.navigate(['/']);
  }
}
