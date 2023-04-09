import Kishcodes from "@/components/Kishcodes"
import Link from "next/link"

export default function NotFound() {

    return (
        <>
            <div className=" my-24">
                <Kishcodes />
                <h1 className=" text-4xl text-center text-red my-14 font-mono">404</h1>
                <h1 className=" text-4xl text-center text-white my-14 font-mono">Page not found</h1>
                <Link href="/" className=" text-white text-center block underline underline-offset-2 hover:text-green">Let's Go Back</Link>
            </div>
        </>
    )
}