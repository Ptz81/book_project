import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { set, child, get, ref, remove, getDatabase } from 'firebase/database';

const ERR_INIT_FAILED = 'FirebaseApp initialization failed';

export default class FirebaseDB {
  #db;
  #instance;
  #firebaseApp;

  constructor({ app } = {}) {
    if (this.#instance) return this.#instance;

    try {
      this.#firebaseApp = app || initializeApp(firebaseConfig);
      this.#db = getDatabase(this.#firebaseApp);
    } catch {
      console.error(ERR_INIT_FAILED);
    }

    this.#instance = this;
  }

  get app() {
    return this.#firebaseApp;
  }

  async write(path, data) {
    try {
      return await set(ref(this.#db, path), data);
    } catch (err) {
      console.error(err);
    }
  }

  async read(path) {
    try {
      const snapshot = await get(child(ref(this.#db), path));
      return snapshot.exists() ? snapshot.val() : null;
    } catch (err) {
      console.error(err);
    }
  }

  async remove(path) {
    try {
      return await remove(ref(this.#db, path));
    } catch (err) {
      console.error(err);
    }
  }
}
