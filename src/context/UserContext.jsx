import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const UserContext = createContext()

export const UserProvider = ({children}) => {
    
    const [ user, setUser ] = useState({
        email: null,
        log: false,
        userId: null
    })

    const login = (values) => {
        signInWithEmailAndPassword ( auth, values.email, values.password )
        .then((userCredencial) => {
            const usuario = userCredencial.usuario
            setUser({
                email: user.email,
                log: true,
                userId: user.userId
            })
        })
    }

    const register = (values) => {
        createUserWithEmailAndPassword ( auth, values.email, values.password )
        .then((userCredencial) => {
            const usuario = userCredencial.usuario
            setUser({
                email: user.email,
                log: true,
                userId: user.userId
            })
        })
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