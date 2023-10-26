import { PlusIcon, PrintIcon, RefreshIcon } from "@/Assets";
import { Navbar, SeacrhBarFull } from "../Components";
import { Head, Link } from "@inertiajs/react";

export default function Accounts({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 flex-col">
                <SeacrhBarFull placeholder="Search for Account"/>
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-semibold">Chart of Accounts</h1>
                    <div className="flex flex-row gap-5">
                        <Link
                            href="/vendor/add"
                            className="flex flex-row gap-2 font-bold bg-[#E4F2F0] py-3 px-6 border-[1.5px] border-black rounded-xl"
                        >
                            <img src={RefreshIcon} />
                            Refresh
                        </Link>
                        <div className="flex flex-row gap-2 font-bold bg-[#B7C9C7] py-3 px-6 border-[1.5px] border-black rounded-xl">
                            <img src={PlusIcon} />
                            Add Account
                        </div>
                    </div>
                </div>

                <table className="mt-6">
                    <thead className="bg-[#B7C9C7] text-center">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                Code
                            </td>
                            <td className="border-[1.5px] border-black">
                                Description
                            </td>
                            <td className="border-[1.5px] border-black">
                                Account Type
                            </td>
                            <td className="border-[1.5px] border-black">
                                Financial Statement
                            </td>
                            <td className="border-[1.5px] border-black"></td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                1-001
                            </td>
                            <td className="border-[1.5px] border-black">
                                Cash
                            </td>
                            <td className="border-[1.5px] border-black">
                                Asset
                            </td>
                            <td className="border-[1.5px] border-black">
                                Balance Sheet
                            </td>
                            <td className="border-[1.5px] border-black px-1">
                                :
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
