import {collection, getFirestore, doc, setDoc} from 'firebase/firestore'
import { app } from './firebase'


export const firestore = getFirestore(app)

// Admin input data
export const adminData = collection(firestore, 'adminSOS')

//Edit data
export const editData = async (id: string | undefined, docData: any) => {
    const getData = doc(firestore, `adminSOS/${id}`);
    await setDoc(getData, docData, { merge: true });
    console.log("The value has been written to the database");
};
