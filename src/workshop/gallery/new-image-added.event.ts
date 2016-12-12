export class NewImageAdded {
    /**
     * Event name
     * @type {string}
     */
    public static NAME:string = 'image:add';

    /**
     * Image base64
     */
    public image:string;

    /**
     * @param image
     */
    public constructor(image:string) {
        this.image = image;
    }
}