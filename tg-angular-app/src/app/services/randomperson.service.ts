// randomperson.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandompersonService {
  private users = [
    { id: 1, name: 'John', role: 'Developer', age: '45', photo: 'avatar.png' },
    { id: 2, name: 'Alice', role: 'Designer', age: '23', photo: 'avatar.png' },
    { id: 3, name: 'Bob', role: 'Manager', age: '33', photo: 'avatar.png' },
    { id: 4, name: 'Emma', role: 'Tester', age: '32', photo: 'avatar.png' }
  ];

  constructor() { }

  getRandomUser() {
    const randomIndex = Math.floor(Math.random() * this.users.length);
    return this.users[randomIndex];
  }
}

