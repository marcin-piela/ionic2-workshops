import {Component} from '@angular/core';
import {Camera} from 'ionic-native';
import {ViewController, Events} from "ionic-angular";
import {NewImageAdded} from "../../workshop/gallery/new-image-added.event";
import {DomSanitizer} from "@angular/platform-browser";

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
     * DomSanitizer Service
     */
    public domSanitizer:DomSanitizer;

    /**
     * @param viewCtrl
     * @param events
     * @param domSanitizer
     */
    constructor(viewCtrl:ViewController, events:Events, domSanitizer: DomSanitizer) {
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.domSanitizer = domSanitizer;
    }

    /**
     * Fired on load
     */
    public ionViewDidLoad() {
        Camera.getPicture({sourceType: 1, destinationType: 0,encodingType:0, targetWidth: 300, targetHeight: 300})
            .then((imageData) => {
                    console.log(imageData);
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
