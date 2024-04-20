import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandompersonService } from '../../services/randomperson.service';

@Component({
  selector: 'app-randomperson',
  templateUrl: './randomperson.component.html',
  styleUrls: ['./randomperson.component.css']
})
export class RandompersonComponent implements OnInit {
  user: any;

  constructor(private router: Router, private randompersonService: RandompersonService) { }

  ngOnInit(): void {
    this.user = this.randompersonService.getRandomUser();
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
