import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginDataPopupComponent } from '../login-data-popup/login-data-popup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string;
  password: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.username = '';
    this.password = '';
  }

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['add-tasks']);
    } else {
      const dialogRef = this.dialog.open(LoginDataPopupComponent, {
        width: '300px',
      });
    }
  }
}
