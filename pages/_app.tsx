import React from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/@common/Layout";
import Navbar from "@/components/@common/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Navbar />
            <Component {...pageProps} />
        </Layout>
    );
}
