import React from "react";
import { Link, usePage } from "@inertiajs/react";

export function NavLink(props) {
    // const { url } = usePage();

    return (
        <li
            className="flex flex-row items-center my-6 w-52 hover:bg-slate-300 py-2 rounded-sm"
        >
            TEST.
            {/* <Link
                href={props.url}
                className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
            >
                <img src={props.icon} />
                <p>{props.title}</p>
            </Link> */}
        </li>
    );
}