import React, { useState, useEffect } from "react";
import { TypeId } from "@/interface/movie";

export default function SimilarList({ id }: TypeId) {
    const [similar, setSimilar] = useState<any>([]);

    const fetchMovieSimilar = async () => {
        const fetchingSimilar = await (await fetch(`https://movol.vercel.app/api/similar/${id}}`)).json();
        console.log(fetchingSimilar, "ff");
    };

    useEffect(() => {
        fetchMovieSimilar();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="h-[340px] w-[340px] md:w-[620px] md:h-[450px] lg:w-[820px] lg:h-[540px]" />
        </div>
    );
}
