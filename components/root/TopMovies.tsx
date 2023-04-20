import React from "react";
import Link from "next/link";
import Card from "../@common/Card";
import { TypeResult } from "@/interface/movie";
import { Fade } from "react-awesome-reveal";

export default function TopMovies({ results }: TypeResult) {
    return (
        <div className="py-40 px-12 min-h-screen">
            <div className="text-4xl sm:text-5xl text-center font-extrabold mt-16 text-black">TOP MOVIE 8</div>
            <div className="flex justify-center mt-4">
                <div className="text-xl text-center text-black">This is a list of the most popular movies at the moment.</div>
                <Link href="/popular" className="ml-2 mt-1 text-sm font-semibold text-gray-900">
                    More <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
            <Fade duration={1000} cascade>
                <div className="container mx-auto flex flex-wrap items-start py-16">
                    {results?.slice(0, 8).map((movie: any) => (
                        <Card movie={movie} key={movie.id} />
                    ))}
                </div>
            </Fade>
        </div>
    );
}
