import { DeleteIcon, EditIcon, PurchasingIcon } from "@/Assets";
import {
    AddButton,
    GoButton,
    Navbar,
    RefreshButton,
    SeacrhBarFull,
    StatusTag,
} from "../../Components";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { pickBy } from "lodash";
import React from "react";
import Select from "react-select";

export default function Purchase(props) {
    const { flash } = usePage().props;
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const [filterVendor, setFilterVendor] = useState(null);

    const vendors = props.vendor;

    const vendorOptions = vendors.map((vendor) => ({
        value: vendor.id,
        label: vendor.name,
    }));

    const handleSearch = (e) => {
        e.preventDefault();
        getData();
    };

    const handleFilter = (e) => {
        e.preventDefault();
        getFilter();
    };

    const getFilter = () => {
        router.get(
            route().current(),
            pickBy({
                status: status,
                startDate: startDate,
                endDate: endDate,
                vendor: filterVendor?.value,
            }),
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
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
        if (confirm("Are you sure you want to delete this purchase?")) {
            router.delete(route("purchase.destroy", { id: id }), {
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
            <Head title="Purchasing" />
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
                        <AddButton
                            title="Add New Purchasing"
                            href="/purchase/create"
                        />
                        <RefreshButton />
                        <form onSubmit={handleSearch} className="w-full">
                            <SeacrhBarFull
                                placeholder="Search Purchasing"
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
                    </div>
                </div>

                <div className="border-[1.5px] border-black rounded-xl mt-5 px-5 py-8 w-auto ">
                    <div className="flex flex-row gap-3 text-xl font-semibold">
                        <img src={PurchasingIcon} className="w-7" />
                        <h1>Purchase Order</h1>
                    </div>
                    <form
                        className="flex flex-row justify-between gap-6 mt-5"
                        onSubmit={handleFilter}
                    >
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="item-detail" className="text-sm">
                                Purchasing Date
                            </label>
                            <div className="flex flex-row justify-between items-center gap-1 border-[1px] border-black rounded-xl">
                                <input
                                    name="startDate"
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => {
                                        setStartDate(e.target.value);
                                        // console.log(e.target.value);
                                    }}
                                    className="w-auto rounded-xl border-none text-center focus:ring-0"
                                ></input>
                                <p className="font-light">-</p>
                                <input
                                    name="endDate"
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => {
                                        setEndDate(e.target.value);
                                    }}
                                    className="w-auto rounded-xl border-none text-center focus:ring-0"
                                ></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="item-detail" className="text-sm">
                                Vendor Name
                            </label>
                            <Select
                                name="customer"
                                options={vendorOptions}
                                placeholder="Select Vendor..."
                                value={filterVendor}
                                onChange={(e) => setFilterVendor(e)}
                                className="w-auto rounded-xl mt-1"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="item-detail" className="text-sm">
                                Status
                            </label>
                            <div className="flex flex-row w-full mx-auto gap-2">
                                <select
                                    className="w-full rounded-xl focus:ring-0"
                                    name="status"
                                    value={status}
                                    onChange={(e) => {
                                        setStatus(e.target.value);
                                    }}
                                >
                                    <option value="all">All</option>
                                    <option value="unpaid">Unpaid</option>
                                    <option value="paid">Paid</option>
                                </select>
                                <GoButton type="submit" />
                            </div>
                            <div className="flex flex-row w-full mx-auto gap-2"></div>
                        </div>
                    </form>
                </div>

                <table className="mt-6">
                    <thead className="bg-[#B7C9C7] text-center font-semibold">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2 w-8">
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
                                Total
                            </td>
                            <td className="border-[1.5px] border-black">
                                Status
                            </td>
                            <td className="border-[1.5px] border-black">
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {props.purchase.data &&
                        props.purchase.data.length > 0 ? (
                            props.purchase.data.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border-[1.5px] border-black py-3 px-2">
                                            {props.purchase.from + index}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.purchase_no}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.date}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.vendor.name}
                                        </td>
                                        <td className="border-[1.5px] border-black px-3">
                                            <p>
                                                Rp{" "}
                                                {Number(
                                                    data.price_total
                                                ).toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="border-[1.5px] border-black w-4 px-2">
                                            {/* {data.status} */}
                                            <div className="flex justify-center">
                                                <StatusTag
                                                    status={data.status}
                                                />
                                            </div>
                                        </td>
                                        <td className="border-[1.5px] border-black px-2 w-24">
                                            <div className="flex flex-row gap-2 justify-center">
                                                <Link
                                                    className="border-[1.5px] border-black rounded-md px-2 py-1 bg-[#b7c9c7] hover:bg-[#8fa4a1] transition duration-300 ease-in-out text-white"
                                                    href={route(
                                                        "purchase.edit"
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
                                                <button
                                                    // href={route(
                                                    //     "purchase.destroy"
                                                    // )}
                                                    className="border-[1.5px] border-black rounded-md px-2 py-1 bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out text-white"
                                                    data={{ id: data.id }}
                                                    method="delete"
                                                    as="button"
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
