import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable({
  providedIn: 'root'
})

export class FbService {

  constructor() {

      const config = {
          apiKey: "AIzaSyBuNZxv2kk1WjY65WO1g2hI0aQg0lZfuSc",
          authDomain: "serviceplace-kt.firebaseapp.com",
          databaseURL: "https://serviceplace-kt.firebaseio.com",
          projectId: "serviceplace-kt",
          storageBucket: "serviceplace-kt.appspot.com",
          messagingSenderId: "603384281755"
      };

      firebase.initializeApp(config);
  }
}
