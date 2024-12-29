"use client";

import { usePathname } from "next/navigation";

import { UserButton } from "@/features/auth/components/user-button";
import { MobileSidebar } from "./mobile-sidebar";

const pathnameMap = {
    "tasks": {
        title: "Tugas",
        description: "Lihat semua tugas Anda di sini",
    },
    "projects": {
        title: "Matakuliah",
        description: "Lihat semua Matakuliah Anda di sini",
    },
};

const defaultMap = {
    title: "Home",
    description: "Pantau semua matakuliah dan tugas anda di sini",
};

export const Navbar = () => {
    const pathname = usePathname();
    const pathnameParts = pathname.split("/");
    const pathnameKey = pathnameParts[3] as keyof typeof pathnameMap;

    const { title, description } = pathnameMap[pathnameKey] || defaultMap;


    return (
        <nav className="pt-4 px-6 flex items-center justify-between">
            <div className="flex-col hidden lg:flex">
                <h1 className="text-2xl font-semibold">
                    {title}
                </h1>
                <p className="text-muted-foreground">
                    {description}
                </p>
            </div>
            <MobileSidebar />
            <UserButton />
        </nav>
    );
};