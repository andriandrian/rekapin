import { SalesOrderIcon } from "@/Assets";
import {
    AddButton,
    GoButton,
    Navbar,
    RefreshButton,
    SeacrhBarFull,
} from "../../Components";
import { Head, Link } from "@inertiajs/react";

export default function Sale(props) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Head title="Sale" />
            <Navbar />
            <div className="flex flex-col flex-1  px-5 pt-14">
                <div className="flex">
                    <div className="flex flex-row h-11 w-full  gap-5">
                        <AddButton title="Add New Order" href="sale/create" />
                        <RefreshButton />
                        <SeacrhBarFull placeholder="Search for Sale Order" />
                    </div>
                </div>

                <div className="border-[1.5px] border-black rounded-xl mt-5 px-5 py-8 w-auto ">
                    <div className="flex flex-row gap-3 text-xl font-semibold">
                        <img src={SalesOrderIcon} className="w-7" />
                        <h1>Sales Order</h1>
                    </div>
                    <form className="flex flex-row justify-between gap-6 mt-5">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="item-detail" className="text-sm">
                                Order Date
                            </label>
                            <div className="flex flex-row justify-between items-center gap-1 border-[1px] border-black rounded-xl">
                                <input
                                    name="item-detail"
                                    type="date"
                                    placeholder=""
                                    className="w-auto rounded-xl border-none text-center focus:ring-0"
                                ></input>
                                <p className="font-light">-</p>
                                <input
                                    name="item-detail"
                                    type="date"
                                    placeholder=""
                                    className="w-auto rounded-xl border-none text-center focus:ring-0"
                                ></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="item-detail" className="text-sm">
                                Customer Name
                            </label>
                            <input
                                name="item-id"
                                placeholder="Enter Customer Name"
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
                                    placeholder="Enter Status"
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
                                Sales Order No
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
                            <td className="border-[1.5px] border-black">
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {props.sale && props.sale.length > 0 ? (
                            props.sale.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border-[1.5px] border-black py-3 px-2">
                                            {index + 1}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.id}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.customer.name}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.memo}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.status}
                                        </td>
                                        <td className="border-[1.5px] border-black px-3">
                                            {data.price_total}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            <div className="flex flex-row gap-2 justify-center">
                                                <Link
                                                    href={route("sale.edit")}
                                                    data={{ id: data.id }}
                                                    method="get"
                                                    as="button"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route("sale.destroy")}
                                                    data={{ id: data.id }}
                                                    method="delete"
                                                    as="button"
                                                    onClick={() => {
                                                        if (
                                                            window.confirm(
                                                                "Are you sure you want to delete this sale order?"
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
                                    colSpan="7"
                                    className="border-[1.5px] border-black py-3 px-2"
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
                                S0 - 01 - 09 - 2023 - 00001 01 / 09 / 2023
                            </td>
                            <td className="border-[1.5px] border-black">
                                TK . Harapan Orang Tua
                            </td>
                            <td className="border-[1.5px] border-black">
                                Barangnya diantar hari ini
                            </td>
                            <td className="border-[1.5px] border-black">
                                Waiting to Process
                            </td>
                            <td className="border-[1.5px] border-black px-3">
                                100. 000
                            </td>
                            <td className="border-[1.5px] border-black px-3">
                                :
                            </td>
                        </tr>
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                2
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
                                Waiting to Process
                            </td>
                            <td className="border-[1.5px] border-black px-3">
                                100. 000
                            </td>
                            <td className="border-[1.5px] border-black px-3">
                                :
                            </td>
                        </tr>
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                3
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
                                Waiting to Process
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
