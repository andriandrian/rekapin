import { Navbar } from "../Components";
import { Head } from "@inertiajs/react";

export default function Customer({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Navbar />
            <h1 className="ml-64">Customer</h1>
        </div>
    );
}
