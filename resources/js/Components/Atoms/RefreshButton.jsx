import { RefreshIcon } from "@/Assets";
import { Link } from "@inertiajs/react";
import React from "react";

export function RefreshButton() {
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <Link
            href="#" onClick={refreshPage}
            className="flex flex-row gap-2 font-semibold bg-[#E4F2F0] py-3 px-6 border-[1.5px] border-black rounded-xl items-center min-w-fit h-12"
        >
            <img src={RefreshIcon} className="w-4 h-fit" />
            <p>Refresh</p>
        </Link>
    );
}
