import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyB78lljdv9SPJjeTn_rVpZvqgVC75aGgmU",
      authDomain: "gigs3-dbe71.firebaseapp.com",
      databaseURL: "https://gigs3-dbe71.firebaseio.com",
      projectId: "gigs3-dbe71",
      storageBucket: "gigs3-dbe71.appspot.com",
      messagingSenderId: "848214227271"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user){
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else {
        this.rootPage = HomePage;
        unsubscribe();
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
