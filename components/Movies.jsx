import React from "react";
import MovieCard from "./MovieCard";

const Movies = () => {
    return (
        <div>
            <div class="content">
                <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                    <MovieCard />
                </div>
            </div>
        </div>
    );
};

export default Movies;
