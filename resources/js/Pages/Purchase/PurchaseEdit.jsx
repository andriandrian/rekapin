import { CheckIcon, PurchasingIcon, SaveIcon, TrashIcon } from "@/Assets";
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

export default function Edit(props) {
    const { data, setData, post, processing, errors } = useForm({
        id: props.purchase.id || "",
        partner_id: props.partner || "",
        date: props.purchase.date || "",
        memo: props.purchase.memo || "",
        price_total: props.purchase.price_total || 0,
        status: props.purchase.status || "",
        products: props.purchaseOrderLines || [],
    });

    function submit(e) {
        e.preventDefault();
        post("/purchase/update");
    }

    const vendors = props.vendor;

    const vendorOptions = vendors.map((vendor) => ({
        value: vendor.id,
        label: vendor.name,
    }));

    const product = props.product;

    const productOptions = product.map((product) => ({
        value: product.id,
        batch_no: product.batch_no,
        barcode_no: product.barcode_no,
        default_code: product.default_code,
        label: product.name,
        price: product.sale_price,
        discount: 0,
        discount_percent: 0,
        subtotal: 0,
        product_quantity: 0,
    }));

    const insertProduct = (data) => {
        setData((prevState) => ({
            ...prevState,
            products: [...prevState.products, data],
        }));
    };

    const deleteRows = (index) => {
        const products = [...data.products];
        products.splice(index, 1);
        setData((prevState) => ({
            ...prevState,
            products: products,
        }));
    };

    const insertQuantity = (quantity, index) => {
        const products = [...data.products];
        products[index].product_quantity = quantity;
        setData((prevState) => ({
            ...prevState,
            products: products,
        }));
        countSubtotal(index);
    };

    const countSubtotal = (index) => {
        const products = [...data.products];
        const quantity = products[index].product_quantity;
        const discount = products[index].discount;
        const price = products[index].price;
        const discountedPrice = price - discount;
        const countSubtotal = quantity * discountedPrice;
        products[index].subtotal = countSubtotal;
        setData((prevState) => ({
            ...prevState,
            products: products,
        }));
        countTotal();
    };

    const insertDiscount = (discount, index, price) => {
        countDiscount(discount, index, price);
        const products = [...data.products];
        products[index].discount_percent = discount;
        setData((prevState) => ({
            ...prevState,
            products: products,
        }));
        countSubtotal(index);
        console.log(data.products);
    };

    const countDiscount = (discount, index, price) => {
        const products = [...data.products];
        const countDiscount = (price * discount) / 100;
        products[index].discount = countDiscount;
        setData((prevState) => ({
            ...prevState,
            products: products,
        }));
    };

    const countTotal = () => {
        const products = [...data.products];
        let total = 0;
        products.map((product) => {
            total += product.subtotal;
        });
        setData((prevState) => ({
            ...prevState,
            price_total: total,
        }));
    };

    function setFinish(e) {
        e.preventDefault();
        post("/purchase/status");
    }

    return (
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div className="flex flex-1 ml-64">
                <div className="pt-14 px-5 w-full">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <BackHeader href="/purchase" />
                            <div className="flex flex-row items-center gap-3">
                                <img
                                    src={PurchasingIcon}
                                    className="h-10 opacity-80"
                                />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-lg">
                                        Purchasing
                                    </p>
                                    <p className="text-sm">
                                        {props.purchase.purchase_no}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row align-middle gap-3">
                            <div className="absolute top-0 right-0 mr-5 mb-5 flex gap-4 mt-14">
                                {data.status == "Unpaid" && (
                                    <button className="flex bg-[#B7C9C7] border-[1.5px] border-black rounded-xl place-items-center px-5 h-16">
                                        <img
                                            src={CheckIcon}
                                            onClick={setFinish}
                                            className="w-6"
                                        />
                                    </button>
                                )}
                                {data.status == "Unpaid" && (
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex bg-[#B7C9C7] border-[1.5px] border-black rounded-xl place-items-center px-5 h-16"
                                    >
                                        <img src={SaveIcon} className="w-6" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={submit}>
                            <div className="flex flex-row justify-between gap-6 border-[1.5px] border-[#6D7A79] rounded-xl mt-5 px-5 py-8 w-auto">
                                <div className="flex flex-col gap-2 w-full">
                                    <div>
                                        <label
                                            htmlFor="vendor"
                                            className="font-semibold text-sm"
                                        >
                                            <p>Vendor</p>
                                        </label>
                                    </div>
                                    <Select
                                        name="vendor"
                                        options={vendorOptions}
                                        placeholder="Select Vendor..."
                                        value={data.partner_id}
                                        onChange={(e) =>
                                            setData("partner_id", e)
                                        }
                                        className="w-auto rounded-xl mt-1"
                                    />
                                    {errors.partner_id && (
                                        <div>{errors.partner_id}</div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="text-sm font-semibold">
                                        Order Date
                                    </label>
                                    <input
                                        name="date"
                                        type="date"
                                        className="w-auto rounded-xl"
                                        value={data.date}
                                        onChange={(e) =>
                                            setData("date", e.target.value)
                                        }
                                    ></input>
                                    {errors.date && <div>{errors.date}</div>}
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="text-sm font-semibold">
                                        Memo
                                    </label>
                                    <input
                                        name="memo"
                                        placeholder="Enter memo here"
                                        className="w-auto rounded-xl"
                                        value={data.memo}
                                        onChange={(e) =>
                                            setData("memo", e.target.value)
                                        }
                                    ></input>
                                    {errors.memo && <div>{errors.memo}</div>}
                                </div>
                            </div>
                            <div className="mt-4 flex flex-roW gap-4">
                                {props.purchase.status == "Unpaid" && (
                                    <Select
                                        name="product"
                                        options={productOptions}
                                        placeholder="Insert Product..."
                                        onChange={(e) => insertProduct(e)}
                                        className="w-full rounded-xl mt-1"
                                    />
                                )}
                                <div className="flex flex-row justify-between w-1/3 self-center gap-2">
                                    <p className="min-w-fit self-center">
                                        Total Price
                                    </p>
                                    <div className="flex flex-row justify-between border-2 w-full py-1 px-2 rounded-md ">
                                        <p>Rp </p>
                                        <p>
                                            {Number(
                                                data.price_total
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {errors.products && (
                                <div className="mt-4">{errors.products}</div>
                            )}
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
                                        {props.purchase.status == "Unpaid" && (
                                            <td className="px-3 border-2 border-black w-14"></td>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="gap-2">
                                    {data.products.map &&
                                    data.products.length > 0 ? (
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
                                                            <span className="font-semibold mr-1">
                                                                {row.label}
                                                            </span>
                                                            ({row.batch_no})
                                                        </p>
                                                    </td>
                                                    <td className="pt-2 px-1">
                                                        <p className="py-2 border-2 border-gray-400 rounded-xl">
                                                            {row.default_code}
                                                        </p>
                                                    </td>
                                                    <td className="pt-2 px-1">
                                                        <input
                                                            type="number"
                                                            min={0}
                                                            placeholder="Quantity"
                                                            className="py-2 w-full text-center border-2 border-gray-400 rounded-xl focus:outline-double"
                                                            value={
                                                                row.product_quantity
                                                            }
                                                            onChange={(e) =>
                                                                insertQuantity(
                                                                    e.target
                                                                        .value,
                                                                    index,
                                                                    row.price,
                                                                    row.discount
                                                                )
                                                            }
                                                        ></input>
                                                    </td>
                                                    <td className="pt-2 px-1">
                                                        <input
                                                            type="number"
                                                            min={0}
                                                            max={100}
                                                            placeholder="Discount (%)"
                                                            value={
                                                                row.discount_percent
                                                            }
                                                            onChange={(e) => {
                                                                insertDiscount(
                                                                    e.target
                                                                        .value,
                                                                    index,
                                                                    row.price
                                                                );
                                                            }}
                                                            className="py-2 w-full text-center border-2 border-gray-400 rounded-xl"
                                                        ></input>
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
                                                    {props.purchase.status ==
                                                        "Unpaid" && (
                                                        <td
                                                            className="mx-auto h-full pt-2 px-1"
                                                            rowSpan="2"
                                                        >
                                                            <div
                                                                onClick={(
                                                                    index
                                                                ) => {
                                                                    deleteRows(
                                                                        index
                                                                    );
                                                                }}
                                                                className="flex justify-center py-2 border-2 border-gray-400 rounded-xl h-full"
                                                            >
                                                                <img
                                                                    className="w-4"
                                                                    src={
                                                                        TrashIcon
                                                                    }
                                                                />
                                                            </div>
                                                        </td>
                                                    )}
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
                                            <td
                                                colSpan={7}
                                                className="text-center"
                                            >
                                                <p className="text-center">
                                                    No Products
                                                </p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
