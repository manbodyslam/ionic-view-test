import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotifyPage } from '../pages/notify/notify';

export const config = {
  apiKey: "AIzaSyB6gE2DOuOuwDR88UuozfUZFbBW4z9HNp8",
  authDomain: "ionic3-fliebase.firebaseapp.com",
  databaseURL: "https://ionic3-fliebase.firebaseio.com",
  projectId: "ionic3-fliebase",
  storageBucket: "ionic3-fliebase.appspot.com",
  messagingSenderId: "971327514371"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotifyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotifyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
