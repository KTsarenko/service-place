import {Injectable} from '@angular/core';

declare const firebase: any;

@Injectable({
    providedIn: 'root'
})

export class fbService {

    constructor() {

        const config = {
            apiKey: 'AIzaSyBuNZxv2kk1WjY65WO1g2hI0aQg0lZfuSc',
            authDomain: 'serviceplace-kt.firebaseapp.com',
            databaseURL: 'https://serviceplace-kt.firebaseio.com',
            projectId: 'serviceplace-kt',
            storageBucket: 'serviceplace-kt.appspot.com',
            messagingSenderId: '603384281755'
        };

        firebase.initializeApp(config);
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

    createCustomers(data) {
        const db = firebase.firestore();
        const citiesRef = db.collection('customers');
        citiesRef.doc().set(data);
    }
    createMasters(data) {
        const db = firebase.firestore();
        const citiesRef = db.collection('masters');
        citiesRef.doc().set(data);
    }
}
