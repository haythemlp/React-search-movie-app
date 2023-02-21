import { Backdrop, Box, Chip, CircularProgress, Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import IMovie from "../models/movie";
import { getMovieDetailApi } from "../redux/action";
import { MovieMedia } from "../styles/Movies";


interface MovieDetailProps {
    loading: boolean;
    getMovieDetailData?: IMovie;
    getMovieDetailError?: any;
    getMovieDetailApi(id: string, successCallback: any, errorCallback: any): void
}

function MovieDetail({ loading, getMovieDetailData, getMovieDetailError, getMovieDetailApi }: MovieDetailProps): JSX.Element {

    let { id } = useParams();


    useEffect(() => {
        if (id) getMovieDetailApi(id, () => { }, () => { })
    }, [id]);

    if (loading) {
        return <Backdrop
            sx={{ color: '#fff', zIndex: 999999 }}
            open

        >
            <CircularProgress color="inherit" />
        </Backdrop>;
    }
    if (getMovieDetailData) {
        return (
            <Box display="">
                <Link to="/">Back to search</Link>

                <MovieMedia image={getMovieDetailData.Poster} title={getMovieDetailData.Title} />
                <Box flexGrow={1} ml={3}>
                    <Typography variant="h3" component="h1">
                        {getMovieDetailData.Title} ({getMovieDetailData.Year})
                    </Typography>
                    <Divider style={{ margin: '1rem 0' }} />
                    <Typography variant="h5" component="h2">
                        Plot
                    </Typography>
                    <Typography variant="body1" component="p">
                        {getMovieDetailData.Plot}
                    </Typography>
                    <Divider style={{ margin: '1rem 0' }} />
                    <Typography variant="h5" component="h2">
                        Details
                    </Typography>
                    <Box display="">
                        <Typography variant="body1" component="p">
                            <strong>Rated:</strong> {getMovieDetailData.Rated}
                        </Typography>
                        <Typography variant="body1" component="p">
                            <strong>Released:</strong> {getMovieDetailData.Released}
                        </Typography>
                        <Typography variant="body1" component="p">
                            <strong>Runtime:</strong> {getMovieDetailData.Runtime}
                        </Typography>
                        <Typography variant="body1" component="p">
                            <strong>Genre:</strong> {getMovieDetailData.Genre}
                        </Typography>
                        <Typography variant="body1" component="p">
                            <strong>Director:</strong> {getMovieDetailData.Director}
                        </Typography>
                        <Typography variant="body1" component="p">
                            <strong>Writer:</strong> {getMovieDetailData.Writer}
                        </Typography>
                        <Typography variant="body1" component="p">
                            <strong>Actors:</strong> {getMovieDetailData.Actors}
                        </Typography>
                        <Typography variant="body1" component="p">
                            <strong>Language:</strong> {getMovieDetailData.Language}
                        </Typography>
                        <Typography variant="body1" component="p">
                            <strong>Country:</strong> {getMovieDetailData.Country}
                        </Typography>
                        <Typography variant="body1" component="p">
                            <strong>Metascore:</strong> {getMovieDetailData.Metascore}
                        </Typography>
                        {getMovieDetailData.Ratings.map((rating, index) => (
                            <Box key={index} display="flex" alignItems="center">
                                <Chip label={`${rating.Source}: ${rating.Value}`} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        );
    }
    if (getMovieDetailError) {
        return (
            <h1>{getMovieDetailError}</h1>
        );
    }

    return <h1>no Data</h1>
}

const mapStateToProps = (state: any) => {
    return {
        loading: state.MovieApi.loading,
        getMovieDetailData: state.MovieApi.getMovieDetail?.data,
        getMovieDetailError: state.MovieApi.getMovieDetail?.error,

    };
};


export default connect(mapStateToProps, { getMovieDetailApi })(MovieDetail);
