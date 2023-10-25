import { BackIcon } from "@/Assets";

export function BackHeader(props) {
    return (
        <div className="flex flex-row">
            <img src={BackIcon} />
            <div className="flex flex-col justify-end ml-5">
                <p className="text-lg ">{props.label}</p>
                <p className="text-[24px] font-bold">{props.title}</p>
            </div>
        </div>
    );
}
