import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandompersonService {
  private apiUrl = 'https://persikivk.ru/api/users/random-user';

  constructor(private http: HttpClient) { }

  async getRandomUser(): Promise<any> {
    // Установка заголовка Content-Type в application/json
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Выполнение HTTP-запроса и ожидание ответа
    try {
      const response = await this.http.get<any>(this.apiUrl, { headers }).toPromise();
      return response;
    } catch (error) {
      console.error('Ошибка при выполнении HTTP-запроса:', error);
      throw error; // Можно пробросить ошибку, чтобы компонент мог ее обработать
    }
  }
}
