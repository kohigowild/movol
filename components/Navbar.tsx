import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    return (
        <nav>
            <img src="/vercel.svg" />
            <div>
                <Link href="/" style={{ textDecoration: "none" }}>
                    <div className={router.pathname === "/" ? "active item" : "item"}>Home</div>
                </Link>
                <Link href="/about" style={{ textDecoration: "none" }}>
                    <div className={router.pathname === "/about" ? "active item" : "item"}>About</div>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                .item {
                    font-weight: 600;
                    font-size: 18px;
                    color: black;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </nav>
    );
}
