import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ProductComponent } from './pages/product/product.component';
import {EducationComponent} from "./components/education/education.component";
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { RandompersonComponent } from './pages/randomperson/randomperson.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EdueditprofileComponent } from './components/edueditprofile/edueditprofile.component';
import { EdumeetcollegueComponent } from './components/edumeetcollegue/edumeetcollegue.component';
import { EdubonusComponent } from './components/edubonus/edubonus.component';
import { BonusComponent } from './pages/bonus/bonus.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ProfileformComponent } from './pages/profileform/profileform.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent, pathMatch: 'full' },
  { path: 'randomperson', component: RandompersonComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'feedback', component: FeedbackComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'education', component: EducationComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'edueditprof', component: EdueditprofileComponent},
  { path: 'edumeetcollegue', component: EdumeetcollegueComponent},
  { path: 'edubonus', component: EdubonusComponent},
  { path: 'bonus', component: BonusComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'profileform', component:ProfileformComponent }
];
