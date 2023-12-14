import { DeleteIcon, EditIcon } from "@/Assets";
import {
    AddButton,
    Navbar,
    Paginator,
    PrintButton,
    RefreshButton,
    SeacrhBarMini,
} from "../../Components";
import { Head, Link, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function Inventory(props) {
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
            <Head title="Inventory" />
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
            <div className="flex flex-1 ml-64 px-5 pt-14 flex-col">
                <SeacrhBarMini placeholder="Search for any item" />
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-semibold">Inventory</h1>
                    <div className="flex flex-row gap-5">
                        <RefreshButton />
                        {/* <PrintButton title="Print Inventory List" /> */}
                        <AddButton
                            title="Add Product"
                            href="/inventory/create"
                        />
                    </div>
                </div>

                <table className="mt-6">
                    <thead className="bg-[#B7C9C7] text-center font-semibold">
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
                            <td className="border-[1.5px] border-black w-20">
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {props.product.data ? (
                            props.product.data.map((product, i) => (
                                <tr key={i}>
                                    <td className="border-[1.5px] border-black py-3 px-2 w-8">
                                        {i + 1}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {product.name}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {product.default_code}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {Number(
                                            product.available_stock
                                        ).toLocaleString()}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        Rp{" "}
                                        {Number(
                                            product.sale_price
                                        ).toLocaleString()}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        <div className="flex flex-row gap-2 justify-center">
                                            <Link
                                                href={route("product.edit")}
                                                data={{ id: product.id }}
                                                method="get"
                                                as="button"
                                            >
                                                <img
                                                    src={EditIcon}
                                                    alt=""
                                                    className="h-4"
                                                />
                                                {/* Edit */}
                                            </Link>
                                            <Link
                                                href={route("product.destroy")}
                                                data={{ id: product.id }}
                                                method="delete"
                                                as="button"
                                                onClick={() => {
                                                    if (
                                                        window.confirm(
                                                            "Are you sure you want to delete this product?"
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
                                                {/* Delete */}
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <>
                                <tr>
                                    <td colSpan="6" className="py-3">
                                        No Data
                                    </td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
                {props.product.total > 10 && (
                    <div className="flex justify-center mt-5">
                        <Paginator meta={props.product} />
                    </div>
                )}
            </div>
        </div>
    );
}
