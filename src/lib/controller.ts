import {collection, getFirestore} from 'firebase/firestore'
import { app } from './firebase'


export const firestore = getFirestore(app)

// Admin input data
export const adminData = collection(firestore, 'adminSOS')