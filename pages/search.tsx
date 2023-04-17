import React, { useState } from "react";
import Seo from "@/components/@common/Seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { TypeMovieList } from "@/interface/movie";

export default function search() {
    const router = useRouter();
    const handleItemClick = (id: number, title: string) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };

    const [keyword, setKeyword] = useState<string>("");
    const [info, setInfo] = useState<TypeMovieList[]>([]);

    const fetchSearchingResult = async () => {
        const fetchingResult = await (await fetch(`https://movol.vercel.app/api/search/${keyword}}`)).json();
        setInfo(fetchingResult.results);
    };

    return (
        <div>
            <Seo title="Search" />
            <div className="mx-auto max-w-2xl py-32">
                <div className="text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Movie Finder</h1>
                    <div className="mt-10 flex items-center justify-center gap-x-6 relative">
                        <input
                            type="text"
                            className="relative w-4/5 outline-none rounded-lg py-3 px-4 bg-white shadow text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                            placeholder="찾고 싶은 영화를 검색해 보세요."
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button className="rounded-lg bg-indigo-400 text-white w-1/6 py-3 shadow hover:bg-indigo-500 duration-300" onClick={fetchSearchingResult}>
                            검색
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap items-start">
                {info?.map((movie: any) => (
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
