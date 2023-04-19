import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

export default function GachaResult() {
    const router = useRouter();
    const handleItemClick = (id: number, title: string) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };

    const [result, setResult] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [retry, setRetry] = useState<boolean>(false);
    const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

    const fetchGachaMovie = async () => {
        const num = getRandom(1, 300);
        const randomIndex = getRandom(1, 20);
        const gachaMovie = await (await fetch(`https://movol.vercel.app/api/list/${num}`)).json();
        setResult(gachaMovie.results[randomIndex]);
    };

    useEffect(() => {
        fetchGachaMovie();
        let timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [retry]);

    return (
        <div className="py-20 px-12 min-h-screen flex align-center justify-center">
            <div className="m-auto max-w-2xl">
                {loading ? (
                    <div className="mx-auto max-w-2xl py-32 px-12" role="status">
                        <div className="flex justify-center">
                            <svg
                                aria-hidden="true"
                                className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <Fade duration={1000} cascade={true}>
                        <div className="mx-auto max-w-2xl py-32 px-12">
                            <div className="text-center mb-12">
                                <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-5xl mb-4">Movol recommend</h1>
                                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">"{result.original_title}"</h1>
                            </div>
                            <div className="flex mx-auto max-w-2xl shadow-2xl rounded-lg backdrop-blur-md bg-white/10">
                                <figure className="relative h-[300px] w-1/2">
                                    <Image src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.original_title} className="rounded-l-lg object-cover" fill />
                                </figure>
                                <div className="w-1/2 p-4">
                                    <h2 className="text-sm lg:text-3xl text-gray-900 font-extrabold mb-4 text-ellipsis break-words line-clamp-2">{result.original_title}</h2>
                                    <div className="text-ellipsis break-words line-clamp-5 text-xs text-gray-900 mb-5">{result.overview}</div>
                                    <div className="w-full sm:flex sm:justify-end">
                                        <button
                                            className="mr-4 mb-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => handleItemClick(result.id, result.original_title)}
                                        >
                                            More Info
                                        </button>
                                        <button
                                            className="mb-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => setRetry(!retry)}
                                        >
                                            Retry
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                )}
            </div>
        </div>
    );
}
