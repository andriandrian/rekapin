import { BackIcon } from "@/Assets";
import { Link } from "@inertiajs/react";

export function BackHeader(props) {
    return (
        <Link className="flex flex-row" href={props.href}>
            <img src={BackIcon} />
            <div className="flex flex-col justify-end ml-5">
                <p className="text-lg text-[#9DB0AE]">{props.label}</p>
                <p className="text-[24px] font-extrabold">{props.title}</p>
            </div>
        </Link>
    );
}
