import MovieDetails from "@/components/MovieDetails";
import React from "react";

const MovieDetailsPage = ({ params }) => {
    const { id, lang } = params;
    return (
        <div>
            <MovieDetails id={id} lang={lang} />
        </div>
    );
};

export default MovieDetailsPage;
