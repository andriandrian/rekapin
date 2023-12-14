import {
    DeleteIcon,
    EditIcon,
    SalesInvoiceIcon,
    SalesOrderIcon,
} from "@/Assets";
import {
    AddButton,
    GoButton,
    Navbar,
    RefreshButton,
    SeacrhBarFull,
} from "../../Components";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function SaleInvoice(props) {
    router.reload({ only: ["invoice"] });

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.message?.type == "success") {
            toast.success(flash.message.text, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (flash.message?.type == "error") {
            toast.error("🦄 Wow so easy!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, []);

    return (
        <div className="flex flex-row h-screen w-full ">
            <Head title="Sales Invoice" />
            <Navbar />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="flex flex-col flex-1 ml-64 px-5 pt-14">
                <div className="flex">
                    <div className="flex flex-row h-11 w-full  gap-5">
                        <AddButton title="Add New Invoice" href="/sale" />
                        <RefreshButton only={["invoice"]} />
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
                            <label htmlFor="item-detail" className="text-sm">
                                Invoice Date
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
                                <select className="w-full rounded-xl focus:ring-0">
                                    <option value="unfinish">Unfinish</option>
                                    <option value="finish">Finish</option>
                                </select>
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
                            <td className="border-[1.5px] border-black w-20">
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {props.invoice.data && props.invoice.data.length > 0 ? (
                            props.invoice.data.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border-[1.5px] border-black py-3 px-2 w-8">
                                            {index + 1}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.invoice_no}
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
                                            <p>
                                                Rp{" "}
                                                {Number(
                                                    data.price_total
                                                ).toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            <div className="flex flex-row gap-2 justify-center">
                                                <Link
                                                    href={route("invoice.edit")}
                                                    data={{ id: data.id }}
                                                    method="get"
                                                    as="button"
                                                >
                                                    <img
                                                        src={EditIcon}
                                                        alt=""
                                                        className="h-4"
                                                    />
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "invoice.destroy"
                                                    )}
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
                                                    <img
                                                        src={DeleteIcon}
                                                        alt=""
                                                        className="h-4"
                                                    />
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
                    </tbody>
                </table>
            </div>
        </div>
    );
}
