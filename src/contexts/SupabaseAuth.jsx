import { createClient } from "@supabase/supabase-js";
import { createContext, useState, useEffect } from "react";

export const Auth = createContext()

export default function SupabaseAuth({ children }) {
    const [isAuthenticated, setAuthenticated] = useState()

    return (
        <Auth.Provider value={[ isAuthenticated, setAuthenticated ]}>
            {children}
        </Auth.Provider>
    )
}