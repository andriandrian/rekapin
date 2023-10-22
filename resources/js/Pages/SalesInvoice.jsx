import { Navbar } from "../Components";
import { Head } from "@inertiajs/react";

export default function SalesInvoice({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Navbar />
            <div className="flex flex-1 px-5 pt-14">
                <h1>SalesInvoice</h1>
            </div>
        </div>
    );
}
