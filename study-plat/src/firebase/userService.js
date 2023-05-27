import { db } from './firebaseConfig'
import { getObject, getObjects, setObject } from '../utils/requestUtil'
import { doc, collection } from 'firebase/firestore'

export const getUser = (id, completion) => {
    const docRef = doc(db, "users", id)

    getObject(docRef, completion)
}

export const createUser = (id, name, email, password, completion) => {
    const doc = doc(db, "users", id)

    setObject(doc, {
        id: id,
        name: name,
        email: email,
        password: password
    }, completion)
}