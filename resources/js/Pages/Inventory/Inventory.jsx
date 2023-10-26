import { PlusIcon, PrintIcon, RefreshIcon, SearchIcon } from "@/Assets";
import { AddButton, Navbar, PrintButton, RefreshButton, SeacrhBarMini } from "../../Components";
import { Link } from "@inertiajs/react";

export default function Inventory({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 flex-col">
                <SeacrhBarMini placeholder="Search for any item" />
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-semibold">Inventory</h1>
                    <div className="flex flex-row gap-5">
                        <RefreshButton />
                        <PrintButton title="Print Inventory List" />
                        <AddButton
                            title="Add Product"
                            href="/inventory-create"
                        />
                    </div>
                </div>

                <table className="mt-6">
                    <thead className="bg-[#B7C9C7] text-center">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                No
                            </td>
                            <td className="border-[1.5px] border-black">
                                Product Name
                            </td>
                            <td className="border-[1.5px] border-black">
                                Product Code
                            </td>
                            <td className="border-[1.5px] border-black">Qty</td>
                            <td className="border-[1.5px] border-black">
                                Sales Price (@)
                            </td>
                            <td className="border-[1.5px] border-black"></td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                1
                            </td>
                            <td className="border-[1.5px] border-black">
                                Bodrex Tablet
                            </td>
                            <td className="border-[1.5px] border-black">Bdx</td>
                            <td className="border-[1.5px] border-black">
                                1245
                            </td>
                            <td className="border-[1.5px] border-black">
                                75000
                            </td>
                            <td className="border-[1.5px] border-black px-3">
                                :
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
