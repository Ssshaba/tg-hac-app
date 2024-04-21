import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RandompersonService } from '../../services/randomperson.service';

@Component({
  selector: 'app-randomperson',
  templateUrl: './randomperson.component.html',
  styleUrls: ['./randomperson.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Устанавливаем стратегию обнаружения изменений OnPush
})
export class RandompersonComponent implements OnInit {
  user: any;

  constructor(private router: Router, private randompersonService: RandompersonService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.generateRandomUser();
  }

  async generateRandomUser() {
    try {
      this.user = await this.randompersonService.getRandomUser();
      console.log('Данные пользователя:', this.user);

      this.cdr.detectChanges();
    } catch (error) {
      console.error('Ошибка при получении случайного пользователя:', error);
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

  goToMainPage() {
    this.router.navigate(['/']);
  }
}
