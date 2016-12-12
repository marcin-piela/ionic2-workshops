import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {Task} from "../../workshop/tasks/task";

@Component({
    selector: 'page-task-details',
    templateUrl: 'task-details.html'
})
export class TaskDetailsPage {

    private navParams:NavParams;
    public task:Task;

    constructor(navParams:NavParams) {
        this.navParams = navParams;
        this.task = navParams.get('task');
    }

    ionViewDidLoad() {
        console.log('Hello TaskDetailsPage Page');
    }
}
