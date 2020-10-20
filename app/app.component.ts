import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<GridLayout><page-router-outlet></page-router-outlet></GridLayout>`
})
export class AppComponent implements OnInit{
  constructor() {
    
  }

  ngOnInit() {
  }
}
