import React from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Navbar />
            <Component {...pageProps} />
        </Layout>
    );
}
