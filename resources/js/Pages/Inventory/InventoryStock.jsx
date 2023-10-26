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
                        <form className="flex flex-row justify-between gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label for="item-detail" className="text-sm">
                                    Item Detail
                                </label>
                                <input
                                    name="item-detail"
                                    placeholder="Promag"
                                    className="w-auto rounded-xl"
                                ></input>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label for="item-detail" className="text-sm">
                                    Item ID
                                </label>
                                <input
                                    name="item-id"
                                    placeholder="ID"
                                    className="w-auto rounded-xl"
                                ></input>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label for="item-detail" className="text-sm">
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
