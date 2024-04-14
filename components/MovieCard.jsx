import React from "react";
import Image from "next/image";
import tag from "../public/tag.svg";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
const MovieCard = ({ movie }) => {
    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image
                src={movie?.poster_path}
                className="w-full object-cover"
                width={300}
                height={100}
                alt="movie poster"
            />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{movie.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                </p>
                <div className="flex items-center space-x-1 mb-5">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={movie.vote_average}
                        readOnly
                    />
                </div>
                <Link
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href={`${movie.id}`}
                >
                    <Image src={tag} width={24} height={24} alt="ring" />
                    <span>Details</span>
                </Link>
            </figcaption>
        </figure>
    );
};

export default MovieCard;
