import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXXnhwDX5LTyslm3ymxwS9nv8e4mM3LeU",
  authDomain: "tienda-astrapia.firebaseapp.com",
  projectId: "tienda-astrapia",
  storageBucket: "tienda-astrapia.appspot.com",
  messagingSenderId: "969487271746",
  appId: "1:969487271746:web:94f5b484f59b160e576adb"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);