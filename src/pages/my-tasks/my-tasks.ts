import {Component} from '@angular/core';
import {ModalController, ToastController} from 'ionic-angular';
import {MyTasks} from "../../services/my-tasks.sevice";
import {NewTaskPage} from "../new-task/new-task";
import {Events} from 'ionic-angular';
import {NewTaskAddedEvent} from "../../workshop/tasks/new-task-added.event";
import {Task} from "../../workshop/tasks/task";

@Component({
    selector: 'page-my-tasks',
    templateUrl: 'my-tasks.html',
    providers: [MyTasks]
})
export class MyTasksPage {
    /**
     * Items
     */
    public items:Array<Task>;

    /**
     * Count of items
     */
    public count:Number;

    /**
     * Task service
     */
    private tasksService:MyTasks;

    /**
     * Modal Controller service
     */
    private modalCtrl:ModalController;

    /**
     * Toast Controller service
     */
    private toastCtrl:ToastController;

    /**
     * @param modalCtrl
     * @param toastCtrl
     * @param tasks
     * @param events
     */
    constructor(modalCtrl:ModalController, toastCtrl:ToastController, tasks:MyTasks, events:Events) {
        this.modalCtrl = modalCtrl;
        this.tasksService = tasks;
        this.toastCtrl = toastCtrl;

        this.tasksService.resolve().then(() => {
            this.refreshResults();
        });

        events.subscribe(NewTaskAddedEvent.NAME, (params:[NewTaskAddedEvent]) => {
            this.saveTask(params[0]);
        });
    }

    /**
     * @param event
     */
    public saveTask(event:NewTaskAddedEvent) {
        this.tasksService.addNewTask(event.task);
        this.refreshResults();
        this.presentToastWithNewTask();

    }

    /**
     * Refresh results
     */
    private refreshResults() {
        this.items = this.tasksService.getAll();
        this.count = this.tasksService.count();
    }

    /**
     * Alert message about new task
     */
    private presentToastWithNewTask() {
        this.toastCtrl.create({
            message: 'Task added successfully',
            duration: 3000,
            position: 'top'
        }).present();
    }

    /**
     * @param task
     */
    public removeTask(task:Task) {
        this.tasksService.removeTask(task);
        this.refreshResults();
    }

    /**
     * Open modal with task form
     */
    public newTask() {
        this.modalCtrl.create(NewTaskPage).present();
    }
}
