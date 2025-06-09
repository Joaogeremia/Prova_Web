import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Prova Web
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/post" />} />
          <Route path="/post" element={<PostListPage />} />
          <Route path="/dados/:id" element={<PostDetailPage />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}
