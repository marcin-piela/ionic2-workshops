import { Component } from '@angular/core';

import {MenuController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";
import {MyTasksPage} from "../../pages/my-tasks/my-tasks";
import {GalleryPage} from "../../pages/gallery/gallery";
import {MapPage} from "../../pages/map/map";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = MyTasksPage;
  tab3Root: any = GalleryPage;
  tab4Root: any = MapPage;

  constructor(menu: MenuController) {
    menu.enable(true);
  }
}
