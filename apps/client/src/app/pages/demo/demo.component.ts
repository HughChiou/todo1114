import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-demo',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  apiResult$: Observable<{ message: string }>;

  constructor(private http: HttpClient) {
    this.apiResult$ = this.http.get<{ message: string }>('/api');
  }
}
