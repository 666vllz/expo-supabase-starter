import React, { useContext, useEffect, useState } from "react"
import type { User, Session } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"

const AuthContext = React.createContext<{
  session: Session | null
  user: User | null
  signOut: () => void
}>({
  session: null,
  user: null,
  signOut: () => null,
})

export function useAuth() {
  const value = useContext(AuthContext)

  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useAuth must be wrapped in a <AuthProvider />")
    }
  }

  return value
}

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session ? session.user : null)
      setLoading(false)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session ? session.user : null)
      setLoading(false)
    })
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const value = { session, user, signOut }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
