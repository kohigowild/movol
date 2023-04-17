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
                <Link href="/gacha" style={{ textDecoration: "none" }}>
                    <div className={router.pathname === "/gacha" ? "active item" : "item"}>Gacha</div>
                </Link>
            </div>
        </nav>
    );
}
