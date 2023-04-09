import Kishcodes from "@/components/Kishcodes"
import Protected from "@/components/Protected"
import Head from "next/head"

function Profile() {
    return (
        <>
        <Head>
            <title>Profile</title>
        </Head>
            <div className="content mt-24">
                <Kishcodes />
                <h1 className=" text-white text-center font-mono text-4xl my-10">Profile</h1>

                <p className="text-center text-green my-5">Ahhh!! there’s nothing to show : (</p>
            </div>
        </>
    )
}

export default function ProtectedProfile() {
    return (
        <>
            <Protected>
                <Profile />
            </Protected>
        </>
    )
}