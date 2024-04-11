import { getMovies, getMoviesById } from "@/database/data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const movieId = params?.id;
    const data = getMoviesById(movieId);
    return NextResponse.json(data);
}

export async function PATCH(request, { params }) {
    const movie = await request.json();
    const movieId = params.id;
    const movieData = getMovies();
    const movieIndex = movieData.findIndex(
        (movie) => movie.id === parseInt(movieId)
    );
    movieData[movieIndex].title = movie.title;
    return Response.json(movieData[movieIndex]);
}

export async function DELETE(_request, { params }) {
    const movieId = params.id;
    const movieData = getMovies();
    const movieIndex = movieData.findIndex(
        (movie) => movie.id === parseInt(movieId)
    );
    const deleteMovie = movieData[movieIndex];
    movieData.splice(movieIndex, 1);
    return Response.json(deleteMovie);
}
