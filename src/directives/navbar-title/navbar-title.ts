import {Component} from '@angular/core';

@Component({
    selector: 'navbar',
    inputs: ['title', 'badge'],
    templateUrl: 'navbar-title.html'
})
export class NavbarTitle {
    public title:string;

}
