import '@/styles/globals.css'
import SupabaseAuth from '@/contexts/SupabaseAuth'
import User from '@/contexts/User'

export default function App({ Component, pageProps }) {
  return (
    <>
      <User>
        <SupabaseAuth>
          <Component {...pageProps} />
        </SupabaseAuth>
      </User>
    </>
  )
}
