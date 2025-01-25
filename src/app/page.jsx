import { useSession, signOut } from "next-auth/react";
import { Container, Typography, Button } from "@mui/material";


import styles from "./page.module.css"
export default function Home() {

  const { data: session } = useSession();

  if (!session) {
    return <Typography>Redirecting to login...</Typography>;
  }
    return (<div className={styles.page}>
      <main className={styles.main}>
        <h1>Google Auth app</h1>
      </main>
      <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Welcome, {session.user?.name}!
      </Typography>
      <Button variant="outlined" color="secondary" onClick={() => signOut()}>
        Sign Out
      </Button>
    </Container>
    </div>);
}
