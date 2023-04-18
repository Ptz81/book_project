import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { set, child, get, ref, remove, getDatabase } from 'firebase/database';

let db;
let dbRef;
let instance;
let firebaseApp;

const ERR_INIT_FAILED = 'FirebaseApp initialization failed';

export default class FirebaseDB {
  constructor({ app } = {}) {
    if (instance) return instance;

    try {
      firebaseApp = app || initializeApp(firebaseConfig);
      db = getDatabase(firebaseApp);
      dbRef = ref(db);
    } catch {
      console.error(ERR_INIT_FAILED);
    }

    instance = this;
  }

  get app() {
    return firebaseApp;
  }

  async write(path, data) {
    try {
      return await set(ref(db, path), data);
    } catch (err) {
      console.error(err);
    }
  }

  async read(path) {
    try {
      const snapshot = await get(child(dbRef, path));
      return snapshot.exists() ? snapshot.val() : null;
    } catch (err) {
      console.error(err);
    }
  }

  async remove(path) {
    try {
      return await remove(ref(db, path));
    } catch (err) {
      console.error(err);
    }
  }
}
