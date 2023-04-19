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

const ERR_INIT_FAILED = 'FirebaseApp initialization failed';

export default class FirebaseAuth {
  #auth;
  #firebaseApp;
  #handleSignIn;
  #handleSignOut;
  #instance;

  constructor({ app } = {}) {
    // в рамках одного окна имеет смысл
    if (this.#instance) return this.#instance;

    try {
      const firebaseApp = app || initializeApp(firebaseConfig);
      this.#auth = getAuth(firebaseApp);
    } catch {
      console.error(ERR_INIT_FAILED);
    }

    // корректный способ узнать, авторизован ли юзер в текущем приложении
    onAuthStateChanged(this.#auth, user => {
      if (user) return this.#handleSignIn && this.#handleSignIn(user);
      this.#handleSignOut && this.#handleSignOut();
    });

    this.#instance = this;
  }

  get app() {
    return this.#auth.app;
  }

  get currentUser() {
    return this.#auth.currentUser;
  }

  onSignedIn(handler) {
    this.#handleSignIn = isFunc(handler) ? handler : null;
  }

  onSignedOut(handler) {
    this.#handleSignOut = isFunc(handler) ? handler : null;
  }

  async signUp({ email, password } = {}) {
    try {
      return await createUserWithEmailAndPassword(this.#auth, email, password);
    } catch (err) {
      throw new AuthError(err);
    }
  }

  async signIn({ email, password } = {}) {
    try {
      return await signInWithEmailAndPassword(this.#auth, email, password);
    } catch (err) {
      throw new AuthError(err);
    }
  }

  async signOut() {
    try {
      return await _signOut(this.#auth);
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
