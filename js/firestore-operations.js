import { db } from './firebase-config.js';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


export async function putNewAccess() {
    await addDoc(collection(db, "accesses"), { key: "value" });
    console.log("put new access")
}
