import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aboutus } from './pages/aboutus/aboutus';
import { NotFound } from './pages/not-found/not-found';
export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'aboutus',
    component: Aboutus,
  },
  {
    path: '**',
    component: NotFound,
  },
];
