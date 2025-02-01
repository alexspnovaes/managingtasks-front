import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { Task } from '../../core/models/task.model';
import { FormsModule, NgForm } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  @ViewChild('taskForm') taskForm!: NgForm; 

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (!this.newTaskTitle.trim()) return;

    const newTask: Partial<Task> = { title: this.newTaskTitle };

    this.taskService.addTask(newTask).subscribe((task) => {
      this.tasks.push(task);
      this.newTaskTitle = ''; 
      this.taskForm.resetForm();
    });
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe();
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    });
  }
}
