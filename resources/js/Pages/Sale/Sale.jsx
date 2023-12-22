import { DeleteIcon, EditIcon, SalesOrderIcon } from "@/Assets";
import {
    AddButton,
    GoButton,
    Navbar,
    Paginator,
    RefreshButton,
    SeacrhBarFull,
    SeacrhBarMini,
    StatusTag,
} from "../../Components";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { pickBy } from "lodash";
import React from "react";
import Select from "react-select";
import { format } from "date-fns";

export default function Sale(props) {
    // console.log(props);
    const { flash } = usePage().props;
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const [filterCustomer, setFilterCustomer] = useState(null);

    const customers = props.customer;

    const customerOptions = customers.map((customer) => ({
        value: customer.id,
        label: customer.name,
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
                customer: filterCustomer?.value,
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
        if (confirm("Are you sure you want to delete this sale?")) {
            router.delete(route("sale.destroy", { id: id }), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    getData();
                },
            });
        }
    };

    // notify();
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
            toast.error(flash.message.text, {
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
            <Head title="Sale" />
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
                {/* Same as */}
                <ToastContainer />
                <div className="flex">
                    <div className="flex flex-row h-11 w-full  gap-5">
                        <AddButton title="Add New Order" href="sale/create" />
                        <RefreshButton />
                        <form onSubmit={handleSearch} className="w-full">
                            <SeacrhBarFull
                                placeholder="Search for Sale Order"
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
                        <img src={SalesOrderIcon} className="w-7" />
                        <h1>Sales Order</h1>
                    </div>
                    <form
                        className="flex flex-row justify-between gap-6 mt-5"
                        onSubmit={handleFilter}
                    >
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="item-detail" className="text-sm">
                                Order Date
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
                                <button type="submit" className="hidden">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="item-detail" className="text-sm">
                                Customer Name
                            </label>
                            <Select
                                name="customer"
                                options={customerOptions}
                                placeholder="Select Customer..."
                                value={filterCustomer}
                                onChange={(e) => setFilterCustomer(e)}
                                className="w-auto rounded-xl mt-1"
                                // required
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
                                    <option value="">All</option>
                                    <option value="waiting">
                                        Waiting to Process
                                    </option>
                                    <option value="proceeded">Proceeded</option>
                                </select>
                                <GoButton type="submit" />
                            </div>
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
                                Sales Order No
                            </td>
                            <td className="border-[1.5px] border-black">
                                Date
                            </td>
                            <td className="border-[1.5px] border-black">
                                Customer Name
                            </td>
                            <td className="border-[1.5px] border-black">
                                Description
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
                        {props.sale.data && props.sale.data.length > 0 ? (
                            props.sale.data.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border-[1.5px] border-black py-3 px-2">
                                            {props.sale.from + index}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.sale_no}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {format(
                                                new Date(data.date),
                                                "d-M-yyyy"
                                            )}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.customer.name}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.memo}
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
                                                    href={route("sale.edit")}
                                                    className="border-[1.5px] border-black rounded-md px-2 py-1 bg-[#b7c9c7] hover:bg-[#8fa4a1] transition duration-300 ease-in-out text-white"
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
                                                    // href={route("sale.destroy")}
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
                                    colSpan="8"
                                    className="border-[1.5px] border-black py-3 px-2"
                                >
                                    No Data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex justify-center mt-5">
                    <Paginator meta={props.sale} />
                </div>
            </div>
        </div>
    );
}
