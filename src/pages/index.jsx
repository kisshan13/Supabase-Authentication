import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/router"
import Kishcodes from "@/components/Kishcodes"
import { useSupabase } from "@/supabase sdk/supabase"
import { UserDetails } from "@/contexts/User"
import Protected from "@/components/Protected"
import { Head } from "next/document"

function Home() {

  const [user, setUser] = useContext(UserDetails)
  const [status, setStatus] = useState('not-filled')
  const [error, setError] = useState('')

  const router = useRouter()
  const supabase = useSupabase()

  const EMAILREGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  function validateInputs() {
    let isValid = EMAILREGEX.test(user.email) & user.password.length > 5

    return isValid
  }

  function handleInput(inputFor, event) {

    if (inputFor === 'email') {
      setUser(user => {
        return {
          ...user,
          email: event.target.value
        }
      })
    }

    else {
      setUser(user => {
        return {
          ...user,
          password: event.target.value
        }
      })
    }
  }

  async function handleSubmission(e) {
    e.preventDefault()

    setStatus('submitting')


    const { data, error } = await supabase.signup({ email: user.email, password: user.password })
    if(data) {
      router.push('/auth')
    }

    else{
      setError(error)
    }
  }

  useEffect(() => {
    validateInputs() ? setStatus('') : setStatus('not-filled')
  }, [user])

  return (
    <>
    <Head>
      <title>Sign Up</title>
    </Head>
      <div className="wrapper h-screen overflow-hidden font-mono flex justify-center items-center text-white">
        <div>
          <Kishcodes title={'Sign Up'} />
          {error}
          <div className="signup-wrapper text-white text-center mt-[80px]">
            <form onSubmit={handleSubmission} autoComplete="off" className=" flex flex-col justify-center items-center gap-5 relative">
              {status === 'submitting' ?
                <div className="loading flex flex-col justify-center items-center absolute bg-blackWithOpacity p-3 left-1/2 bottom-1/2 right-[150px]">
                  <div className="loader border-4 border- border-t-red w-12 h-12 rounded-full my-3 animate-spin"></div>
                  <p>Loading...</p>
                </div> : ''}
              <div>
                <input value={user.email} onChange={(e) => handleInput('email', e)} type="text" name="email" placeholder="Email" className=" w-[270px] h-[36px] bg-blackSec shadow-xl rounded-md p-2" autoComplete={false} disabled={status === 'submitting'} />
                {
                  user.email.match(EMAILREGEX) ? '' : <p className=" text-sm my-4 text-green">Tip: Must look like abc@provider.com</p>
                }
              </div>

              <div>
                <input value={user.password} onChange={(e) => handleInput('password', e)} type="password" name="password" placeholder="Password" className=" w-[270px] h-[36px] bg-blackSec shadow-xl rounded-md p-2" autoComplete={false} disabled={status === 'submitting'} />
                {
                  user.password.length > 5 ? '' : <p className=" text-sm my-4 text-green">Tip: More than 5 character</p>
                }
              </div>

              <div className=" mt-5">
                <button className={status === 'not-filled' || status === 'submitting' ? `bg-red text-white rounded-md px-4 py-2 cursor-not-allowed` : `bg-green text-white rounded-md px-4 py-2`} disabled={status === 'not-filled' | status === 'submitting'}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default function SignUp() {
  return (
    <Protected>
      <Home />
    </Protected>
  )
}