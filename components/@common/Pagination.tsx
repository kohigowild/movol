import React from "react";
import { TypePage } from "@/interface/Page";

export default function Pagination({ page, setPage }: TypePage) {
    const className = "m-2 rounded-md backdrop-blur-md shadow p-2 text-xs text-white cursor-pointer flex";

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    };

    const handlePageMove = (i: number) => {
        setPage(i + 1);
        scrollToTop();
    };

    return (
        <div className="flex justify-center">
            {new Array(5).fill(0).map((_, i) => (
                <div
                    key={i}
                    className={i + 1 === page ? `${className} bg-indigo-600/90` : `${className} bg-indigo-600/60 hover:-translate-y-2 transition duration-300`}
                    onClick={() => handlePageMove(i)}
                >
                    {i + 1}
                </div>
            ))}
        </div>
    );
}
