import React from "react";
import Card from "../@common/Card";
import { TypeResult } from "@/interface/movie";
import { Fade } from "react-awesome-reveal";

export default function TopMovies({ results }: TypeResult) {
    return (
        <div className="py-40 px-12 min-h-screen">
            <Fade duration={1000} cascade={true}>
                <div className="text-4xl sm:text-5xl text-center font-extrabold mt-16 text-black">TOP MOVIE 8</div>
                <div className="text-xl text-center mt-4 text-black">This is a list of the most popular movies at the moment.</div>
                <div className="container mx-auto flex flex-wrap items-start py-16">
                    {results?.slice(0, 8).map((movie: any) => (
                        <Card movie={movie} />
                    ))}
                </div>
            </Fade>
        </div>
    );
}
