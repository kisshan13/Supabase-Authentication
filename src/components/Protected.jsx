import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Auth } from "@/contexts/SupabaseAuth";
import { decodeJWT } from "@/utils";

export default function Protected({ children }) {

    const [isAuthenticated, setAuthenticated] = useContext(Auth)
    const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (isAuthenticated) {
                router.push('/profile')
            }

            else if (!isAuthenticated) {
                let token = localStorage.getItem('token')
                if (decodeJWT(token)) {
                    setAuthenticated(token)
                    router.push('/profile')
                }

                else {
                    window.location.pathname === '/' ? '' : ''
                }
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}