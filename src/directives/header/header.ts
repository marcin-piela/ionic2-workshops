import {Component} from '@angular/core';

@Component({
    selector: 'header',
    inputs: ['title'],
    templateUrl: 'header.html'
})
export class Header {
    public title:string;

}
