import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getMovies, getUpcomingMovies} from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const UpcomingPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);


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
                return <AddToPlaylistIcon movie={movie} />
            }}
        />
    );
}

export default UpcomingPage;