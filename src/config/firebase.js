import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Khởi tạo kết nối tới project trên firebase console
firebase.initializeApp({
    apiKey: "AIzaSyDw5iO72LMYXFhGKO9vHe18_5wS2Rg-w9U",
    authDomain: "my-scoreboard-f5e1c.firebaseapp.com",
    databaseURL: "https://my-scoreboard-f5e1c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-scoreboard-f5e1c",
    storageBucket: "my-scoreboard-f5e1c.appspot.com",
    messagingSenderId: "127020422072",
    appId: "1:127020422072:web:2f1158696f44e34d11b54d",
    measurementId: "G-ZQ76LR5VRZ"
})

export const auth = firebase.auth()
export const realtimeDB = firebase.database() // realtime database

export const scoresDB = realtimeDB.ref('scores')
export const rulesDB = realtimeDB.ref('rules')

export default firebase