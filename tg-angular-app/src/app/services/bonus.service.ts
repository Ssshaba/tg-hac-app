import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BonusService {
  private apiUrl = 'https://persikivk.ru/api/users/stocks';

  constructor(private http: HttpClient) { }

  async getBonusPartner(): Promise<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    try {
      const response = await this.http.get<any>(this.apiUrl, { headers }).toPromise();
      return response;
    } catch (error) {
      console.error('Ошибка при выполнении HTTP-запроса:', error);
      throw error;
    }
  }
}
