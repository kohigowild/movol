import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    return (
        <nav>
            <div>
                <Link href="/" style={{ textDecoration: "none" }}>
                    <div className={router.pathname === "/" ? "active item" : "item"}>Home</div>
                </Link>
                <Link href="/about" style={{ textDecoration: "none" }}>
                    <div className={router.pathname === "/about" ? "active item" : "item"}>About</div>
                </Link>
            </div>
        </nav>
    );
}
