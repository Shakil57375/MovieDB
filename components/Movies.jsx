"use client";
import React, { useState } from "react";
import MovieCard from "./MovieCard";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    import("../database/data.json").then((module) => {
        const data = module.default;
        setMovies(data);
    });

    return (
        <div>
            <div className="content">
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                    {
                        movies.map(movie => (
                            <MovieCard key={movie.id} movie = {movie} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Movies;
