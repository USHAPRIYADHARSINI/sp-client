// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDoYp0RPXuBIFt94HQ4rF61MPEnR_7D5xQ",
  authDomain: "stockprice-usha.firebaseapp.com",
  projectId: "stockprice-usha",
  storageBucket: "stockprice-usha.appspot.com",
  messagingSenderId: "748037486539",
  appId: "1:748037486539:web:c05aecba5830981838a84e",
  measurementId: "G-KJLPLP2ZPX"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)