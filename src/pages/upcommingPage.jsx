import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getMovies, getUpcomingMovies} from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

const UpcomingPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("discover", getUpcomingMovies);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data ? data.results : [];

    return (
        <PageTemplate
            title="Discover Movies"
            movies={movies}
            action={(movie) => {
                return <PlaylistAddIcon movie={movie} />
            }}
        />
    );
}

export default UpcomingPage;