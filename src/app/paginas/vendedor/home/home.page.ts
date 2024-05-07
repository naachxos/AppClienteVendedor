import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';}

    handleRefresh(event: { target: { complete: () => void; }; }) {
      setTimeout(() => {
        // Any calls to load data go here
        event.target.complete();
      }, 2000);
    }

}
