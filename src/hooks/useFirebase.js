import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Pages/User/Firebase/firebase.init";
initAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
        
    }
    const signUpWithForm = () => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInwithForm = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Firebase Observer to observe user state
    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser(user);
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(() => {
            setIsLoading(false);
        })
    }
    return {
        auth,
        user,
        signInWithGoogle,
        logout,
        isLoading,
        setIsLoading,
        setEmail,
        setPassword,
        setUserName,
        userName,
        updateProfile,
        signUpWithForm,
        signInwithForm
    }
}
export default useFirebase;