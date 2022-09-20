import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../../Firebase'

export const signUpapi = (values) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user
        onAuthStateChanged(auth, (user) => {
          if (user) {
            sendEmailVerification(user)
          }
        })
      })
      .then((user) => {
        onAuthStateChanged(auth, (user) => {
          if (user.emailVerified) {
            resolve({ payload: 'successfully.' })
          } else {
            resolve({ payload: 'Please check your email.' })
          }
        })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode.localeCompare('auth/email-already-in-use') === 0) {
          reject({ payload: 'Email id already registered.' })
        } else {
          reject({ payload: 'Errorcode : ' + errorCode })
        }
      })
  })
}

export const signInapi = (values) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user
        if (user.emailVerified) {
          resolve({ payload: user })
        } else {
          reject({ payload: 'Please verify your email.' })
        }
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode.localeCompare('auth/wrong-password') === 0) {
          reject({ payload: 'Wrong email or password.' })
        } else {
          reject({ payload: 'Errorcode : ' + errorCode })
        }
      })
  })
}

export const signoutapi = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve({ payload: 'Log out successfully.' })
      })
      .catch((error) => {
        reject({ payload: 'Errorcode : ' + error.code })
      })
  })
}

export const signingoogleapi = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        resolve({ payload: user })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        reject({ payload: errorCode })
      })
  })
}

export const forgetapi = (values) => {
  console.log(values)
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        resolve({ payload: 'Please check your email' })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        reject({ payload: errorCode })
      })
  })
}
