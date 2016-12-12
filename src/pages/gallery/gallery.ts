import { Component } from '@angular/core';
import {ModalController, Events} from 'ionic-angular';
import {NewPhotoPage} from "../new-photo/new-photo";
import {NewImageAdded} from "../../workshop/gallery/new-image-added.event";

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  private modalCtrl:ModalController;
  private events:Events;
  public images:Array<string> = [];

  /**
   * @param modalCtrl
   * @param events
     */
  constructor(modalCtrl:ModalController, events:Events) {
    this.modalCtrl = modalCtrl;
    this.events = events;

    this.events.subscribe(NewImageAdded.NAME, (event:[NewImageAdded]) => {
      this.images.push(event[0].image);
    })
  }

  /**
   * New photo modal window
   */
  public newPhoto() {
    this.modalCtrl.create(NewPhotoPage).present();
  }
}
