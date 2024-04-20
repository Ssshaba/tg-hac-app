import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ProductComponent } from './pages/product/product.component';
import {EducationComponent} from "./components/education/education.component";
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { RandompersonComponent } from './pages/randomperson/randomperson.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent, pathMatch: 'full' },
  { path: 'randomperson', component: RandompersonComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'feedback', component: FeedbackComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'education', component: EducationComponent },
];
