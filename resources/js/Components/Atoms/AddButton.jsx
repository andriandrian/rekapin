import { PlusIcon } from "@/Assets";
import { Link } from "@inertiajs/react";
import React from "react";

export function AddButton(props) {
    return (
        <Link
            className="flex flex-row gap-2 font-semibold bg-[#B7C9C7] py-3 px-6 border-[1.5px] border-black rounded-xl h-12 min-w-fit place-items-center"
            href={props.href}
        >
            <img src={PlusIcon} className="w-4" />
            <p className="w-fit">{props.title}</p>
        </Link>
    );
}
