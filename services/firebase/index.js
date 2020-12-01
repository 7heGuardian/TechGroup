import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB4i1hFp884Dg2y7ItTZFAvOtvVWsqaQRE",
  authDomain: "rick-and-morty-87624.firebaseapp.com",
  databaseURL: "https://rick-and-morty-87624.firebaseio.com",
  projectId: "rick-and-morty-87624",
  storageBucket: "rick-and-morty-87624.appspot.com",
  messagingSenderId: "275463979183",
  appId: "1:275463979183:web:c30f3051289ec1a3e7d45a",
  measurementId: "G-9ZXH677RZG"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

// const mapUserFromFirebaseAuthToUser = (user) => {
//   const { displayName, email, photoURL, uid } = user

//   return {
//     avatar: photoURL,
//     username: displayName,
//     email,
//     uid,
//   }
// }

// export const onAuthStateChanged = (onChange) => {
//   return firebase
//     .auth()
//     .onAuthStateChanged(user => {
//       const normalizeUser = user ?
//         mapUserFromFirebaseAuthToUser(user) : null

//       onChange(normalizeUser)
//     })
// }

// export const loginWithGoogle = () => {
//   const googleProvider = new firebase.auth.GoogleAuthProvider()
//   return firebase.auth().signInWithPopup(googleProvider)
// }

// export const addPostComment = ({ avatar, content, userId, userName }) => {
//   return db.collection('wikiComments').add({
//     avatar,
//     content,
//     userId,
//     userName,
//     createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
//     likesCount: 0,
//     sharedCount: 0,
//   })
// }
