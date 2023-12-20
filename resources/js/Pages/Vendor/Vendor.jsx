import {
    DeleteIcon,
    EditIcon,
    PlusIcon,
    PrintIcon,
    RefreshIcon,
} from "@/Assets";
import {
    AddButton,
    Navbar,
    Paginator,
    PrintButton,
    RefreshButton,
    SeacrhBarFull,
    SeacrhBarMini,
} from "../../Components";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function Vendor(props) {
    const { flash } = usePage().props;
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        getData();
    };

    const getData = () => {
        router.get(
            route().current(),
            {
                search: search,
            },
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

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
            <Head title="Vendor" />
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
                <form onSubmit={handleSearch}>
                    <SeacrhBarMini
                        // className="w-full"
                        placeholder="Search Vendor"
                        label="Search"
                        name="search"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="hidden">
                        Search
                    </button>
                </form>
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-semibold">Vendor List</h1>
                    <div className="flex flex-row gap-5">
                        <RefreshButton />
                        {/* <PrintButton title="Print Vendor List" /> */}
                        <AddButton title="Add Vendor" href="/vendor/create" />
                    </div>
                </div>

                <table className="mt-6">
                    <thead className="bg-[#B7C9C7] text-center font-semibold">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                No
                            </td>
                            <td className="border-[1.5px] border-black">
                                Vendor Name
                            </td>
                            <td className="border-[1.5px] border-black">
                                Phone Number
                            </td>
                            <td className="border-[1.5px] border-black">
                                Email
                            </td>
                            <td className="border-[1.5px] border-black">
                                Address
                            </td>
                            <td className="border-[1.5px] border-black">
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {props.vendor.data && props.vendor.data.length > 0 ? (
                            props.vendor.data.map((vendor, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="border-[1.5px] border-black py-3 px-2 w-8">
                                            {props.vendor.from + i}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {vendor.name}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {vendor.phone}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {vendor.email}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            <p className="line-clamp-1">
                                                {vendor.address}
                                            </p>
                                        </td>
                                        <td className="border-[1.5px] border-black px-2 w-24">
                                            <div className="flex flex-row gap-2 justify-center">
                                                <Link
                                                    href={route("vendor.edit")}
                                                    data={{ id: vendor.id }}
                                                    method="get"
                                                    as="button"
                                                    className="border-[1.5px] border-black rounded-md px-2 py-1 bg-[#b7c9c7] hover:bg-[#8fa4a1] transition duration-300 ease-in-out text-white"
                                                >
                                                    <img
                                                        src={EditIcon}
                                                        alt=""
                                                        className="h-4"
                                                    />
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "vendor.destroy"
                                                    )}
                                                    data={{ id: vendor.id }}
                                                    method="delete"
                                                    as="button"
                                                    className="border-[1.5px] border-black rounded-md px-2 py-1 bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out text-white"
                                                    onClick={() => {
                                                        if (
                                                            window.confirm(
                                                                "Are you sure you want to delete this vendor?"
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
                                    colSpan="6"
                                    className="border-[1.5px] border-black py-3 px-2"
                                >
                                    No Data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {props.vendor.total > 10 && (
                    <div className="flex justify-center mt-5">
                        <Paginator meta={props.vendor} />
                    </div>
                )}
            </div>
        </div>
    );
}
