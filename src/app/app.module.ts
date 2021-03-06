import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../directives/tabs/tabs';
import {MyTasksPage} from "../pages/my-tasks/my-tasks";
import {Storage} from "@ionic/storage";
import {NewTaskPage} from "../pages/new-task/new-task";
import {NavbarTitle} from "../directives/navbar-title/navbar-title";
import {TaskDetailsPage} from "../pages/task-details/task-details";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MyTasksPage,
        TabsPage,
        NavbarTitle,
        NewTaskPage,
        TaskDetailsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            statusbarPadding: false
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        MyTasksPage,
        TabsPage,
        NavbarTitle,
        NewTaskPage,
        TaskDetailsPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {
}
