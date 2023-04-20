import { useRecoilState } from "recoil";
import { getGenre } from "@/states";

import NullImg from "@/public/no-poster.png";

export const getGenreName = (id: number) => {
    const [genre, setGenre] = useRecoilState(getGenre);

    const result = genre
        .filter((v) => v.id === id)
        .map((v) => {
            return v.name;
        });

    return result.join();
};

export const NoPoster = (path: string | null) => {
    if (path === null) return NullImg;
    else return `https://image.tmdb.org/t/p/w500${path}`;
};
