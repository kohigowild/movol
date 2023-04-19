import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { TypeId, TypeMovieList } from "@/interface/movie";

export default function SimilarList({ id }: TypeId) {
    const router = useRouter();
    const handleItemClick = (id: number, title: string) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };
    const [similar, setSimilar] = useState<TypeMovieList[]>([]);
    const fetchMovieSimilar = async () => {
        const fetchingSimilar = await (await fetch(`https://movol.vercel.app/api/similar/${id}}`)).json();
        setSimilar(fetchingSimilar.results);
    };

    useEffect(() => {
        fetchMovieSimilar();
    }, [id]);

    return (
        <div className="w-[340px] md:w-[620px] lg:w-[820px] mx-auto flex flex-wrap items-start py-8">
            {similar.slice(0, 6).map((movie) => (
                <div className="w-full sm:w-1/2 md:w-1/3 pl-4 pr-4 mb-8 cursor-pointer" key={movie.id} onClick={() => handleItemClick(movie.id, movie.original_title)}>
                    <div className="rounded-lg m-h-64 p-2 transform hover:-translate-y-2 transition duration-300">
                        <figure className="relative h-[240px]">
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} className="ml-auto mr-auto rounded-t-lg object-cover" fill />
                        </figure>
                        <div className="rounded-b-lg p-4 backdrop-blur-md bg-white/30 flex flex-col">
                            <div>
                                <h5 className="text-black mb-2 text-xl font-bold leading-none truncate">{movie.original_title}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
