import { RightArrowIcon } from "@/Assets";
import { Link } from "@inertiajs/react";
import React from "react";

export function GoButton(props) {
    return (
        <button
            className="flex flex-row gap-2 font-semibold bg-[#B7C9C7] py-3 px-6 border-[1.5px] border-black rounded-xl h-auto min-w-fit place-items-center"
            onClick={props.onClick}
            type={props.type}
        >
            <img src={RightArrowIcon} className="w-4" />
        </button>
    );
}
