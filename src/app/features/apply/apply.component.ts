import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'apply',
    templateUrl: 'apply.component.html',
    styleUrls: ['apply.component.scss']
})
export class ApplyComponent {
    @Input() toggleFlag = false;

    @Output() outputFlag = new EventEmitter<boolean>(false);
    checked: boolean = false;

    handleChange(event: any){
        this.outputFlag.emit(this.toggleFlag);
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

}
