import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { TypeId, TypeMovieList } from "@/interface/movie";
import { NoPoster } from "@/utils/hooks";
import Card from "../@common/Card";

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
            {similar.slice(0, 8).map((movie) => (
                <Card movie={movie} />
            ))}
        </div>
    );
}
