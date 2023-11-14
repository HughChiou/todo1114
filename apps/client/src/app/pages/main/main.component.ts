import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'todo-main',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent { }
