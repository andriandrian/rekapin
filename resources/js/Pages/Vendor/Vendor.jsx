import { PlusIcon, PrintIcon, RefreshIcon } from "@/Assets";
import {
    AddButton,
    Navbar,
    PrintButton,
    RefreshButton,
    SeacrhBarFull,
    SeacrhBarMini,
} from "../../Components";
import { Head, Link } from "@inertiajs/react";

export default function Vendor(props) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Head title="Vendor" />
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 flex-col">
                <SeacrhBarMini placeholder="Search for vendor" />
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-semibold">Vendor List</h1>
                    <div className="flex flex-row gap-5">
                        <RefreshButton />
                        {/* <PrintButton title="Print Vendor List" /> */}
                        <AddButton title="Add Vendor" href="/vendor/create" />
                    </div>
                </div>

                <table className="mt-6">
                    <thead className="bg-[#B7C9C7] text-center">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                No
                            </td>
                            <td className="border-[1.5px] border-black">
                                Vendor Name
                            </td>
                            <td className="border-[1.5px] border-black">
                                Vendor ID
                            </td>
                            <td className="border-[1.5px] border-black">
                                Phone Number
                            </td>
                            <td className="border-[1.5px] border-black">
                                Address
                            </td>
                            <td className="border-[1.5px] border-black">
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {props.vendor ? (
                            props.vendor.map((vendor, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="border-[1.5px] border-black py-3 px-2">
                                            {i + 1}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {vendor.name}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {vendor.id}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {vendor.phone}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {vendor.address}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            <div className="flex flex-row gap-2 justify-center">
                                                <Link
                                                    href={route("vendor.edit")}
                                                    data={{ id: vendor.id }}
                                                    method="get"
                                                    as="button"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "vendor.destroy"
                                                    )}
                                                    data={{ id: vendor.id }}
                                                    method="delete"
                                                    as="button"
                                                    onClick={() => {
                                                        if (
                                                            window.confirm(
                                                                "Are you sure you want to delete this vendor?"
                                                            )
                                                        ) {
                                                            // Delete the customer
                                                        }
                                                    }}
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="border-[1.5px] border-black py-3 px-2"
                                >
                                    No Data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
