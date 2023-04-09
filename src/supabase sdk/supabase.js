import { createClient } from '@supabase/supabase-js'

export function useSupabase() {
    const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON)

    async function signup({ email, password }) {
        return client.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: 'http://localhost:3000/thankyou'
            }
        }
        )
    }

    return { signup }
}