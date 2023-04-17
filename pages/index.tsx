import React, { useEffect, useState } from "react";
import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }: any) {
    const router = useRouter();
    const handleItemClick = (id: number, title: string) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };
    return (
        <div className="container">
            <Seo title="Home" />
            {results?.map((movie: any) => (
                <div className="movie" key={movie.id} onClick={() => handleItemClick(movie.id, movie.original_title)}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
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
