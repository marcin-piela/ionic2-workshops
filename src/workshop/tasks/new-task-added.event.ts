import {Task} from "./task";
export class NewTaskAddedEvent {
    /**
     * Event name
     * @type {string}
     */
    public static NAME:string = 'task:add';

    /**
     * Task instance
     */
    public task:Task;

    /**
     * @param task
     */
    public constructor(task:Task) {
        this.task = task;
    }
}