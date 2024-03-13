let firebaseConfig = {
    apiKey: "AIzaSyAGVxpjO3hkD6B9Zm8DF63ebySX7YFY85E",
    authDomain: "blogging-website-83c24.firebaseapp.com",
    projectId: "blogging-website-83c24",
    storageBucket: "blogging-website-83c24.appspot.com",
    messagingSenderId: "464100909704",
    appId: "1:464100909704:web:9c53be27282b66e62cf53d"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();