import { Component } from '@angular/core';
import {ModalController, Events} from 'ionic-angular';
import {NewPhotoPage} from "../new-photo/new-photo";
import {NewImageAdded} from "../../workshop/gallery/new-image-added.event";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  private modalCtrl:ModalController;
  private events:Events;
  public images:Array<string> = [];

  /**
   * DomSanitizer Service
   */
  public domSanitizer:DomSanitizer;

  /**
   * @param modalCtrl
   * @param events
   * @param domSanitizer
     */
  constructor(modalCtrl:ModalController, events:Events, domSanitizer:DomSanitizer) {
    this.modalCtrl = modalCtrl;
    this.events = events;
    this.domSanitizer = domSanitizer;

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
