import { SearchIcon } from "@/Assets";

export function SeacrhBarMini(props) {
    return (
        <div className="flex flex-row border-[1.5px] border-[#B7B7B7] rounded-xl px-4 gap-2 w-full">
            <img src={SearchIcon} className="w-4" />
            <input
                placeholder={props.placeholder}
                className="w-full border-none text-[12px] focus:ring-0"
                label="Search"
                name="search"
                type="text"
                value={props.value}
                onChange={props.onChange}
            ></input>
        </div>
    );
}
