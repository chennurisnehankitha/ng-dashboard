import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AppUtil } from 'src/app/app.util';

@Component({
    selector: 'give',
    templateUrl: 'give.component.html',
    styleUrls: ['give.component.scss']
})
export class GiveComponent implements OnInit, OnDestroy, OnChanges {
    @Input() name = "sneha";
    subs: any;
    date1 = null;
    constructor(private appUtil: AppUtil) {}
    ngOnChanges(changes: SimpleChanges): void {
        console.log("on changes", this.name);
        
    }

    ngOnInit(): void {
        console.log("on Init");
        
       this.subs = this.appUtil.getIntelligentItem$().subscribe((x) => {
            console.log(x, ' :give: ', Math.random());
          });
    }

    ngOnDestroy(): void {
        console.log("on destroy");
        
        this.subs.unsubscribe();
    }
}
