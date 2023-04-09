import { useRouter } from "next/router"
import { useEffect, useContext } from "react"
import { Auth } from "@/contexts/SupabaseAuth"
import { decodeJWT } from "@/utils"
import Kishcodes from "@/components/Kishcodes"
import { Head } from "next/document"

export default function Thankyou() {

    const router = useRouter()
    const [isAuthenticated, setAuthenticated] = useContext(Auth)

    useEffect(() => {
        let url = router.asPath.toString()

        if (url.endsWith('&token_type=bearer&type=signup')) {
            let token = url.slice(url.indexOf('=') + 1, url.indexOf('&'))
            if (decodeJWT(token)) {
                localStorage.setItem('token', token)
                setAuthenticated(token)
                let timeout = setTimeout(() => {
                    router.push('/profile'), 3000
                })
            }
            return () => { clearTimeout(timeout) }
        }

        else if (isAuthenticated) {
            let timeout = setTimeout(() => {
                router.push('/profile'), 3000
            })
            return () => { clearTimeout(timeout) }
        }


        else if (!isAuthenticated) {
            let token = localStorage.getItem('token')
            if (decodeJWT(token)) {
                setAuthenticated(token)
                let timeout = setTimeout(() => {
                    router.push('/profile'), 3000
                })
                return () => { clearTimeout(timeout) }
            }

            else {
                router.push('/')
            }
        }
    }, [])

    return (
        <>
        <Head>
            <title>Thankyou</title>
        </Head>
            <div className="my-24">
                <Kishcodes />
                <h1 className=" text-white font-mono text-center text-4xl my-10">Thanks for signing up !!</h1>
                <p className=" text-green font-mono text-center my-10">Soon you’ll redirect to your profile page !!</p>
            </div>
        </>
    )
}