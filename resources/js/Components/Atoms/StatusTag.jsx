import { PlusIcon } from "@/Assets";
import { Link } from "@inertiajs/react";
import React from "react";

export function StatusTag(props) {
    return (
        <div
            className={`px-2 py-1 w-fit 
            ${props.status == "Proceed" && "bg-[#17c727] text-white"}
            ${props.status == "Finish" && "bg-[#17c727] text-white"}
            ${props.status == "Paid" && "bg-green-500 text-white"}
            ${props.status == "Waiting" && "bg-slate-300"}
            ${props.status == "Unfinish" && "bg-slate-300"}
            ${props.status == "Unpaid" && "bg-slate-300"}
            rounded-md text-sm font-normal`}
        >
            {props.status}
        </div>
    );
}
