import React from "react";
import Seo from "@/components/@common/Seo";
import SearchCard from "@/components/root/SearchCard";
import TopMovies from "@/components/root/TopMovies";
import { TypeResult } from "@/interface/movie";

export default function Home({ results }: TypeResult) {
    return (
        <div>
            <Seo title="Home" />
            <SearchCard />
            <TopMovies results={results} />
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
