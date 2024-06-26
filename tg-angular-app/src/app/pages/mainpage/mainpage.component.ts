import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RandompersonService } from '../../services/randomperson.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  constructor(private router: Router, private randomPersonService: RandompersonService) { }

  findRandomPerson() {
    const randomUser = this.randomPersonService.getRandomUser();
    this.router.navigate(['/randomperson'], { state: { user: randomUser } });
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
