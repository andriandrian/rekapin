import { Navbar } from "../Components";
import { Head } from "@inertiajs/react";

export default function SalesOrder({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Navbar />
            <h1 className="ml-64">Sales Order</h1>
        </div>
    );
}
