import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs/index';

declare const firebase: any;

@Injectable({
  providedIn: 'root'
})

export class fbService {

  isLogined: boolean = false;
  userUuid: string = '';

  constructor() {
  }

  public initFbApp() {
    const config = {
      apiKey: 'AIzaSyBuNZxv2kk1WjY65WO1g2hI0aQg0lZfuSc',
      authDomain: 'serviceplace-kt.firebaseapp.com',
      databaseURL: 'https://serviceplace-kt.firebaseio.com',
      projectId: 'serviceplace-kt',
      storageBucket: 'serviceplace-kt.appspot.com',
      messagingSenderId: '603384281755'
    };
    firebase.initializeApp(config);
    this.authCheck();
  }

  private authCheck() {
    firebase.auth().onAuthStateChanged(user => {
      this.isLogined = !!user;
      this.userUuid = user ? user.uid : '';
    });
  }

  getMasters() {
    const db = firebase.firestore();
    const ordersCollection = [];
    db.collection('masters').get().then(query => {
      query.forEach(doc => {
        const order = {
          ... doc.data(),
          id: doc.id,
        };
        ordersCollection.push(order);
      });
    });
    return ordersCollection;
  }

  getCustomers() {
    const db = firebase.firestore();
    const ordersCollection = [];
    db.collection('customers').get().then(query => {
      query.forEach(doc => {
        const order = {
          ... doc.data(),
          id: doc.id,
        };
        ordersCollection.push(order);
      });
    });
    return ordersCollection;
  }

  getSingle(id, collection) {
    const db = firebase.firestore();
    const docRef = db.collection(collection).doc(id);
    return docRef.get();
  }

  createCustomers(data) {
    const db = firebase.firestore();
    const citiesRef = db.collection('customers');
    return citiesRef.doc().set(data);
  }

  createMasters(data) {
    const db = firebase.firestore();
    const citiesRef = db.collection('masters');
    return citiesRef.doc().set(data);
  }

  uploadFiles(file) {
    const storageRef = firebase.storage().ref();
    return storageRef.child('images/' + file.name).put(file);
  }

  public signUp(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  public signIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  public logout() {
    return firebase.auth().signOut();
  }

  public getProfile() {
    return firebase.firestore().collection('profile').doc(this.userUuid).get();
  }

  public setProfile(data, uid) {
    console.log('data', data);
    console.log('uid', uid);

    const db = firebase.firestore();
    const citiesRef = db.collection('profile');
    // return citiesRef.doc(uid).set({email: data});
    return citiesRef.doc(uid).set(data);
  }

}
