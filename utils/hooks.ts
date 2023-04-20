import NullImg from "@/public/no-poster.png";

export const NoPoster = (path: string | null) => {
    if (path === null) return NullImg;
    else return `https://image.tmdb.org/t/p/w500${path}`;
};
