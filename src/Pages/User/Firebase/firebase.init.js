import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
/* Initiliaze Authentication */
const initAuth = () => {
    initializeApp(firebaseConfig);
}
export default initAuth;