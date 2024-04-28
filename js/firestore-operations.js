import { db } from './firebase-config.js';
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


export async function putNewAccess() {

    let location = "unknown place";  // Default location value

    try {
      // Fetch client's IP address
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      const ipAddress = ipData.ip;
  
      try {
        // Fetch location data based on IP address
        const locationResponse = await fetch(`https://ipinfo.io/${ipAddress}/json?token=d9c4c29104bee6`);
        const locationData = await locationResponse.json();
        location = locationData.city + ", " + locationData.region + ", " + locationData.country;
      } catch (error) {
        // If there's an error fetching location, retain "unknown place"
        console.error("Error fetching location: ", error);
      }
  
      // Firestore document data
      const docData = {
        timestamp: Timestamp.now(),
        ip: ipAddress,
        location: location
      };
  
      // Add document to Firestore collection
      const docRef = await addDoc(collection(db, "accesses"), docData);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

}
