"use client";

import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { fetchUsers } from "@/app/actions/profiles";
import { useDebounce } from "@/hooks/useDebounce";
import Link from "next/link";

interface User {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
        setFilteredUsers(fetchedUsers);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    loadUsers();
  }, []);

  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setFilteredUsers(users);
      return;
    }

    const searchLower = debouncedSearch.toLowerCase();
    const filtered = users.filter((user) => {
      const nameMatch = user.name?.toLowerCase().includes(searchLower);
      const emailMatch = user.email.toLowerCase().includes(searchLower);
      return nameMatch || emailMatch;
    });

    setFilteredUsers(filtered);
  }, [debouncedSearch, users]);

  return (
    <Container maxWidth="md" sx={{ py: 4, pb: 10 }}>
      <Typography variant="h4" gutterBottom>
        Hľadať používateľov
      </Typography>
      
      <TextField
        fullWidth
        label="Hľadať podľa mena alebo emailu"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Link 
              href={`/profil/${user.id}`} 
              style={{ textDecoration: 'none' }}
            >
              <Card 
                sx={{ 
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={user.image || undefined}
                    alt={user.name || "User"}
                    sx={{
                      width: 100,
                      height: 100,
                      margin: '0 auto 16px auto'
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {user.name || "Anonymous"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
