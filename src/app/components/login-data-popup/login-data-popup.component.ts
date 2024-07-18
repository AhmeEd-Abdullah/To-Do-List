import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-data-popup',
  standalone: true,
  imports: [],
  templateUrl: './login-data-popup.component.html',
  styleUrl: './login-data-popup.component.scss',
})
export class LoginDataPopupComponent {
  constructor(private dialogRef: MatDialogRef<LoginDataPopupComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
