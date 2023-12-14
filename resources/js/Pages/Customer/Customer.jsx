import {
    AddButton,
    Navbar,
    PrintButton,
    RefreshButton,
    SeacrhBarMini,
    Paginator,
} from "../../Components";
import { Link, Head, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { DeleteIcon, EditIcon } from "@/Assets";

export default function Customer(props) {
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
            <Head title="Customer" />
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
            <div className="flex flex-1 px-5 ml-64 pt-14 flex-col">
                <SeacrhBarMini placeholder="Search for Customer" />
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-semibold">Customer List</h1>
                    <div className="flex flex-row gap-5">
                        <RefreshButton />
                        {/* <PrintButton title="Print for Customer" /> */}
                        <AddButton
                            title="Add Customer"
                            href="/customer/create"
                        />
                    </div>
                </div>

                <table className="mt-6">
                    <thead className="bg-[#B7C9C7] text-center font-semibold">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2 w-8">
                                No
                            </td>
                            <td className="border-[1.5px] border-black">
                                Customer Name
                            </td>
                            {/* <td className="border-[1.5px] border-black">
                                Customer ID
                            </td> */}
                            <td className="border-[1.5px] border-black">
                                Phone Number
                            </td>
                            <td className="border-[1.5px] border-black">
                                Address
                            </td>
                            <td className="border-[1.5px] border-black w-20">
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {props.customer.data ? (
                            props.customer.data.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="border-[1.5px] border-black py-3 px-2">
                                            {i + 1}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.name}
                                        </td>
                                        {/* <td className="border-[1.5px] border-black">
                                            {data.name}
                                        </td> */}
                                        <td className="border-[1.5px] border-black">
                                            {data.phone}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.address}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            <div className="flex flex-row gap-2 justify-center">
                                                <Link
                                                    href={route(
                                                        "customer.edit"
                                                    )}
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
                                                        "customer.destroy"
                                                    )}
                                                    data={{ id: data.id }}
                                                    method="delete"
                                                    as="button"
                                                    onClick={() => {
                                                        if (
                                                            window.confirm(
                                                                "Are you sure you want to delete this customer?"
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
                                                {/* <a
                                                    href={`/customer-edit/${data.id}`}
                                                >
                                                    <button className="bg-[#B7C9C7] w-8 h-8 rounded-full">
                                                        <img
                                                            src="/assets/edit.png"
                                                            alt="edit"
                                                        />
                                                    </button>
                                                </a>
                                                <button className="bg-[#B7C9C7] w-8 h-8 rounded-full">
                                                    <img
                                                        src="/assets/delete.png"
                                                        alt="delete"
                                                    />
                                                </button> */}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="border-[1.5px] border-black py-3 px-2 text-center"
                                >
                                    No Data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex justify-center mt-5">
                    <Paginator meta={props.customer} />
                </div>
            </div>
        </div>
    );
}
