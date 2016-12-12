import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {Events} from 'ionic-angular';
import {Task} from "../../workshop/tasks/task";
import {NewTaskAddedEvent} from "../../workshop/tasks/new-task-added.event";

@Component({
    selector: 'page-new-task',
    templateUrl: 'new-task.html'
})
export class NewTaskPage {
    /**
     * Title of task
     */
    public title:string;

    /**
     * Description of task
     */
    public description:string;

    /**
     * View controller
     */
    private viewCtrl:ViewController;

    /**
     * Events service
     */
    private events:Events;

    /**
     * @param viewCtrl
     * @param events
     */
    constructor(viewCtrl:ViewController, events:Events) {
        this.viewCtrl = viewCtrl;
        this.events = events;
    }

    /**
     * Submit form
     */
    public add() {
        this.events.publish(NewTaskAddedEvent.NAME, new NewTaskAddedEvent(new Task(this.title, this.description)));
        this.dismiss();
    }

    /**
     * Dismiss modal window
     */
    public dismiss() {
        this.viewCtrl.dismiss();
    }
}
