import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Collection} from "../workshop/legacy/colleciton";
import {Task} from "../workshop/tasks/task";
import {Events} from "ionic-angular";

@Injectable()
export class MyTasks {
    /**
     * Collection of tasks
     */
    private collection:Collection<Task>;

    /**
     * Events service
     */
    private events:Events;

    /**
     * Storage service
     */
    private storage:Storage;

    /**
     * @param storage
     * @param event
     */
    constructor(storage:Storage, event:Events) {
        this.collection = new Collection<Task>();
        this.events = event;
        this.storage = storage;
    }

    /**
     * @returns {Promise<T>}
     */
    public resolve(): Promise<Array<Task>> {
        return new Promise((resolve, reject) => {
            this.storage.get('tasks').then((tasks) => {
                if (tasks == null) {
                    this.storage.set('tasks', []);
                } else {
                    this.collection = new Collection<Task>();
                    for (var task of tasks) {
                        this.collection.add(new Task(task.title, task.description));
                    }
                }
                resolve(this.collection.all());
            });
        });
    }

    /**
     * Add new task
     * @param task
     */
    public addNewTask(task:Task) {
        this.collection.add(task);
        this.storage.set('tasks', this.collection.all());
    }

    /**
     * Remove task
     * @param task
     */
    public removeTask(task:Task) {
        this.collection.remove(task);
        this.storage.set('tasks', this.collection.all());
    }

    /**
     * Get all my tasks
     * @returns {Collection<Task>}
     */
    public getAll() {
        return this.collection.all();
    }

    /**
     * @returns {number}
     */
    public count() {
        return this.collection.count();
    }
}

