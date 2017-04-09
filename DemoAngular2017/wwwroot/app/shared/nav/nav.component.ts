import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  moduleId: module.id,
  selector: 'story-nav',
   templateUrl: './nav.component.html',
   styleUrls: ['./nav.component.css'],
   
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Real', link: ['/real'] },
      { caption: 'Barca', link: ['/barca'] },
      { caption: 'Bayern', link: ['/bayern'] },
      { caption: 'Chelsea', link: ['/chelsea'] },
      { caption: 'Others', link: ['/others'] },
    ];
  }
}