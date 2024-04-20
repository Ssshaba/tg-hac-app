import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ProductComponent } from './pages/product/product.component';
import {EducationComponent} from "./components/education/education.component";
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent, pathMatch: 'full' },
  { path: 'shop', component: ShopComponent},
  { path: 'feedback', component: FeedbackComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'education', component: EducationComponent },
  { path: 'profile', component: ProfileComponent},
];
