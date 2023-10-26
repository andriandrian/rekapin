import { Link } from "@inertiajs/react";
import React from "react";

export function TextButton(props) {
    const back = () => {
        window.history.back();
    };

    return (
        <Link
            className={`flex flex-row gap-2 font-semibold py-3 px-10 border-[1.5px] border-black rounded-xl h-12 min-w-fit place-items-center rounded-2xl bg-[${props.bgColor}]`}
            href={props.href}
            onClick={props.onClick}
        >
            <p className="w-fit font-normal text-sm">{props.title}</p>
        </Link>
    );
}
