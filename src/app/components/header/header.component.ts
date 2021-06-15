import {Component, OnDestroy, OnInit} from '@angular/core';

import {MenuItem} from '../../models/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {

  menuItems: Array<MenuItem> = new Array<MenuItem>();

  constructor() {
  }

  ngOnInit(): void {
    this.setItemsMenu();
  }

  ngOnDestroy(): void {
    this.menuItems = new Array<MenuItem>();
  }

  setItemsMenu(): void {
    this.menuItems.push({name: 'Home', path: '/home'});
  }
}
