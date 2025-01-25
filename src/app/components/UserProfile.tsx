"use client"

import { signOut } from "next-auth/react"
import { Button, Card, CardContent, Typography } from "@mui/material"

interface UserProfileProps {
  user: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 345 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5" component="div" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {user.email}
        </Typography>
        <Button variant="outlined" onClick={() => signOut()} sx={{ mt: 2, textTransform: "none" }}>
          Sign Out
        </Button>
      </CardContent>
    </Card>
  )
}

