import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Seo from "@/components/@common/Seo";
import GachaResult from "@/components/gacha/GachaResult";

export default function Gacha() {
    const [openResult, setOpenResult] = useState<boolean>(false);

    return (
        <div>
            <Seo title="Gacha" />
            {!openResult ? (
                <Fade duration={1000} cascade={true}>
                    <div className="py-20 px-12 min-h-screen flex align-center">
                        <div className="m-auto max-w-2xl py-24 px-12 shadow-2xl rounded-lg backdrop-blur-md bg-white/10">
                            <div className="text-center">
                                <h1 className="text-3xl px-4 font-bold tracking-tight text-gray-900 sm:text-5xl">If you're thinking about what movie to watch</h1>
                                <p className="mt-6 text-xs lg:text-base leading-8 text-gray-900 sm:text-sm">When you click the button, Movol automatically selects the movie.</p>
                                <div className="mt-6 flex items-center justify-center gap-x-6">
                                    <button
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => setOpenResult(true)}
                                    >
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            ) : (
                <GachaResult />
            )}
        </div>
    );
}
