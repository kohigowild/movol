import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Seo from "@/components/@common/Seo";
import Review from "@/components/movies/Review";
import SimilarList from "@/components/movies/SimilarList";
import VideoPlayer from "@/components/movies/VideoPlayer";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Detail({ params }: any) {
    const [title, id]: [string, number] = params || [];
    const [movie, setMovie] = useState<any>([]);

    const categories = [
        { id: 1, title: "Trailer", content: <VideoPlayer id={id} /> },
        { id: 2, title: "Reviews", content: <Review id={id} /> },
        { id: 3, title: "Recommend", content: <SimilarList id={id} /> },
    ];

    const fetchMovieDetails = async () => {
        const result = await (await fetch(`https://movol.vercel.app/api/movies/${id}`)).json();
        setMovie(result);
    };

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    return (
        <div>
            <Seo title={title} />
            <div className="flex justify-center">
                <div className="md:flex flex-wrap justify-center pt-20">
                    <div>
                        <figure className="relative w-[340px] h-[500px] md:w-[300px]">
                            <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} className="rounded-lg object-cover" fill />
                        </figure>
                    </div>
                    <div className="mt-4 w-[340px] md:w-[300px] lg:w-[500px] md:ml-4">
                        <h2 className="text-xl lg:text-3xl text-gray-900 font-bold mb-4">{title}</h2>
                        <div className="text-xs text-gray-900 mb-4">{movie.tagline}</div>
                        {movie.genres && (
                            <div className="flex">
                                {movie.genres.map((e: { id: number; name: string }) => (
                                    <div className="mb-4 mr-2 rounded-md bg-white px-1 py-1 text-xs text-gray-900 bg-indigo-200 shadow-sm">#{e.name}</div>
                                ))}
                            </div>
                        )}
                        <div className="text-sm text-indigo-600 mb-4">{movie.release_date} 개봉</div>
                        <div className="text-sm text-gray-900">{movie.overview}</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="px-2 mt-8">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-indigo-200/20 p-1 mb-8">
                            {categories.map((item) => (
                                <Tab
                                    key={item.id}
                                    className={({ selected }) =>
                                        classNames(
                                            "w-full rounded-lg py-2.5 text-sm leading-5 text-indigo-600 font-bold",
                                            "focus:outline-none",
                                            selected ? "bg-white shadow" : "text-indigo-400 font-thin hover:text-indigo-600"
                                        )
                                    }
                                >
                                    {item.title}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels>
                            {categories.map((item) => (
                                <Tab.Panel>{item.content}</Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
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
