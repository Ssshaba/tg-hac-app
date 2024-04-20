import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent {
  // bonuses: any[] = [];

   constructor(private router: Router) { }

  // async ngOnInit() {
  //   try {
  //     this.bonuses = await this.bonusService.getBonusPartner();
  //     console.log('Данные партнеров:', this.bonuses);
  //   } catch (error) {
  //     console.error('Ошибка при получении данных:', error);
  //   }
  // }

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

// import { Component, OnInit } from '@angular/core';
// import { BonusService } from '../../services/bonus.service';

// @Component({
//   selector: 'app-bonus',
//   template: `
//     <h2>Список бонусов</h2>
//     <ul>
//       <li *ngFor="let bonus of bonuses">
//         <p>ID: {{ bonus.id }}</p>
//         <p>Название: {{ bonus.name }}</p>
//       </li>
//     </ul>
//   `,
//   styleUrls: ['./bonus.component.css']
// })
// export class BonusComponent implements OnInit {
//   bonuses: any[] = [];

//   constructor(private bonusService: BonusService) { }

//   ngOnInit() {
//     this.loadBonuses();
//   }

//   async loadBonuses() {
//     try {
//       this.bonuses = await this.bonusService.getBonusPartner();
//     } catch (error) {
//       console.error('Ошибка при получении данных:', error);
//     }
//   }
// }
