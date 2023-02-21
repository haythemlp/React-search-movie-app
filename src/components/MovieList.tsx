import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { connect } from 'react-redux';

import { Backdrop, CircularProgress, Container, FormControl, Grid, TextField, } from '@mui/material';

import { getMoviesApi } from '../redux/action';
import MovieComponents from '../components/movie';
import IMovie from '../models/movie';


interface MovieListProps {
  loading: boolean;
  getMoviesData: IMovie[];
  getMoviesError: string;
  searchInputValue: string;
  getMoviesApi(searchText: string, successCallback: any, errorCallback: any): any
}


function MovieList({ loading, getMoviesData, getMoviesError, searchInputValue, getMoviesApi }: MovieListProps): JSX.Element {
  const [searchText, setSearchText] = useState('');
  const timerRef = useRef<NodeJS.Timeout>();


  useEffect(() => {
    if (searchText) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        getMoviesApi(searchText, () => { }, () => { })

      }, 1000);

    }

  }, [searchText]);
  useEffect(() => {
    setSearchText(searchInputValue)

  }, []);


  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  return (<Container maxWidth="sm">
    <FormControl fullWidth sx={{ py: 2 }}>
      <TextField
        label="Search for movies"
        className='width'
        value={searchText}
        onChange={handleSearchInputChange}
      /></FormControl>
    <Grid container spacing={2}>

      {getMoviesData &&

        getMoviesData.map((movie) => (
          <MovieComponents key={movie.imdbID} movie={movie} />
        ))
      }
      {getMoviesError && (<h1>{getMoviesError}</h1>)}
    </Grid>
    <Backdrop
      sx={{ color: '#fff', zIndex: 999999 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  </Container>
  );
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.MovieApi.loading,
    getMoviesData: state.MovieApi.getMoviesResult.data,
    getMoviesError: state.MovieApi.getMoviesResult?.error,
    searchInputValue: state.MovieApi.searchInputValue

  };
};


export default connect(mapStateToProps, { getMoviesApi })(MovieList);

