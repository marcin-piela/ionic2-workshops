import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MyTasks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-tasks',
  templateUrl: 'my-tasks.html'
})
export class MyTasksPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MyTasksPage Page');
  }

}
