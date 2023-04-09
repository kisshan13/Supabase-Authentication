import { useContext, useEffect } from "react"
import Kishcodes from "@/components/Kishcodes"
import { UserDetails } from "@/contexts/User"
import { useRouter } from "next/router"

export default function UserVerify() {

    const [user, setUser] = useContext(UserDetails)
    const router = useRouter()

    useEffect( () => {
        user.email && user.password ? '' : router.push('/')
    })

    return (
        <>
            <div className="wrapper h-screen overflow-hidden font-mono flex justify-center items-center text-white">
                <div>
                    <Kishcodes title={'Check your mailbox'} />
                    <div className="instruction my-11 flex flex-col justify-center items-center">
                        <p className="text-center">Check your mailbox for any verification link from our side.</p>
                        <p className="my-12 text-center">Email sent in your account address</p>
                        <p className="text-green font-semibold ">{user.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}