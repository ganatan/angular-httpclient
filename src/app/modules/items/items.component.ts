import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: any;
  address: any;
  constructor(
    private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.getUsers();
    //    this.getIp();
  }

  getUsers() {
    this.itemsService.getItems('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        items => {
          this.items = items;
        });
  }

  /*  getIp() {
      this.itemsService.getIp('https://api.ipify.org?format=json')
        .subscribe(
          address => {
            this.address = address;
          });
    }*/

}
