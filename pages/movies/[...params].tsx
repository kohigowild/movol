import React, { useEffect, useState } from "react";
import Image from "next/image";
import Seo from "@/components/@common/Seo";

export default function Detail({ params }: any) {
    const [title, id]: any = params || [];
    const [movie, setMovie] = useState<any>([]);

    const fetchMovieDetails = async () => {
        const result = await (await fetch(`https://movol.vercel.app/api/movies/${id}`)).json();
        setMovie(result);
        console.log(result);
    };

    useEffect(() => {
        fetchMovieDetails();
        console.log(movie);
    }, []);

    return (
        <div>
            <Seo title={title} />
            <div className="flex justify-center py-20">
                <div>
                    <figure className="relative w-[300px] h-[500px] md:w-[440px] lg:w-[560px]">
                        <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} className="rounded-lg object-cover" fill />
                    </figure>
                </div>
                <div className="ml-4">
                    <h2>{title}</h2>
                    <div>{movie.tagline}</div>
                    {movie.genres && (
                        <div className="flex">
                            {movie.genres.map((e: { id: number; name: string }) => (
                                <div>{e.name}</div>
                            ))}
                        </div>
                    )}
                    <div>{movie.release_date}</div>
                    <div>{movie.overview}</div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps({ params: { params } }: any) {
    return {
        props: {
            params,
        },
    };
}
