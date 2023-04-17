import React from "react";
import Image from "next/image";
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
            <div className="mx-auto max-w-2xl pt-20 pl-4 pr-4">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    오늘 movol지 고민된다면?
                    <a href="/" className="font-semibold text-indigo-600 ml-2">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
            <div className="text-2xl text-center font-semibold mt-16 text-indigo-600">실시간 TOP 20</div>
            <div className="container mx-auto flex flex-wrap items-start py-16">
                {results?.map((movie: any) => (
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pl-4 pr-4 mb-4 cursor-pointer" key={movie.id} onClick={() => handleItemClick(movie.id, movie.original_title)}>
                        <div className="rounded-lg m-h-64 p-2 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                            <figure className="relative h-[300px]">
                                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} className="ml-auto mr-auto rounded-t-lg object-cover" fill />
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
