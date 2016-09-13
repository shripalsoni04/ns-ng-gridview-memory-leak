import { Component } from '@angular/core';

import { GC } from 'utils/utils';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'page2',
    templateUrl: 'pages/page2/page2.component.html'
})
export class Page2Component{

    constructor(private routerExtensions: RouterExtensions){

    }

    goBack(){
        GC();
        this.routerExtensions.backToPreviousPage();
    }
}