import React from "react";
import { TypePage } from "@/interface/Page";

export default function Pagination({ page, setPage }: TypePage) {
    const className = "m-2 rounded-md backdrop-blur-md shadow p-2 text-xs text-white cursor-pointer flex";
    return (
        <div className="flex justify-center">
            {new Array(5).fill(0).map((_, i) => (
                <div key={i} className={i + 1 === page ? `${className} bg-indigo-600/90` : `${className} bg-indigo-600/60 hover:-translate-y-2 transition duration-300`} onClick={() => setPage(i + 1)}>
                    {i + 1}
                </div>
            ))}
        </div>
    );
}
