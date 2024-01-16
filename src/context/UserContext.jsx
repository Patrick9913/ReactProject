import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";


export const UserContext = createContext()

export const UserProvider = ({children}) => {
    
    const [ user, setUser ] = useState({
        email: null,
        log: false,
        userId: null
    })

    const login = async (values) => {
        try {
            await signInWithEmailAndPassword ( auth, values.email, values.password )

            setUser({
                email: user.email,
                userId: user.uid,
                log: true
            });
    
            Swal.fire("Bienvenido");

        } catch (error) {
            setUser({
                email: null,
                log: false,
                userId: null
            });
            Swal.fire("Los datos ingresados no existen")
        }
    }

    const register = async (values) => {

        await createUserWithEmailAndPassword ( auth, values.email, values.password )

        Swal.fire("Bienvenido a CyberCart Haven")
    }

    const logout = () => {
        signOut(auth)
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    userId: user.uid,
                    log: true
                })
            } else {
                setUser({
                    email: null,
                    userId: null,
                    log: false
                })
            }
        })
    }, [])

    return (
        <UserContext.Provider value={{user, googleLogin, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}