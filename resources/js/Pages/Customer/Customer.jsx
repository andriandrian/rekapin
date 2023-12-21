import {
    AddButton,
    Navbar,
    PrintButton,
    RefreshButton,
    SeacrhBarMini,
    Paginator,
} from "../../Components";
import { Link, Head, usePage, router } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { DeleteIcon, EditIcon } from "@/Assets";
import { pickBy } from "lodash";

export default function Customer(props) {
    const { flash } = usePage().props;
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        getData();
        // window.location.href = `/inventory?search=${search.current.value}`;
    };

    const getData = () => {
        router.get(
            route().current(),
            pickBy({
                search: search,
            }),
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this customer?")) {
            router.delete(route("customer.destroy", { id: id }), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    getData();
                },
            });
        }
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
                <form onSubmit={handleSearch}>
                    <SeacrhBarMini
                        // className="w-full"
                        placeholder="Search Customer"
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
                            <td className="border-[1.5px] border-black">
                                Phone Number
                            </td>
                            <td className="border-[1.5px] border-black">
                                Email
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
                                            {props.customer.from + i}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.name}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.phone}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.email}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.address}
                                        </td>
                                        <td className="border-[1.5px] border-black px-2 w-24">
                                            <div className="flex flex-row gap-2 justify-center">
                                                <Link
                                                    href={route(
                                                        "customer.edit"
                                                    )}
                                                    data={{ id: data.id }}
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

                                                <button
                                                    // href={route(
                                                    //     "customer.destroy"
                                                    // )}
                                                    data={{ id: data.id }}
                                                    method="delete"
                                                    as="button"
                                                    className="border-[1.5px] border-black rounded-md px-2 py-1 bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out text-white"
                                                    onClick={() =>
                                                        handleDelete(data.id)
                                                    }
                                                >
                                                    <img
                                                        src={DeleteIcon}
                                                        alt=""
                                                        className="h-4"
                                                    />
                                                </button>
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
