import React from "react";

export function FormInput(props) {
    return (
        <div className="w-full">
            <label htmlFor={props.name}>
                <p className="font-semibold text-sm">{props.label}</p>
            </label>
            <input
                name={props.name}
                className="w-full rounded-md mt-2 bg-[#FAFAFA"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                id={props.id}
                type={props.type}
            ></input>
        </div>
    );
}
