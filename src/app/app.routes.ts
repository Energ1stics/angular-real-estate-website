import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'property', component: PageNotFoundComponent },
  { path: 'about', component: PageNotFoundComponent },
  { path: 'service', component: PageNotFoundComponent },
  { path: 'contact', component: PageNotFoundComponent },
];
