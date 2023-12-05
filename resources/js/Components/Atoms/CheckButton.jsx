import { CheckIcon } from "@/Assets";
import { Link } from "@inertiajs/react";
import React from "react";

export function CheckButton(props) {
    return (
        <Link
            className="flex bg-[#B7C9C7] border-[1.5px] border-black rounded-xl place-items-center px-5"
            href={props.href}
        >
            <img src={CheckIcon} className="w-6" />
        </Link>
    );
}
