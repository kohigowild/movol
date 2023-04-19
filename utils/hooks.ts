import { useRecoilState } from "recoil";
import { getGenre } from "@/states";

export const getGenreName = (id: number) => {
    const [genre, setGenre] = useRecoilState(getGenre);

    const result = genre
        .filter((v) => v.id === id)
        .map((v) => {
            return v.name;
        });

    return result.join();
};
