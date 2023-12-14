import { SalesInvoiceIcon, TrashIcon } from "@/Assets";
import {
    BackHeader,
    CheckButton,
    Navbar,
    PrintButton,
    RefreshButton,
    SaveButton,
    SeacrhBarFull,
} from "../../Components";
import { useForm } from "@inertiajs/react";
import React from "react";
import Select from "react-select";

export default function SaleInvoiceEdit(props) {
    console.log(props);

    const { data, setData, post, processing, errors } = useForm({
        partner_id: props.partner || "",
        date: props.invoice.date || "",
        memo: props.invoice.memo || "",
        price_total: props.invoice.price_total || 0,
        products: props.saleOrderLines || [],
    });
    return (
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div className="flex flex-1 ml-64">
                <div className="pt-14 px-5 w-full">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <BackHeader href="/sales-invoice" />
                            <div className="flex flex-row items-center gap-3">
                                <img
                                    src={SalesInvoiceIcon}
                                    className="h-10 opacity-80"
                                />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-lg">
                                        Sales Invoice
                                    </p>
                                    <p className="text-sm">
                                        {props.invoice.invoice_no}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row align-middle gap-3">
                            <CheckButton />
                            {/* <SaveButton /> */}
                        </div>
                    </div>

                    <div className="border-[1.5px] border-[#6D7A79] rounded-xl mt-5 px-5 py-8 w-auto ">
                        <form className="flex flex-row justify-between gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-sm">Customer</label>
                                <input
                                    name="item-detail"
                                    placeholder="Tk. Harapan Pupus"
                                    className="w-auto rounded-xl"
                                    value={data.partner_id.label}
                                ></input>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-sm">Order Date</label>
                                <input
                                    name="item-id"
                                    placeholder="01 - 08 - 2023"
                                    className="w-auto rounded-xl"
                                    value={data.date}
                                ></input>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-sm">Memo</label>
                                <p
                                    name="vendor-name"
                                    className="w-auto rounded-xl border-2 border-gray-400 px-3 py-2"
                                >
                                    {data.memo}
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="mt-8 flex flex-roW gap-4">
                        {/* <SeacrhBarFull placeholder="Search for items" /> */}
                        {/* <RefreshButton /> */}
                    </div>
                    <table className="table-fixed mt-5 h-20 w-full text-center border">
                        <thead>
                            <tr className="border-[1.5px] border-black bg-[#B7C9C7]">
                                <td className="px-3 py-2 border-2 border-black w-12">
                                    No
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Item Detail
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Product Code / Barcode No
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Quantity
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Discount (%)
                                </td>
                                <td className="px-3 border-2 border-black">
                                    Total
                                </td>
                            </tr>
                        </thead>
                        <tbody className="gap-2">
                            {data.products.map && data.products.length > 0 ? (
                                data.products.map((row, index) => (
                                    <React.Fragment key={index}>
                                        <tr className="py-2">
                                            <td
                                                rowSpan="2"
                                                className="pt-2 px-1"
                                            >
                                                <p className="py-auto h-full border-2 border-gray-400 rounded-xl items-center flex text-center justify-center">
                                                    {index + 1}
                                                </p>
                                            </td>
                                            <td
                                                rowSpan="2"
                                                className="pt-2 px-1"
                                            >
                                                <p className="py-auto h-full border-2 border-gray-400 rounded-xl items-center flex text-center justify-center">
                                                    {row.label}
                                                </p>
                                            </td>
                                            <td className="pt-2 px-1">
                                                <p className="py-2 border-2 border-gray-400 rounded-xl">
                                                    {row.default_code}
                                                </p>
                                            </td>
                                            <td className="pt-2 px-1">
                                                <p className="py-2 border-2 border-gray-400 rounded-xl">
                                                    {row.product_quantity}
                                                </p>
                                            </td>
                                            <td className="pt-2 px-1">
                                                <p className="py-2 border-2 border-gray-400 rounded-xl">
                                                    {row.discount_percent} %
                                                </p>
                                            </td>
                                            <td className="pt-2 px-1">
                                                <div className="py-2 border-2 border-gray-400 rounded-xl">
                                                    <div className="flex flex-row justify-between px-3">
                                                        <p>@</p>
                                                        <p>
                                                            Rp{" "}
                                                            {Number(
                                                                row.price
                                                            ).toLocaleString()}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pt-2 px-1">
                                                <p className="py-2 border-2 border-gray-400 rounded-xl">
                                                    {row.barcode_no}
                                                </p>
                                            </td>
                                            <td className="pt-2 px-1">
                                                <p className="py-2 border-2 border-gray-400 rounded-xl">
                                                    pcs
                                                </p>
                                                {errors.product_quantity && (
                                                    <div>
                                                        {
                                                            errors.product_quantity
                                                        }
                                                    </div>
                                                )}
                                            </td>
                                            <td className="pt-2 px-1">
                                                <p className="py-2 border-2 border-gray-400 rounded-xl">
                                                    Rp{" "}
                                                    {row.discount.toLocaleString()}
                                                </p>
                                            </td>
                                            <td className="pt-2 px-1">
                                                <p className="py-2 border-2 border-gray-400 rounded-xl">
                                                    Rp{" "}
                                                    {row.subtotal.toLocaleString()}
                                                </p>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                ))
                            ) : (
                                <tr className="border-2 border-gray-400 rounded-xl h-44">
                                    <td colSpan={7} className="text-center">
                                        <p className="text-center">
                                            No Products
                                        </p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
             
        </div>
    );
}
