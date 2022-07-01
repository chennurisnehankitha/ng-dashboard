import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { AppUtil } from '../app.util';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less'],
})
export class SideNavComponent implements OnInit, OnChanges, OnDestroy {
  @Input() selectedItem = '';
  
  constructor(private router: Router, private appUtil: AppUtil) {}

  ngOnInit() {
    console.log("on Init");
    
   
    if (location.pathname.includes('info')) {
      this.selectedItem='info';
    } else if (location.pathname.includes('visit')) {
      this.selectedItem='visit';
    } else if (location.pathname.includes('apply')) {
      this.selectedItem='apply';
    } else if (location.pathname.includes('give')) {
      this.selectedItem='give';
    } else {
      this.selectedItem='';
    }
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change selected Item: ', this.selectedItem);
  }

  onClick(item: string) {
    console.log('clicked item is: ', item);
    this.selectedItem = item;
    this.router.navigateByUrl(this.selectedItem);
    // AppUtil appUtil = new AppUtil();
    this.appUtil.setSelectedSideNavItem(item);
  }

  ngOnDestroy(): void {
    console.log("on Destroy");
    
  }


}
