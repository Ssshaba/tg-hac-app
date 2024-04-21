import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RandompersonService } from '../../services/randomperson.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-randomperson',
  templateUrl: './randomperson.component.html',
  styleUrls: ['./randomperson.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Устанавливаем стратегию обнаружения изменений OnPush
})
export class RandompersonComponent implements OnInit {
  user: any;
  chatLink: string | null = null; // Ссылка на чат

  constructor(private router: Router, private randompersonService: RandompersonService, private cdr: ChangeDetectorRef, private http: HttpClient) { }

  ngOnInit() {
    this.generateRandomUser();
  }

  async generateRandomUser() {
    try {
      this.user = await this.randompersonService.getRandomUser();
      console.log('Данные пользователя:', this.user);
      console.log('ID пользователя:', this.user.tgId);

      this.getChatLink(this.user.tgId); // Вызываем функцию для получения ссылки на чат после получения ID пользователя

      this.cdr.detectChanges();
    } catch (error) {
      console.error('Ошибка при получении случайного пользователя:', error);
    }
  }

  async getChatLink(chatId: number) {
    try {
      const response: any = await this.http.get(`https://api.telegram.org/bot6962938579:AAE_Zi1vuUL5Fr3gKXSIT7xN9hAQVhh_mTY/getChat?chat_id=${chatId}`).toPromise();
      if (response.ok) {
        this.chatLink = 'https://t.me/' + response.result.username;
        console.log('Ссылка на чат:', this.chatLink);
        this.cdr.detectChanges();
      } else {
        console.error('Ошибка при получении ссылки на чат:', response);
      }
    } catch (error) {
      console.error('Ошибка при получении ссылки на чат:', error);
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

  goToChat() {
    if (this.chatLink) {
      window.location.href = this.chatLink;
    } else {
      console.error('Ссылка на чат не доступна');
    }
  }
}
