import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import ClientHome from "./components/ClientHome"
import styles from "./page.module.css"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Google Auth app</h1>
        <ClientHome session={session} />
      </main>
    </div>
  )
}

