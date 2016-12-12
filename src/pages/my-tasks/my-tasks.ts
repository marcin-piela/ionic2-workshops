import {Component} from '@angular/core';
import {ModalController, ToastController, LoadingController, Loading, NavController, ItemSliding} from 'ionic-angular';
import {MyTasks} from "../../services/my-tasks.sevice";
import {NewTaskPage} from "../new-task/new-task";
import {Events} from 'ionic-angular';
import {NewTaskAddedEvent} from "../../workshop/tasks/new-task-added.event";
import {Task} from "../../workshop/tasks/task";
import {TaskDetailsPage} from "../task-details/task-details";

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
     * Navigation Controller service
     */
    private navCtrl:NavController;

    /**
     * Modal Controller service
     */
    private modalCtrl:ModalController;

    /**
     * Loading Controller service
     */
    private loadingCtrl:LoadingController;

    /**
     * Task service
     */
    private tasksService:MyTasks;

    /**
     * Toast Controller service
     */
    private toastCtrl:ToastController;

    /**
     * Loading instance
     */
    private loading:Loading;

    /**
     *
     * @param navCtrl
     * @param modalCtrl
     * @param toastCtrl
     * @param loadingCtrl
     * @param tasks
     * @param events
     */
    constructor(navCtrl:NavController,
                modalCtrl:ModalController,
                toastCtrl:ToastController,
                loadingCtrl:LoadingController,
                tasks:MyTasks,
                events:Events) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tasksService = tasks;

        this.showLoading();

        this.showInfoToast();

        this.tasksService.resolve().then(() => {
            this.refreshResults();
            this.loading.dismiss();
        });

        events.subscribe(NewTaskAddedEvent.NAME, (params:[NewTaskAddedEvent]) => {
            this.saveTask(params[0]);
        });
    }

    public showInfoToast() {
        this.toastCtrl.create({
            message: 'You can swipe left to show options on task item',
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'Ok'
        }).present();
    }

    /**
     * Show loading spinner
     */
    private showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        this.loading.present();
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

    /**
     * Reorder items
     * @param indexes
     */
    public reorderItems(indexes) {
        this.tasksService.reorderItems(indexes);
    }

    /**
     * Go to task details
     * @param task
     * @param slidingItem
     */
    public goToTask(task:Task, slidingItem:ItemSliding) {
        slidingItem.close();
        this.navCtrl.push(TaskDetailsPage, {
            'task': task
        });
    }
}
