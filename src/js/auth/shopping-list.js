import FirebaseAuth from './firebase/auth';
import FirebaseDB from './firebase/db';
import { isStr } from '../utils';

const ERR_ACCESS_DENIED = 'Unauthorized access attempt';
const ERR_AUTH_EXPECTED = 'FirebaseAuth instance expected!';

let instance;
let _auth;
let db;

export default class ShoppingList {
  /**
   * @param {FirebaseAuth} auth
   */
  constructor(auth) {
    if (instance) return instance;

    if (!(auth instanceof FirebaseAuth)) throw new Error(ERR_AUTH_EXPECTED);
    db = new FirebaseDB((_auth = auth));

    instance = this;
  }

  /**
   * Добавляет книгу в список
   * @param {object} bookData - информация о книге
   */
  async add(bookData) {
    const id = bookData?._id;
    if (id) return await setUserData(`shoppingList/${id}`, bookData);
  }

  /**
   * Вернет информацию о книге
   * @param {*} id - идентификатор книги
   * @param {*} serialized - (true) вернет сериализованный объект
   */
  async get(id, serialized = false) {
    if (!id) return;
    const bookData = await getUserData(`shoppingList/${id}`);
    return bookData && serialized ? JSON.stringify(bookData) : bookData;
  }

  /**
   * Удаляет книгу из списка
   * @param {*} idOrBookData - идентификатор или объект книги
   */
  async remove(idOrBookData) {
    const id = idOrBookData && (idOrBookData?._id || idOrBookData);
    if (id) return await removeUserData(`shoppingList/${id}`);
  }

  /**
   * Вернет объект со всеми книгами
   * @param {*} serialized - (true) вернет сериализованный объект
   */
  async getAll(serialized = false) {
    const data = await getUserData(`shoppingList`);
    return data && serialized ? JSON.stringify(data) : data;
  }

  /**
   * Вернет сериализованный массив со всеми объекатми книг
   */
  async getFormattedAll() {
    const data = await getUserData(`shoppingList`);
    return data ? JSON.stringify(Object.values(data)) : data;
  }

  /**
   * Перезаписывает весь список книг целиком
   * @param {*} newValue - новые данные
   */
  // async update(newValue) {
  //   return await setUserData(`shoppingList`, newValue);
  // }
}

//
// Helpers
//

async function setUserData(path, data) {
  const uid = checkAccess();
  return path && (await db.write(`users/${uid}/${path}`, data));
}

async function getUserData(path) {
  const uid = checkAccess();
  return path && (await db.read(`users/${uid}/${path}`));
}

async function removeUserData(path) {
  const uid = checkAccess();
  return path && (await db.remove(`users/${uid}/${path}`));
}

function checkAccess() {
  const { uid } = _auth?.currentUser || '';
  if (!uid) throw new UserAuthError(ERR_ACCESS_DENIED);
  return uid;
}

class UserAuthError extends Error {
  constructor(err) {
    super(err);
    this.name = 'UserAuthError';
  }
}
