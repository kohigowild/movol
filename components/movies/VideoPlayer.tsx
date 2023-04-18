import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { TypeId } from "@/interface/movie";

export default function VideoPlayer({ id }: TypeId) {
    const [video, setVideo] = useState<any>([]);

    const fetchMovieVideo = async () => {
        const fetchingVideos = await (await fetch(`https://movol.vercel.app/api/videos/${id}}`)).json();
        setVideo(fetchingVideos.results[0]);
    };

    useEffect(() => {
        fetchMovieVideo();
    }, []);

    return (
        <div className="flex justify-center py-8">
            <YouTube
                className="h-[340px] w-[340px] md:w-[620px] md:h-[450px] lg:w-[820px] lg:h-[540px]"
                videoId={video.key}
                opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                        autoplay: 0,
                        rel: 0,
                        modestbranding: 1,
                    },
                }}
            />
        </div>
    );
}
