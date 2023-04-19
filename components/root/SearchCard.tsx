import React, { useState } from "react";
import ResultModal from "./ResultModal";
import { Fade } from "react-awesome-reveal";
import { TypeMovieList } from "@/interface/movie";

export default function SearchCard() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>("");
    const [info, setInfo] = useState<TypeMovieList[]>([]);

    const fetchSearchingResult = async () => {
        const fetchingResult = await (await fetch(`https://movol.vercel.app/api/search/${keyword}}`)).json();
        setInfo(fetchingResult.results);
        openModal();
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Fade duration={2000}>
                <div className="py-20 px-12 min-h-screen flex align-center">
                    <div className="m-auto max-w-2xl py-24 px-12 shadow-2xl rounded-lg backdrop-blur-md bg-white/10">
                        <div className="text-center">
                            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Movie Finder</h1>
                            <h1 className="text-sm tracking-tight text-gray-900 sm:text-xl">Look for a movie in the Movol!</h1>
                            <h1 className="tracking-tight text-gray-900 sm:text-xl hidden sm:flex justify-center">Search for keywords and get information about movies.</h1>
                            <div className="mt-10 flex items-center justify-center gap-x-6 relative">
                                <input
                                    type="text"
                                    className="relative w-3/5 outline-none rounded-lg py-3 px-4 bg-white shadow text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                                    placeholder="Search..."
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                                <button className="rounded-lg bg-indigo-500 text-white py-3 px-6 shadow hover:bg-indigo-600 duration-300" onClick={fetchSearchingResult}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <ResultModal isOpen={isOpen} closeModal={closeModal} info={info} />
        </>
    );
}
