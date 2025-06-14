import { initializeApp } from 'firebase/app'
import { getFirestore, enablePersistence } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

if (firebaseConfig.measurementId !== 'test') {
  getAnalytics(app)
}

const db = getFirestore(app)
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()

enablePersistence(db, { synchronizeTabs: true })
  // eslint-disable-next-line no-console
  .catch((e) => console.warn(e))

// For backward compatibility
const firebase = {
  auth: () => auth,
  firestore: () => db,
}

export { firebase, googleAuthProvider, db as default }
