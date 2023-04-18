import { TypeMovieList } from "./movie";

export interface TypeModal {
    isOpen: boolean;
    closeModal: () => void;
    info: TypeMovieList[];
}
