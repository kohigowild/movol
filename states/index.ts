import { atom } from "recoil";

export const getGenre = atom<any[]>({
    key: "getGenre",
    default: [],
});
