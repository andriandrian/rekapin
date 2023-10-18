import { Navbar } from "../Components";
import { Head } from "@inertiajs/react";

export default function SalesInvoice({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Navbar />
            <h1 className="ml-64">SalesInvoice</h1>
        </div>
    );
}
