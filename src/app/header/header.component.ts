import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppUtil } from '../app.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @Output() homeClicked = new EventEmitter<string>();
  flag = false;
  item = 'sneha';
  constructor(private router: Router, private appUtil: AppUtil) {}

  ngOnInit() {
    console.log('this item', this.item);
    // this.item = this.appUtil.getSelectedSideNavItem();
    this.appUtil.getIntelligentItem$().subscribe((x) => {
      this.item = x;
      console.log('Am I being called many items? ', x);
    });
    console.log('this item', this.item);
  }

  onClick() {
    // const now = new Date().getMilliseconds();
    // this.homeClicked.emit('home'+now);
    // this.flag = !this.flag;
    // this.homeClicked.emit(this.flag ? 'home': 'againHome');
    // this.item = this.appUtil.getSelectedSideNavItem();

    this.homeClicked.emit('home' + Math.random());
    this.router.navigateByUrl('home');
  }
}
