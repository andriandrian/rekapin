import { DeleteIcon, EditIcon } from "@/Assets";
import {
    AddButton,
    Navbar,
    Paginator,
    PrintButton,
    RefreshButton,
    SeacrhBarMini,
} from "../../Components";
import { Head, Link, usePage, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { pickBy } from "lodash";

export default function Inventory(props) {
    const { flash } = usePage().props;
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    console.log(props);

    const handleSearch = (e) => {
        e.preventDefault();
        getData();
    };

    const getData = () => {
        setIsLoading(true);
        router.get(
            route().current(),
            pickBy({
                search: search,
            }),
            {
                preserveScroll: true,
                preserveState: true,
                onFInish: () => setIsLoading(false),
            }
        );
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this product?")) {
            router.delete(route("product.destroy", { id: id }), {
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
                <form onSubmit={handleSearch}>
                    <SeacrhBarMini
                        placeholder="Search Product"
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
                            <td className="border-[1.5px] border-black">
                                Vendor
                            </td>
                            <td className="border-[1.5px] border-black">Qty</td>
                            <td className="border-[1.5px] border-black">UOM</td>
                            <td className="border-[1.5px] border-black">
                                Sales Price (@)
                            </td>
                            <td className="border-[1.5px] border-black">
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {props.product.data && props.product.data.length > 0 ? (
                            props.product.data.map((product, i) => (
                                <tr key={i}>
                                    <td className="border-[1.5px] border-black py-3 px-2 w-8">
                                        {props.product.from + i}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {product.name}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {product.default_code}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {product.vendor.name}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {Number(
                                            product.available_stock
                                        ).toLocaleString()}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        {product.uom}
                                    </td>
                                    <td className="border-[1.5px] border-black">
                                        Rp{" "}
                                        {Number(
                                            product.sale_price
                                        ).toLocaleString()}
                                    </td>
                                    <td className="border-[1.5px] border-black px-2 w-24">
                                        <div className="flex flex-row gap-2 justify-center">
                                            <Link
                                                href={route("product.edit")}
                                                data={{ id: product.id }}
                                                method="get"
                                                as="button"
                                                className="border-[1.5px] border-black rounded-md px-2 py-1 bg-[#b7c9c7] hover:bg-[#8fa4a1] transition duration-300 ease-in-out text-white"
                                            >
                                                <img
                                                    src={EditIcon}
                                                    alt=""
                                                    className="h-4"
                                                />
                                                {/* Edit */}
                                            </Link>
                                            <button
                                                // href={route("product.destroy")}
                                                data={{ id: product.id }}
                                                method="delete"
                                                as="button"
                                                className="border-[1.5px] border-black rounded-md px-2 py-1 bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out text-white"
                                                onClick={() =>
                                                    handleDelete(product.id)
                                                }
                                            >
                                                <img
                                                    src={DeleteIcon}
                                                    alt=""
                                                    className="h-4"
                                                />
                                                {/* Delete */}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <>
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="border-[1.5px] border-black py-3 px-2"
                                    >
                                        No Data
                                    </td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
                <div className="flex justify-center mt-5">
                    <Paginator meta={props.product} />
                </div>
            </div>
        </div>
    );
}
