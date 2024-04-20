import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = history.state.user;
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
}