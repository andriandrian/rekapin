import { BackIcon, SearchIcon, TrashIcon, SaveIcon } from "../../Assets";
import {
    BackHeader,
    Navbar,
    PrintButton,
    RefreshButton,
    SaveButton,
    SeacrhBarFull,
} from "../../Components";

export default function InventoryStock({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div className="flex flex-1">
                <div className="pt-14 px-5 w-full">
                    <div className="flex flex-row justify-between">
                        <BackHeader
                            label="Back to Inventory"
                            title="Edit Product Stock"
                            href="/inventory"
                        />
                        <SaveButton />
                    </div>

                    <div className="border-[1.5px] border-[#6D7A79] rounded-xl mt-5 px-5 py-8 w-auto ">
                        <form className="flex flex-row ml-64 justify-between gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label
                                    htmlFor="item-detail"
                                    className="text-sm"
                                >
                                    Item Detail
                                </label>
                                <input
                                    name="item-detail"
                                    placeholder="Promag"
                                    className="w-auto rounded-xl"
                                ></input>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label
                                    htmlFor="item-detail"
                                    className="text-sm"
                                >
                                    Item ID
                                </label>
                                <input
                                    name="item-id"
                                    placeholder="ID"
                                    className="w-auto rounded-xl"
                                ></input>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label
                                    htmlFor="item-detail"
                                    className="text-sm"
                                >
                                    Vendor Name
                                </label>
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
                        <PrintButton title="Print Stock" />
                    </div>
                    <table
                        class="table-fixed"
                        className="mt-5 h-20 w-full text-center border"
                    >
                        <thead>
                            <tr className="border-[1.5px] border-black bg-[#B7C9C7]">
                                <td className="px-3 py-2 border-2 border-black">
                                    No
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Item Detail
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
                        <tbody className="gap-2">
                            <tr className="py-2">
                                <td rowspan="2" className="pt-2 px-1">
                                    <p className="py-auto h-full border-2 border-gray-400 rounded-xl items-center flex text-center justify-center">
                                        1
                                    </p>
                                </td>
                                <td rowspan="2" className="pt-2 px-1">
                                    <p className="py-auto h-full border-2 border-gray-400 rounded-xl items-center flex text-center justify-center">
                                        Extra Joss (Exj)
                                    </p>
                                </td>
                                <td className="pt-2 px-1">
                                    <p className="py-2 border-2 border-gray-400 rounded-xl">
                                        3
                                    </p>
                                </td>
                                <td className="pt-2 px-1">
                                    <p className="py-2 border-2 border-gray-400 rounded-xl">
                                        ED 08 / 2028
                                    </p>
                                </td>
                                <td className="pt-2 px-1">
                                    <p className="py-2 border-2 border-gray-400 rounded-xl">
                                        10%
                                    </p>
                                </td>
                                <td className="pt-2 px-1">
                                    <p className="py-2 border-2 border-gray-400 rounded-xl">
                                        <div className="flex flex-row justify-between px-3">
                                            <p>@</p>
                                            <p>RP 14.000</p>
                                        </div>
                                    </p>
                                </td>
                                <td
                                    className="mx-auto h-full pt-2 px-1"
                                    rowspan="2"
                                >
                                    <div className="flex justify-center py-2 border-2 border-gray-400 rounded-xl h-full">
                                        <img className="w-4" src={TrashIcon} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="pt-2 px-1">
                                    <p className="py-2 border-2 border-gray-400 rounded-xl">
                                        Pack
                                    </p>
                                </td>
                                <td className="pt-2 px-1">
                                    <p className="py-2 border-2 border-gray-400 rounded-xl">
                                        EX1023KS
                                    </p>
                                </td>
                                <td className="pt-2 px-1">
                                    <p className="py-2 border-2 border-gray-400 rounded-xl">
                                        RP. 14 . 000
                                    </p>
                                </td>
                                <td className="pt-2 px-1">
                                    <p className="py-2 border-2 border-gray-400 rounded-xl">
                                        RP. 126 . 000
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
             
        </div>
    );
}
