import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://persikivk.ru/api/users/getUser/';
  private telegramApiUrl = 'https://api.telegram.org/bot<your_bot_token>/';

  constructor(private http: HttpClient) { }

  // Метод для получения данных пользователя по его id телеграма
  async getUserByTelegramId(telegramUserId: string | null): Promise<any> {
    try {
      // Если telegramUserId null, запросим его у Telegram Passport пользователя
      if (telegramUserId === null) {
        const accessToken = ''; // Вставьте сюда полученный access_token после аутентификации OAuth 2.0
        const meUrl = `${this.telegramApiUrl}getMe?access_token=${accessToken}`;
        const meResponse = await this.http.get<any>(meUrl).toPromise();
        telegramUserId = meResponse.id.toString(); // Извлекаем id пользователя из ответа Telegram API
      }

      const url = `${this.apiUrl}${telegramUserId}`;
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const response = await this.http.get<any>(url, { headers }).toPromise();
      return response;
    } catch (error) {
      console.error('Ошибка при выполнении HTTP-запроса:', error);
      throw error;
    }
  }
}


// Для запроса id пользователя у Telegram Passport с помощью API Telegram для авторизации OAuth 2.0 вы можете использовать следующий подход:

// Создайте приложение в Telegram.
// Получите client_id и client_secret для вашего приложения.
// Реализуйте процесс аутентификации OAuth 2.0 с использованием Telegram Login Widget.
// Получите access_token после успешной аутентификации.
// С помощью access_token вызовите метод getMe Telegram API для получения информации о текущем пользователе.
// Извлеките id пользователя из полученной информации и передайте его в URL запроса к вашему API.