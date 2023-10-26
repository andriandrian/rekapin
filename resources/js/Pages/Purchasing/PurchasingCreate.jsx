import { PurchasingIcon, TrashIcon } from "@/Assets";
import {
    BackHeader,
    Navbar,
    PrintButton,
    RefreshButton,
    SaveButton,
    SeacrhBarFull,
} from "../../Components";

export default function PurchasingCreate({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div className="flex flex-1">
                <div className="pt-14 px-5 w-full">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <BackHeader href="/purchasing" />
                            <div className="flex flex-row items-center gap-3">
                                <img
                                    src={PurchasingIcon}
                                    className="h-10 opacity-80"
                                />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-lg">
                                        Purchasing
                                    </p>
                                    <p className="text-sm">
                                        PU - 01 - 09 - 2023 - 00001
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row align-middle gap-3">
                            <div className="flex flex-col align-middle gap-1 justify-between">
                                <p className="text-sm font-semibold">Total Price</p>
                                <div className="flex border-2 border-[#6D7A79] px-3 py-1 w-52 h-full align-middle rounded-lg font-bold">
                                    <p className="w-full text-right">
                                        RP. 251 . 000
                                    </p>
                                </div>
                            </div>
                            <SaveButton />
                        </div>
                    </div>

                    <div className="border-[1.5px] border-[#6D7A79] rounded-xl mt-5 px-5 py-8 w-auto ">
                        <form className="flex flex-row justify-between gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-sm">Vendor Name</label>
                                <input
                                    name="item-detail"
                                    placeholder="Promag"
                                    className="w-auto rounded-xl"
                                ></input>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-sm">Purchase Date</label>
                                <input
                                    name="item-id"
                                    placeholder="ID"
                                    className="w-auto rounded-xl"
                                ></input>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-sm">Memo</label>
                                <input
                                    name="vendor-name"
                                    placeholder="All Vendor"
                                    className="w-auto rounded-xl"
                                ></input>
                            </div>
                        </form>
                    </div>

                    <div className="mt-8 flex flex-roW gap-4">
                        <SeacrhBarFull placeholder="Search for items" />
                        <RefreshButton />
                        <PrintButton title="Print Purchase Order" />
                    </div>
                    <table
                        class="table-fixed"
                        className="mt-5 h-20 w-full text-center"
                    >
                        <thead>
                            <tr className="border-2 border-black bg-[#B7C9C7]">
                                <td className="px-3 py-2 border-2 border-black">
                                    No
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Purchasing Detail
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Quantity
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Batch / ED
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Diskon
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Total
                                </td>
                                <td className="px-3 border-2 border-black"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-2 border-black px-2">
                                    1
                                </td>
                                <td className="border-2 border-black px-2">
                                    Consectetur dolor occaecat aliqua eu commodo
                                    enim.
                                </td>
                                <td className="border-2 border-black px-2">
                                    3
                                </td>
                                <td className="border-2 border-black px-2">
                                    ED 08 / 2028
                                </td>
                                <td className="border-2 border-black px-2">
                                    10%
                                </td>
                                <td className="border-2 border-black px-2 text-right">
                                    <div className="flex flex-row justify-between">
                                        <p>@</p>
                                        <p>RP 14.000</p>
                                    </div>
                                </td>
                                <td className="mx-auto border-2 border-black px-2">
                                    <div className="flex justify-center">
                                        <img className="w-4" src={TrashIcon} />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
             
        </div>
    );
}
