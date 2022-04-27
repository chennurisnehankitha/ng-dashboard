import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppUtil } from 'src/app/app.util';

@Component({
    selector: 'give',
    templateUrl: 'give.component.html',
    styleUrls: ['give.component.scss']
})
export class GiveComponent implements OnInit, OnDestroy {
    subs: any;
    constructor(private appUtil: AppUtil) {}

    ngOnInit(): void {
       this.subs = this.appUtil.getIntelligentItem$().subscribe((x) => {
            console.log(x, ' :give: ', Math.random());
          });
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
