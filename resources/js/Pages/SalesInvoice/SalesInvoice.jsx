import { SalesInvoiceIcon, SalesOrderIcon } from "@/Assets";
import { AddButton, GoButton, Navbar, RefreshButton, SeacrhBarFull } from "../../Components";
import { Head } from "@inertiajs/react";

export default function SalesInvoice({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Navbar />
            <div className="flex flex-col flex-1  px-5 pt-14">
                <div className="flex">
                    <div className="flex flex-row h-11 w-full  gap-5">
                        <AddButton
                            title="Add New Order"
                            href="/sales-invoice-create"
                        />
                        <RefreshButton />
                        <SeacrhBarFull placeholder="Search for Sales Invoice" />
                    </div>
                </div>

                <div className="border-[1.5px] border-black rounded-xl mt-5 px-5 py-8 w-auto ">
                    <div className="flex flex-row gap-3 text-xl font-semibold">
                        <img src={SalesInvoiceIcon} className="w-7" />
                        <h1>Sales Invoice</h1>
                    </div>
                    <form className="flex flex-row justify-between gap-6 mt-5">
                        <div className="flex flex-col gap-2 w-full">
                            <label for="item-detail" className="text-sm">
                                Invoice Date
                            </label>
                            <div className="flex flex-row items-center gap-1 border-[1px] border-black rounded-xl">
                                <input
                                    name="item-detail"
                                    placeholder="01-08-2023"
                                    className="w-auto rounded-xl border-none text-center focus:ring-0"
                                ></input>
                                <p className="font-light">-</p>
                                <input
                                    name="item-detail"
                                    placeholder="01-09-2023"
                                    className="w-auto rounded-xl border-none text-center focus:ring-0"
                                ></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label for="item-detail" className="text-sm">
                                Customer Name
                            </label>
                            <input
                                name="item-id"
                                placeholder="Asep Sunandar"
                                className="w-auto rounded-xl"
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label for="item-detail" className="text-sm">
                                Status
                            </label>
                            <div className="flex flex-row w-full mx-auto gap-2">
                                <input
                                    name="vendor-name"
                                    placeholder="Finish"
                                    className="w-full rounded-xl"
                                ></input>
                                <GoButton />
                            </div>
                        </div>
                    </form>
                </div>

                <table className="mt-6">
                    <thead className="bg-[#B7C9C7] text-center font-bold">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                No
                            </td>
                            <td className="border-[1.5px] border-black">
                                Sales Invoice No
                            </td>
                            <td className="border-[1.5px] border-black">
                                Customer Name
                            </td>
                            <td className="border-[1.5px] border-black">
                                Description
                            </td>
                            <td className="border-[1.5px] border-black">
                                Status
                            </td>
                            <td className="border-[1.5px] border-black">
                                Total
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
                                S0 - 01 - 09 - 2023 - 00001 01 / 09 / 2023
                            </td>
                            <td className="border-[1.5px] border-black">
                                TK . Harapan Orang Tua
                            </td>
                            <td className="border-[1.5px] border-black">
                                Barangnya diantar hari ini
                            </td>
                            <td className="border-[1.5px] border-black">
                                FInish
                            </td>
                            <td className="border-[1.5px] border-black px-3">
                                100. 000
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
