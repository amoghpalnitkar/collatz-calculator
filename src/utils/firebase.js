import * as firebase from 'firebase';

let database;
export const init = () => {
  let config = {
    apiKey: "AIzaSyBejuCz2gC20wZaiSxmNpSMuRDnTDnZNxw",
    authDomain: "collatz-calculator.firebaseapp.com",
    databaseURL: "https://collatz-calculator.firebaseio.com",
    projectId: "collatz-calculator",
    storageBucket: "",
    messagingSenderId: "948114495583"
  }
  firebase.initializeApp(config)
  database = firebase.database()
};