import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1g_FVdPhuT6V7SytK14a1D2X1d24pARw",
  authDomain: "authjop.firebaseapp.com",
  projectId: "authjop",
  storageBucket: "authjop.appspot.com",
  messagingSenderId: "116051114241",
  appId: "1:116051114241:web:4ccdc6dbb39a8212f0c300"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
