import { getDictionary } from "@/app/[lang]/dictionaries";
import { getMoviesById } from "@/database/data";
import Image from "next/image";
import React from "react";

const MovieDetails = async ({ id, lang }) => {
    const movie = getMoviesById(id);
    console.log(movie);
    const dictionary = await getDictionary(lang);
    return (
        <div>
            <section>
                <div>
                    <Image
                        src={movie.backdrop_path}
                        width={800}
                        height={400}
                        alt="movie banner"
                        className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                    />
                </div>

                <div className="grid grid-cols-12 py-12 gap-8">
                    <div className="col-span-2">
                        <Image
                            src={movie.poster_path}
                            width={200}
                            height={300}
                            alt="movie poster"
                        />
                    </div>
                    <div className="col-span-8">
                        <h2 className="font-bold text-slate-300 text-2xl">
                            {movie.title}
                        </h2>
                        <p className="my-2 text-slate-400 italic">
                            {movie.overview}
                        </p>
                        <ul className="text-slate-300 space-y-2 my-8">
                            <li>
                                {dictionary.release_date} : {movie.release_date}
                            </li>
                            <li>
                                {dictionary.average_vote} : {movie.vote_average}
                            </li>
                            <li>
                                {dictionary.vote_count} : {movie.vote_count}
                            </li>
                            <li>
                                {dictionary.popularity} : {movie.popularity}
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 space-y-4">
                        <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                            {dictionary.stream_in_hd}
                        </button>
                        <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                            {dictionary.download_in_hd}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovieDetails;
