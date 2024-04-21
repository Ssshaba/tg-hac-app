// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userData: any;
  telegramUserId: string; 

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.user = history.state.user;
    this.loadUserData();
  }

  async loadUserData() {
    try {
      // Передаем null в метод getUserByTelegramId, чтобы сервис сам извлекал id из Telegram Passport
      this.userData = await this.profileService.getUserByTelegramId(null);
    } catch (error) {
      console.error('Ошибка при загрузке данных пользователя:', error);
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

  goToProfileForm() {
    this.router.navigate(['/profileform']);
  }
}
