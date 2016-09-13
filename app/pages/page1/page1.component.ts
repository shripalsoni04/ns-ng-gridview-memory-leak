import { Component } from '@angular/core';

import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'page1',
    templateUrl: 'pages/page1/page1.component.html'
})
export class Page1Component{

    constructor(private routerExtensions: RouterExtensions){

    }

    goToPage2(){
        this.routerExtensions.navigate(['page2']);
    }
}