import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { TypeResult } from "@/interface/movie";
import { Fade } from "react-awesome-reveal";

export default function TopMovies({ results }: TypeResult) {
    const router = useRouter();
    console.log(results);
    const handleItemClick = (id: number, title: string) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };

    return (
        <div className="py-40 px-12 min-h-screen">
            <Fade duration={1000} direction={"down"} cascade={true}>
                <div className="text-4xl sm:text-5xl text-center font-extrabold mt-16 text-black">TOP MOVIE 8</div>
                <div className="text-xl text-center mt-4 text-black">This is a list of the most popular movies at the moment.</div>
                <div className="container mx-auto flex flex-wrap items-start py-16">
                    {results?.slice(0, 8).map((movie: any) => (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pl-4 pr-4 mb-16 cursor-pointer" key={movie.id} onClick={() => handleItemClick(movie.id, movie.original_title)}>
                            <div className="rounded-lg m-h-64 p-2 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                                <figure className="relative h-[240px]">
                                    <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} className="ml-auto mr-auto rounded-t-lg object-cover" fill />
                                </figure>
                                <div className="rounded-b-lg p-4 backdrop-blur-md bg-white/30 flex flex-col">
                                    <div>
                                        <h5 className="text-black mb-2 text-xl font-bold leading-none truncate">{movie.original_title}</h5>
                                        <div className="text-xs text-black font-light truncate">{movie.overview}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
}
