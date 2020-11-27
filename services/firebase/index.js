import * as firebase from 'firebase'
import 'firebase/firestore'

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

const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizeUser = user ?
        mapUserFromFirebaseAuthToUser(user) : null

      onChange(normalizeUser)
    })
}


export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const addDevit = ({ avatar, content, userId, userName }) => {
  return db.collection("devits").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const fetchLastesDevits = () => {
  return db.collection('devits')
    .get()
    .then(({ docs }) => {
      return docs.map(doc => {
        const id = doc.id
        const data = doc.data()
        const { createdAt } = data
        const date = new Date(createdAt.seconds * 1000)
        const normalizedCreatedAt = new Intl.DateTimeFormat('es-VE').format(date)

        return {
          ...data,
          id,
          createdAt: normalizedCreatedAt
        }
      })
    })
}