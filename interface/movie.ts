export interface TypeMovieList {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface TypeResult {
    results: TypeMovieList[];
}

export interface TypeMovie {
    setOpenResult: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TypeId {
    id: number;
}

export interface TypeReview {
    author: string;
    author_details: {
        avatar_path: string;
        name: string;
        rating: number;
        username: string;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
}
