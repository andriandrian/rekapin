import { SearchIcon } from "@/Assets";

export function SeacrhBarFull(props){
    return (
        <div className="flex flex-row border-[1.5px] border-[#B7B7B7] rounded-xl px-4 gap-2 py-2">
            <img src={SearchIcon} className="w-4" />
            <input
                placeholder={props.placeholder}
                className="w-full border-none focus:ring-0"
            ></input>
        </div>
    );
}