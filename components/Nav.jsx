"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/service",
        name: "Service",
    },
    {
        path: "/contact",
        name: "Contact",
    },
    {
        path: "/resume",
        name: "Resume",
    },   
    {
        path: "/work",
        name: "Work",
    },
];



const Nav = () => {
    const pathname = usePathname();
    return <nav className="flex gap-8">
        {
            links.map ((link, index) => {
                return <Link key={index} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            })
        }

    </nav>;
};

export default Nav;
