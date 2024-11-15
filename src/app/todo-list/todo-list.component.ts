import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  tasks: any[] = [];
  taskText = '';
  priority = 'medium';
  dueDate = '';

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  loadTasks() {
    this.http.get<any[]>('http://localhost:3000/tasks').subscribe((tasks) => (this.tasks = tasks));
  }

  addTask() {
    const task = { text: this.taskText, priority: this.priority, dueDate: this.dueDate };
    this.http.post('http://localhost:3000/tasks', task).subscribe(() => this.loadTasks());
  }

  deleteTask(taskId: number) {
    this.http.delete(`http://localhost:3000/tasks/${taskId}`).subscribe(() => this.loadTasks());
  }
}
