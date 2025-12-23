import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL // Asegúrate de tener esta variable
})

export const { signIn, signUp, useSession, signOut } = authClient;