import React from "react";
import Head from "next/head";

interface SeoProps {
    title: string;
}

export default function Seo({ title }: SeoProps) {
    return (
        <Head>
            <title>{title} | Movol</title>
        </Head>
    );
}
