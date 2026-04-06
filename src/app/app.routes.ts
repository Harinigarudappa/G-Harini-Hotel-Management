import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { WelcomeComponent } from './welcome/welcome';
import { DashboardComponent } from './dashboard/dashboard';
import { HotelDetailsComponent } from './hotel-details/hotel-details';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hotel/:name', component: HotelDetailsComponent }
];