import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../directives/tabs/tabs';
import {MyTasksPage} from "../pages/my-tasks/my-tasks";
import {Header} from "../directives/header/header";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MyTasksPage,
        TabsPage,
        Header
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        MyTasksPage,
        TabsPage,
        Header
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
