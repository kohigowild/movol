import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Card from "@/components/@common/Card";
import Pagination from "@/components/@common/Pagination";

export default function popular() {
    const [page, setPage] = useState<number>(1);
    const [getPopular, setGetPopular] = useState<any>([]);

    const fetchPopular = async () => {
        const fetchingPopular = await (await fetch(`https://movol.vercel.app/api/popular/${page}`)).json();
        setGetPopular(fetchingPopular.results);
        console.log(fetchingPopular);
    };

    useEffect(() => {
        fetchPopular();
    }, [page]);

    return (
        <div className="py-40 px-12 min-h-screen">
            <Fade duration={1000} cascade={true}>
                <div className="text-4xl sm:text-5xl text-center font-extrabold mt-16 text-black">Popular Movies</div>
                <div className="text-xl text-center mt-4 text-black">Take a look at the popular charts.</div>
                <div className="container mx-auto flex flex-wrap items-start py-16">
                    {getPopular?.map((movie: any) => (
                        <Card movie={movie} />
                    ))}
                </div>
            </Fade>
            <Pagination page={page} setPage={setPage} />
        </div>
    );
}
