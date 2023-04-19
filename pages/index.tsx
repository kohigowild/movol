import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getGenre } from "@/states";
import Seo from "@/components/@common/Seo";
import SearchCard from "@/components/root/SearchCard";
import TopMovies from "@/components/root/TopMovies";
import { TypeResult } from "@/interface/movie";

export default function Home({ results }: TypeResult) {
    const [genre, setGenre] = useRecoilState(getGenre);

    const fetchGenre = async () => {
        const result = await (await fetch(`https://movol.vercel.app/api/genre`)).json();
        setGenre(result.genres);
    };

    useEffect(() => {
        genre.length === 0 && fetchGenre();
    }, []);

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
