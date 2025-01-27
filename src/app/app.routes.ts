import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'add-tasks', component: ToDoComponent, canActivate: [authGuard] },
];
