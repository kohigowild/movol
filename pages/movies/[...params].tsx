import Seo from "@/components/Seo";
import { useRouter } from "next/router";
import React from "react";

export default function Detail({ params }: any) {
    const router = useRouter();
    console.log(router);
    const [title, id]: any = params || [];

    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    );
}

export function getServerSideProps({ params: { params } }: any) {
    return {
        props: {
            params,
        },
    };
}
