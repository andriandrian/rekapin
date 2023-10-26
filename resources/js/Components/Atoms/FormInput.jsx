import React from "react";

export function FormInput(props) {
    return (
        <div className="w-full">
            <label for={props.name}>
                <p className="font-semibold text-sm">{props.label}</p>
            </label>
            <input
                name={props.name}
                className="w-full rounded-md mt-2 bg-[#FAFAFA"
                placeholder={props.placeholder}
            ></input>
        </div>
    );
}
