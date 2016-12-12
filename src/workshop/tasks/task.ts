import {TaskInterface} from "./task.interface";

export class Task implements TaskInterface {
    /**
     * Title of task
     */
    private title:string;

    /**
     * Description of task
     */
    private description:string;

    /**
     * @param title
     * @param description
     */
    public constructor(title:string, description:string) {
        this.title = title;
        this.description = description;
    }

    /**
     * @returns {string}
     */
    public getTitle():string {
        return this.title;
    }

    /**
     * @returns {string}
     */
    public getDescription():string {
        return this.description;
    }
}