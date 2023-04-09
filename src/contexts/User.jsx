import { useState, createContext } from "react";

export const UserDetails = createContext()

export default function User({ children }) {
    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    )

    return <UserDetails.Provider value={[user, setUser]}>
        {children}
    </UserDetails.Provider>
}