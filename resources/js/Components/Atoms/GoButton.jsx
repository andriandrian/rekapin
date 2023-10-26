import { RightArrowIcon } from "@/Assets";
import { Link } from "@inertiajs/react";
import React from "react";

export function GoButton() {
    return (
        <Link className="flex flex-row gap-2 font-semibold bg-[#B7C9C7] py-3 px-6 border-[1.5px] border-black rounded-xl h-auto min-w-fit place-items-center">
            <img src={RightArrowIcon} className="w-4" />
        </Link>
    );
}