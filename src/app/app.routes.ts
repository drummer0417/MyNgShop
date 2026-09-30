import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { App } from './app';
import { Login } from './login/login';
import { Test } from './test/test';
import { Home } from './home/home';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'test', component: Test, canActivate: [authGuard] },
  { path: '', component: App, canActivate: [authGuard] },
  // { path: '**', component: Login },
];
