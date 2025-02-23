import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyCqyE-eZjsBpmtbIzY4V-MNUKA9CmgmgGA",
  authDomain: "broomtechv2-d2431.firebaseapp.com",
  projectId: "broomtechv2-d2431",
  storageBucket: "broomtechv2-d2431.firebasestorage.app",
  messagingSenderId: "789470234134",
  appId: "1:789470234134:web:cbb4169b9cbd3c60459737",
  measurementId: "G-5TPKYCJXHE"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { app, db, auth, analytics }