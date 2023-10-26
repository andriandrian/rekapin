import { SearchIcon } from "@/Assets";

export function SeacrhBarFull(props) {
    return (
        <div className="flex flex-row border-[1.5px] border-[#6D7A79] rounded-xl px-4 gap-2 py-1 w-full">
            <img src={SearchIcon} className="w-4 h-auto" />
            <input
                placeholder={props.placeholder}
                className="w-full border-none focus:ring-0"
            ></input>
        </div>
    );
}
