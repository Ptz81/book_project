import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { isFunc, cap } from '../../utils';

import {
  getAuth,
  signOut as _signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

let auth;
let instance;
let firebaseApp;
let handleSignIn;
let handleSignOut;

const ERR_INIT_FAILED = 'FirebaseApp initialization failed';

export default class FirebaseAuth {
  constructor({ app } = {}) {
    if (instance) return instance;

    try {
      firebaseApp = app || initializeApp(firebaseConfig);
      auth = getAuth(firebaseApp);
    } catch {
      console.error(ERR_INIT_FAILED);
    }

    // note: похоже, срабатывает даже при отсутствии текущего пользователя
    onAuthStateChanged(auth, user => {
      if (user) return handleSignIn && handleSignIn(user);
      handleSignOut && handleSignOut();
    });

    instance = this;
  }

  get app() {
    return firebaseApp;
  }

  get currentUser() {
    return auth.currentUser;
  }

  onSignedIn(handler) {
    handleSignIn = isFunc(handler) ? handler : null;
  }

  onSignedOut(handler) {
    handleSignOut = isFunc(handler) ? handler : null;
  }

  /**
   * Добавляет пользователя в Users текущего firebase приложения
   */
  async signUp({ email, password } = {}) {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      throw new AuthError(err);
    }
  }

  /**
   * Если пользователь существует в Users текущего приложения
   * устанавливает его текущим для приложения
   */
  async signIn({ email, password } = {}) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      throw new AuthError(err);
    }
  }

  async signOut() {
    try {
      return await _signOut(auth);
    } catch (err) {
      throw new AuthError(err);
    }
  }
}

//
// Helpers
//

class AuthError extends Error {
  constructor(err) {
    super(parseErrorMsg(err));
    
    this.name = 'AuthError';
    this.code = err.code;
  }
}

function parseErrorMsg(err) {
  const [_, msg] = err.code.match(/\/(.+)/);
  return cap(msg.replaceAll('-', ' '));
}
