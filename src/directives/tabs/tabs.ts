import { Component } from '@angular/core';

import {MenuController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";
import {MyTasksPage} from "../../pages/my-tasks/my-tasks";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab4Root: any = MyTasksPage;

  constructor(menu: MenuController) {
    menu.enable(true);
  }
}
