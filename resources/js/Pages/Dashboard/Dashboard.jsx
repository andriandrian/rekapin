import { PlusIcon, PrintIcon, RefreshIcon, SearchIcon } from "@/Assets";
import { Navbar, SeacrhBarMini } from "../../Components";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    console.log(props);
    return (
        <div className="flex flex-row h-screen w-full ">
            <Head title="Inventory" />
            <Navbar />
            <div className="flex flex-1 ml-64 px-5 pt-14 flex-col">
                {/* <SeacrhBarMini placeholder="Search for any item" /> */}
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
                </div>

                <div>
                    <h1>Total Profit :</h1>
                    <p>{props.totalProfits}</p>
                </div>
            </div>
        </div>
    );
}
