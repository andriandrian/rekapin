import { PrintIcon } from "@/Assets";
import { Link } from "@inertiajs/react";
import React from "react";

export function PrintButton(props) {
    return (
        <Link className="flex flex-row gap-2 font-semibold bg-[#CCE5E3] py-3 px-6 border-[1.5px] border-black rounded-xl min-w-fit h-12">
            <img src={PrintIcon} className="w-4" />
            <p>{props.title}</p>
        </Link>
    );
}
