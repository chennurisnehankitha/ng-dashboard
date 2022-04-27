import { Subject } from "rxjs";

export class AppUtil {
    selectedSideNavItem = '';
    intelligentItem$ = new Subject<string>();
   
    getSelectedSideNavItem(){
        return this.selectedSideNavItem;
    }

    setSelectedSideNavItem(selectedItem: string){
        this.selectedSideNavItem= selectedItem;
        console.log('selected item has been set as: ', selectedItem);
        this.intelligentItem$.next(selectedItem);
    }

    getIntelligentItem$(){
        return this.intelligentItem$;
    }

    


}