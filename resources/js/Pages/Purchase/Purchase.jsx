import { PurchasingIcon, SalesOrderIcon } from "@/Assets";
import {
    AddButton,
    GoButton,
    Navbar,
    RefreshButton,
    SeacrhBarFull,
} from "../../Components";
import { Head, Link } from "@inertiajs/react";

export default function Purchase(props) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Head title="Purchasing" />
            <Navbar />
            <div className="flex flex-col flex-1  px-5 pt-14">
                <div className="flex">
                    <div className="flex flex-row h-11 w-full  gap-5">
                        <AddButton
                            title="Add New Purchasing"
                            href="/purchasing-create"
                        />
                        <RefreshButton />
                        <SeacrhBarFull placeholder="Search for Purchase Order" />
                    </div>
                </div>

                <div className="border-[1.5px] border-black rounded-xl mt-5 px-5 py-8 w-auto ">
                    <div className="flex flex-row gap-3 text-xl font-semibold">
                        <img src={PurchasingIcon} className="w-7" />
                        <h1>Purchase Order</h1>
                    </div>
                    <form className="flex flex-row justify-between gap-6 mt-5">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="item-detail" className="text-sm">
                                Purchasing Date
                            </label>
                            <div className="flex flex-row justify-between items-center gap-1 border-[1px] border-black rounded-xl">
                                <input
                                    name="item-detail"
                                    type="date"
                                    className="w-auto rounded-xl border-none text-center focus:ring-0"
                                ></input>
                                <p className="font-light">-</p>
                                <input
                                    name="item-detail"
                                    type="date"
                                    className="w-auto rounded-xl border-none text-center focus:ring-0"
                                ></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="item-detail" className="text-sm">
                                Vendor Name
                            </label>
                            <input
                                name="vendor-name"
                                placeholder="Enter Vendor Name"
                                className="w-auto rounded-xl"
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="item-detail" className="text-sm">
                                Status
                            </label>
                            <div className="flex flex-row w-full mx-auto gap-2">
                                <input
                                    name="vendor-name"
                                    placeholder="Enter Status   "
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
                                Purchase Order No
                            </td>
                            <td className="border-[1.5px] border-black">
                                Purchase Date
                            </td>
                            <td className="border-[1.5px] border-black">
                                Vendor Name
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
                        {props.purchase && props.purchase.length > 0 ? (
                            props.purchase.map((purchase, index) => (
                                <tr key={purchase.id}>
                                    <td className="border-[1.5px] border-black py-3 px-2">
                                        {index + 1}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {purchase.id}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {purchase.created_at}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {purchase.vendor_name}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {purchase.status}
                                    </td>
                                    <td className="border-[1.5px] border-black px-3">
                                        {purchase.total}
                                    </td>
                                    <td className="border-[1.5px] border-black px-3">
                                        <GoButton />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="border-[1.5px] border-black py-3 px-2 text-center"
                                >
                                    No Data
                                </td>
                            </tr>
                        )}
                        {/* <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                1
                            </td>
                            <td className="border-[1.5px] border-black">
                                P0 - 01 - 09 - 2023 - 00001 01 / 09 / 2023
                            </td>
                            <td className="border-[1.5px] border-black">
                                01 / 09 / 2023
                            </td>
                            <td className="border-[1.5px] border-black">
                                TK . Harapan Orang Tua
                            </td>
                            <td className="border-[1.5px] border-black">
                                Received
                            </td>
                            <td className="border-[1.5px] border-black px-3">
                                100. 000
                            </td>
                            <td className="border-[1.5px] border-black px-3">
                                :
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
