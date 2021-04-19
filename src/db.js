import firebase from "firebase/app";
import "firebase/database";

const config = {
    //API KEYS
    apiKey: "AIzaSyAHt4dvNZnXIUx4W9stDlFMP0dKx8kxfhs",
    authDomain: "fir-vue-chatroom.firebaseapp.com",
    projectId: "fir-vue-chatroom",
    storageBucket: "fir-vue-chatroom.appspot.com",
    messagingSenderId: "196817557973",
    appId: "1:196817557973:web:2485509195a915ca08855c"
}
const db = firebase.initializeApp(config);
export default db;