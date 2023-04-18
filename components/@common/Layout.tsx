import React from "react";

export default function Layout({ children }: any) {
    return <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover min-h-screen">{children}</div>;
}
