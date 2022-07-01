import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppUtil } from 'src/app/app.util';

@Component({
    selector: 'apply',
    templateUrl: 'apply.component.html',
    styleUrls: ['apply.component.scss']
})
export class ApplyComponent implements OnInit, OnDestroy {
    @Input() toggleFlag = true;
    toggleFlagFirst = false;
    @Output() outputFlag = new EventEmitter<boolean>(false);
    checked: boolean = false;
    subs: any;

    constructor(private appUtil: AppUtil, private router: Router) {}

    ngOnInit(): void {
        this.subs = this.appUtil.getIntelligentItem$().subscribe((x) => {
            console.log(x, ' :apply: ', Math.random());
          });
    }

    handleChange(event: any){
        this.outputFlag.emit(this.toggleFlag);
    }

    firstTabExpanded(event: any) {
        console.log('first tab is expanded', event);
        if(event.index === 0) {
            this.router.navigateByUrl('info');
        }
    }



    // toggleLabel = Toggle_Label.Expand_All;
    // onToggle(){
        // this.toggleFlag= !this.toggleFlag;
        // if(this.toggleFlag){
        //     this.toggleLabel = Toggle_Label.Collapse_All;
        // }else{
        //     this.toggleLabel = Toggle_Label.Expand_All;
        // }

    // }

    ngOnDestroy(): void {
        console.log('apply destroyed');
        
        this.subs.unsubscribe();
    }

}
