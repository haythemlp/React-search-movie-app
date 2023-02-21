
import { Container } from '@mui/material';
import MovieDetail from "./components/MovieDetail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';


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

