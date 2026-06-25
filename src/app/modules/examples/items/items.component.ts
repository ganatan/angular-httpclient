import { APP_ID, Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(APP_ID) private readonly appId: string,
    private readonly itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.itemsService
      .getItems('https://jsonplaceholder.typicode.com/users')
      .subscribe(items => {
        this.items.set(items);

        const platform = isPlatformBrowser(this.platformId)
          ? 'in the browser'
          : 'on the server';

        console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
      });
  }

  resetUsers(): void {
    this.items.set([]);

    const platform = isPlatformBrowser(this.platformId)
      ? 'in the browser'
      : 'on the server';

    console.log(`resetUsers : Running ${platform} with appId=${this.appId}`);
  }

}
