import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// // Subscription to expenses, array now updates on database change. 
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             // Requires id
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//             // Creating a new array by iterating through all snapshots
//         })
//     })
//         console.log(expenses)
// })

// // child_removed subscriber
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_changed subscriber
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_cadded subscriber - will print two arrays, check documentation for more information. 
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// // This is the same thing as using. .set(null) = remove
// // database.ref('isSingle').set(null)

// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log("Remove succeeded.")
// //   })
// //     .catch((e) => {
// //         console.log("Remove failed: " + error.message)
// //   });