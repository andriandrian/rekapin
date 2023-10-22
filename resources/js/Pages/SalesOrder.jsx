import { Navbar } from "../Components";
import { Head } from "@inertiajs/react";

export default function SalesOrder({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Navbar />
            <div className="flex flex-1 px-5 pt-14">
                <h1>Sales Order</h1>
            </div>
        </div>
    );
}
