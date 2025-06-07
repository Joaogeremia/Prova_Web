import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';

// Cria um tema escuro
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
        {/* Envolvemos a Toolbar com um Container.
            Isso faz com que o título "Prova ReactJS" fique alinhado
            com o conteúdo das páginas abaixo, que também usam Container. */}
        <Container maxWidth="lg">
          <Toolbar disableGutters> {/* disableGutters remove paddings laterais indesejados */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Prova ReactJS
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
