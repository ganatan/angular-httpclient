import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {

  readonly items = signal<any[]>([]);

  constructor(private readonly itemsService: ItemsService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.itemsService
      .getItems('https://jsonplaceholder.typicode.com/users')
      .subscribe(items => this.items.set(items));
  }

  resetUsers(): void {
    this.items.set([]);
  }

}
