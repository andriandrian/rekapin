import React from "react";

export function FormInput(props) {

    return (
        <div className="w-72">
            <input {...props} className="w-full"></input>
        </div>
    );
}