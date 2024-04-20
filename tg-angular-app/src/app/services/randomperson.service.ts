// randomperson.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandompersonService {
  private users = [
    { id: 1, name: 'John', role: 'Developer', photo: 'assets/avatar.png' },
    { id: 2, name: 'Alice', role: 'Designer', photo: 'assets/avatar.png' },
    { id: 3, name: 'Bob', role: 'Manager', photo: 'assets/avatar.png' },
    { id: 4, name: 'Emma', role: 'Tester', photo: 'assets/avatar.png' }
  ];

  constructor() { }

  getRandomUser() {
    const randomIndex = Math.floor(Math.random() * this.users.length);
    return this.users[randomIndex];
  }
}
