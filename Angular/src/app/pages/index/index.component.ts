import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  currentNav: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  navClick(current: string) {
    this.currentNav = current;

  }
}
