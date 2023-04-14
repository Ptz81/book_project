import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import utils from '../utils';

const { isFunc, cap } = utils;

import {
  getAuth,
  signOut as _signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

let auth;
let instance;
let handleSignIn;
let handleSignOut;

export default class FirebaseAuth {
  constructor({ onSignedIn, onSignedOut } = {}) {
    if (instance) return instance;
    instance = this;

    // инициализация
    initializeApp(firebaseConfig);
    auth = getAuth();

    // обработчики состояния
    this.onSignedIn = onSignedIn;
    this.onSignedOut = onSignedOut;

    // note: похоже, срабатывает даже при отсутствии текущего пользователя
    onAuthStateChanged(auth, user => {
      if (user) return handleSignIn && handleSignIn(user);
      handleSignOut && handleSignOut();
    });
  }

  get currentUser() {
    return auth.currentUser;
  }

  set onSignedIn(handler) {
    handleSignIn = isFunc(handler) ? handler : null;
  }

  set onSignedOut(handler) {
    handleSignOut = isFunc(handler) ? handler : null;
  }

  /**
   * Добавляет пользователя в Users текущего firebase приложения
   */
  async signUp(email, password) {
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
  async signIn(email, password) {
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
  }
}

function parseErrorMsg(err) {
  const [_, msg] = err.code.match(/\/(.+)/);
  return cap(msg.replaceAll('-', ' '));
}
