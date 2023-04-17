import React, { useEffect, useState } from "react";
import Seo from "@/components/@common/Seo";
import { useRouter } from "next/router";
import { TypeResult } from "@/interface/movie";

export default function Home({ results }: TypeResult) {
    const router = useRouter();
    const handleItemClick = (id: number, title: string) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };

    return (
        <div>
            <Seo title="Home" />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="container mx-auto flex flex-wrap items-start py-32">
                    {results?.map((movie: any) => (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pl-4 pr-4 mb-4 cursor-pointer" key={movie.id} onClick={() => handleItemClick(movie.id, movie.original_title)}>
                            <div className="rounded-lg m-h-64 p-2 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                                <figure>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} className="ml-auto mr-auto rounded-t-lg" />
                                </figure>
                                <div className="rounded-b-lg p-4 bg-indigo-400 flex flex-col">
                                    <div>
                                        <h5 className="text-white text-xl font-bold leading-none truncate">{movie.original_title}</h5>
                                        <span className="text-xs text-gray-200 leading-none">{movie.release_date}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="text-xs text-white font-light truncate">{movie.overview}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const { results } = await (await fetch(`https://movol.vercel.app/api/movies`)).json();
    return {
        props: {
            results,
        },
    };
}
