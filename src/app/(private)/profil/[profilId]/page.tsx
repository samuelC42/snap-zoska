// src/app/profil/[profilId]/page.tsx

import { fetchUserProfile } from "@/app/actions/profiles";
import { 
  Container, 
  Typography, 
  Avatar, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  IconButton,
  Divider
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Link from "next/link";

export const metadata = { title: `Detail profilu | ZoskaSnap` };

export default async function ProfileDetail({ params }: { params: { profilId: string }}) {
  try {
    const user = await fetchUserProfile(params.profilId);

    return (
      <Container maxWidth="md" sx={{ py: 4, pb: 10 }}>
        {/* User Info Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: 3,
          mb: 4 
        }}>
          <Avatar
            src={user.image || undefined}
            alt={user.name || "User"}
            sx={{
              width: { xs: 120, sm: 150 },
              height: { xs: 120, sm: 150 }
            }}
          />
          <Box>
            <Typography variant="h4" gutterBottom>
              {user.name || "Anonymous"}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.posts.length} príspevkov
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Posts Grid */}
        <Grid container spacing={3}>
          {user.posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Link href={`/prispevok/${post.id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ 
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.imageUrl}
                    alt={post.caption || "Post image"}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {post.caption || "No caption"}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </Typography>

                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mt: 2,
                      borderTop: '1px solid #eee',
                      pt: 2
                    }}>
                      <IconButton size="small" aria-label="like">
                        <FavoriteBorderIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" aria-label="comment">
                        <ChatBubbleOutlineIcon fontSize="small" />
                      </IconButton>
                      <IconButton 
                        size="small"
                        aria-label="bookmark"
                        sx={{ marginLeft: 'auto' }}
                      >
                        <BookmarkBorderIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>

        {user.posts.length === 0 && (
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ textAlign: 'center', mt: 4 }}
          >
            Žiadne príspevky
          </Typography>
        )}
      </Container>
    );
  } catch (error) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" color="error" align="center">
          Používateľ nebol nájdený
        </Typography>
      </Container>
    );
  }
}
