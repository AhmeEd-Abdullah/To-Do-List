import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmationComponent>) {}

  confirm() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }
}
