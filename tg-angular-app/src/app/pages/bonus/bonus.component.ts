import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BonusService } from '../../services/bonus.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {
  bonus: any;

  constructor(private router: Router, private randompersonService: BonusService) { }

  async ngOnInit() {
    try {
      this.bonus = await this.randompersonService.getBonusPartner();
      console.log('Данные партнеров:', this.bonus);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }

  goToStatistics() {
    this.router.navigate(['/statistics']);
  }
  
   goToProfile() {
     this.router.navigate(['/profile']);
   }

   goToBonus() {
    this.router.navigate(['/bonus']);
  }
}
