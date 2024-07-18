import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule, ConfirmationComponent, DatePipe],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent implements OnInit {
  currentDate: Date;
  taskName: string;
  tasksList: string[];
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {
    this.currentDate = new Date();
    this.taskName = '';
    this.tasksList = [];
  }

  ngOnInit(): void {
    let tasksInStorage: string[] = JSON.parse(localStorage.getItem('tasks')!);
    if (tasksInStorage?.length) {
      this.tasksList = tasksInStorage;
    }
  }

  addTask() {
    if (this.taskName.trim() !== '') {
      this.tasksList.push(this.taskName.trim());
      this.taskName = '';
      localStorage.setItem('tasks', JSON.stringify(this.tasksList));
    }
  }

  deleteTask(index: number) {
    this.tasksList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasksList));
  }

  clearAll() {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.tasksList = [];
        localStorage.removeItem('tasks');
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
