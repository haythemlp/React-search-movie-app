import styled from "@emotion/styled";
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import IMovie from "../models/movie";

interface MovieProps {
    movie: IMovie;
}

const MovieCard = styled(Card)({
    display: 'flex',
    marginBottom: '1rem',
});

const MovieMedia = styled(CardMedia)({
    width: 150,
    height: '100%',
    objectFit: 'cover',
});

function Movie({ movie }: MovieProps): JSX.Element {
    return (
        <Grid item xs={12}>
            <MovieCard>
                <Link to={`/movies/${movie.imdbID}`}>
                    <MovieMedia image={movie.Poster} title={movie.Title} />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movie.Title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {movie.Year}
                    </Typography>
                </CardContent>
            </MovieCard>
        </Grid>
    );
}

export default Movie