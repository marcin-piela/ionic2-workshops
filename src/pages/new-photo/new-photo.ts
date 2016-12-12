import {Component} from '@angular/core';
import {Camera} from 'ionic-native';
import {ViewController, Events} from "ionic-angular";
import {NewImageAdded} from "../../workshop/gallery/new-image-added.event";

@Component({
    selector: 'page-new-photo',
    templateUrl: 'new-photo.html'
})
export class NewPhotoPage {
    public image:string;

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
     * Fired on load
     */
    public ionViewDidLoad() {
        Camera.getPicture({sourceType: 0, destinationType: 0, targetWidth: 300, targetHeight: 300})
            .then((imageData) => {
                    this.image = 'data:image/jpeg;base64,' + imageData;
                }
            );
    }

    /**
     * Save photo to gallery
     */
    public save() {
        this.events.publish(NewImageAdded.NAME, new NewImageAdded(this.image));
        this.dismiss();
    }

    /**
     * Dismiss modal window
     */
    public dismiss() {
        this.viewCtrl.dismiss();
    }
}
