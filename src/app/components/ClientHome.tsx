"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { Container, Typography, Button } from "@mui/material"
import { Google } from "@mui/icons-material"

interface ClientHomeProps {
  session: any
}

export default function ClientHome({ session }: ClientHomeProps) {
  const { data: clientSession, status } = useSession()
  const currentSession = clientSession || session

  if (status === "loading") {
    return (
      <Container
        maxWidth="sm"
        sx={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Loading...</Typography>
      </Container>
    )
  }

  if (!currentSession) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Welcome to Google Auth App
        </Typography>
        <Button
          variant="contained"
          startIcon={<Google />}
          onClick={() => signIn("google")}
          sx={{ textTransform: "none" }}
        >
          Sign in with Google
        </Button>
      </Container>
    )
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Welcome, {currentSession.user?.name}!
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {currentSession.user?.email}
      </Typography>
      <Button variant="outlined" color="error" onClick={() => signOut()} sx={{ textTransform: "none" }}>
        Sign Out
      </Button>
    </Container>
  )
}

