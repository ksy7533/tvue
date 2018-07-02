import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCz6UgLRKVd04oi6qAgJRfAD7Z-1GSDju8",
    authDomain: "tvue-cff24.firebaseapp.com",
    databaseURL: "https://tvue-cff24.firebaseio.com",
    projectId: "tvue-cff24",
    storageBucket: "",
    messagingSenderId: "613128003206"
};

let app = Firebase.initializeApp(config)

export const db = app.database()