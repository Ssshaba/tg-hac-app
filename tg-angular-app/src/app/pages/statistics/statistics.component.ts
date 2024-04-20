import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {

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
