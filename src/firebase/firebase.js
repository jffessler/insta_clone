import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwIWYYW4V6DMWPcANb1Rj2Iiu1NEEXNJo",
  authDomain: "insta-clone-beb2d.firebaseapp.com",
  projectId: "insta-clone-beb2d",
  storageBucket: "insta-clone-beb2d.appspot.com",
  messagingSenderId: "675237082601",
  appId: "1:675237082601:web:455a8566d1abdac2bc0778",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
