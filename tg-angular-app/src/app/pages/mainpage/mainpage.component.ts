// mainpage.component.ts
import { Component } from '@angular/core';
import { RandompersonService } from '../../services/randomperson.service';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  randomUser: any; // Типизируйте, если возможно

  constructor(private randomPersonService: RandompersonService) { }

  showRandomUser() {
    this.randomUser = this.randomPersonService.getRandomUser();
  }
}
