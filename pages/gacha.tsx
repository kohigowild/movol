import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";
import Seo from "@/components/@common/Seo";

export default function Gacha() {
    const router = useRouter();
    const handleItemClick = (id: number, title: string) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };

    const [result, setResult] = useState<any>([]);
    const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
    const fetchGachaMovie = async () => {
        const num = getRandom(1, 300);
        const gachaMovie = await (await fetch(`https://movol.vercel.app/api/list/${num}`)).json();
        console.log(result);
        setResult(gachaMovie.results);
    };

    useEffect(() => {
        fetchGachaMovie();
    }, []);

    return (
        <div>
            <Seo title="About" />
            <Fade duration={1000} cascade={true}>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-3xl px-12 font-bold tracking-tight text-gray-900 sm:text-5xl">If you're thinking about what movie to watch</h1>
                        <p className="mt-6 text-xs leading-8 text-gray-900 sm:text-sm">When you click the button, Movol automatically selects the movie.</p>
                        <p className="text-xs leading-8 text-gray-900 sm:text-sm">Click the results to go to the Movie Details page.</p>
                        <div className="mt-6 flex items-center justify-center gap-x-6">
                            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
