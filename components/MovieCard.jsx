import React from "react";
import Image from "next/image";
import star from "../public/star.svg";
const MovieCard = () => {
    return (
        <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img
                class="w-full object-cover"
                src="./assets/movie-1.png"
                alt=""
            />
            <figcaption class="pt-4">
                <h3 class="text-xl mb-1">Iron Man</h3>
                <p class="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                </p>
                <div class="flex items-center space-x-1 mb-5">
                    <Image src={star} width={24} height={24} alt="star" />
                    <Image src={star} width={24} height={24} alt="star" />
                    <Image src={star} width={24} height={24} alt="star" />
                </div>
                <a
                    class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="./modal.html"
                >
                    <img src="./assets/tag.svg" alt="" />
                    <span>Details</span>
                </a>
            </figcaption>
        </figure>
    );
};

export default MovieCard;
