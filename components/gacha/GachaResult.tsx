import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";
import { TypeMovie } from "@/interface/movie";

export default function GachaResult({ result, setOpenResult }: TypeMovie) {
    const router = useRouter();
    const handleItemClick = (id: number, title: string) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };

    return (
        <Fade duration={1000} cascade={true}>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-5xl mb-4">Movol recommend</h1>
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">"{result.original_title}"</h1>
                </div>
                <div className="flex mx-auto max-w-2xl shadow-2xl rounded-lg backdrop-blur-md bg-white/10">
                    <figure className="relative h-[300px] w-1/2">
                        <Image src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.original_title} className="rounded-l-lg object-cover" fill />
                    </figure>
                    <div className="w-1/2 p-4">
                        <h2 className="text-sm lg:text-3xl text-gray-900 font-extrabold mb-4">{result.original_title}</h2>
                        <div className="text-ellipsis break-words line-clamp-5 text-xs text-gray-900 mb-5">{result.overview}</div>
                        <div className="w-full sm:flex sm:justify-end">
                            <button
                                className="mr-4 mb-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => handleItemClick(result.id, result.original_title)}
                            >
                                More Info
                            </button>
                            <button
                                className="mb-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => setOpenResult(false)}
                            >
                                Retry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
