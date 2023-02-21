import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { connect } from 'react-redux';

import { Backdrop, Card, CardContent, CardMedia, CircularProgress, Container, Grid, TextField, Typography, } from '@mui/material';
import styled from '@emotion/styled';
import { getMoviesApi } from './redux/action';
import MovieDetail from "./components/MovieDetail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';


const MovieCard = styled(Card)({
  display: 'flex',
  marginBottom: '1rem',
});

const MovieMedia = styled(CardMedia)({
  width: 150,
  height: '100%',
  objectFit: 'cover',
});

function App(): JSX.Element {

  return (
    <Container maxWidth="sm">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}




export default App;

