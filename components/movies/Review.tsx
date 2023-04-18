import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeId, TypeReview } from "@/interface/movie";
import NullImg from "@/public/profile-user.png";
import { StarIcon } from "@heroicons/react/24/outline";

export default function Review({ id }: TypeId) {
    const [reviews, setReviews] = useState<TypeReview[]>([]);

    const profileHooks = (str: string) => {
        if (str.startsWith("/https:")) return str.substring(1);
        else return `https://image.tmdb.org/t/p/w500${str}`;
    };

    const fetchMovieReviews = async () => {
        const fetchingReview = await (await fetch(`https://movol.vercel.app/api/reviews/${id}}`)).json();
        setReviews(fetchingReview.results);
    };

    const Rating = ({ num }: { num: number }) => {
        const star = new Array(num).fill(0);
        return (
            <div className="flex">
                {star.map((_) => (
                    <StarIcon className="h-3 w-3 mt-[2px] stroke-indigo-600 fill-indigo-600" aria-hidden="true" />
                ))}
                <div className="ml-1 text-xs">{num}.0</div>
            </div>
        );
    };

    useEffect(() => {
        fetchMovieReviews();
    }, []);

    return (
        <div className="flex flex-wrap justify-center py-8">
            <div className="h-[340px] w-[340px] md:w-[620px] md:h-[450px] lg:w-[820px] lg:h-[540px]">
                {reviews.map((review) => (
                    <div className="flex w-[340px] md:w-[620px] lg:w-[820px] items-center mb-4">
                        <div className="relative w-24 h-24 mr-4">
                            <Image src={review.author_details.avatar_path ? profileHooks(review.author_details.avatar_path) : NullImg} alt={review.author} fill className="rounded-full" />
                        </div>
                        <div className="w-[220px] md:w-[500px] lg:w-[700px]">
                            <div className="font-semibold text-indigo-600 mb-2">{review.author}</div>
                            <div className="text-ellipsis break-words line-clamp-2 text-xs mb-2">{review.content}</div>
                            <div>{review.author_details.rating && <Rating num={review.author_details.rating} />}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
