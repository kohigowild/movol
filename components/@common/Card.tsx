import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/24/outline";
import { NoPoster } from "@/utils/hooks";

export default function Card({ movie }: any) {
    const router = useRouter();
    const handleItemClick = (id: number, title: string) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pl-4 pr-4 mb-16 cursor-pointer" key={movie.id} onClick={() => handleItemClick(movie.id, movie.original_title)}>
            <div className="rounded-lg m-h-64 p-2 transform hover:-translate-y-2 transition duration-300">
                <figure className="relative h-[240px]">
                    <Image src={NoPoster(movie.poster_path)} alt={movie.original_title} className="ml-auto mr-auto rounded-t-lg object-cover" fill />
                </figure>
                <div className="rounded-b-lg p-4 backdrop-blur-md bg-white/30 flex flex-col">
                    <div>
                        <h5 className="text-black mb-2 text-xl font-bold leading-none truncate">{movie.original_title}</h5>
                        <div className="text-xs text-black font-light mb-2 truncate">{movie.overview}</div>
                        <div className="flex">
                            <div className="mr-2 rounded-md backdrop-blur-md bg-indigo-600/60 shadow px-1 py-1 text-xs text-white truncate flex">
                                <StarIcon className="h-3 w-3 mt-[2px] stroke-indigo-600 fill-indigo-600" aria-hidden="true" />
                                <div className="px-1">{movie.vote_average.toFixed(1)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
