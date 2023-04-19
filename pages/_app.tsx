import React from "react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import Layout from "@/components/@common/Layout";
import Navbar from "@/components/@common/Navbar";
import { Nunito } from "next/font/google";
import "../styles/globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Layout className={nunito.className}>
                <Navbar />
                <Component {...pageProps} />
                <style jsx global>
                    {`
                        html {
                            font-family: ${nunito.style.fontFamily};
                        }
                    `}
                </style>
            </Layout>
        </RecoilRoot>
    );
}
