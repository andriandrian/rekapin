import { BackHeader, FormInput, Navbar, TextButton } from "../../Components";
import { useForm, Head } from "@inertiajs/react";
import React from "react";
import Select from "react-select";

export default function InventoryEdit(props) {
    console.log(props);
    const { data, setData, post, processing, errors } = useForm({
        id: props.product.id,
        name: props.product.name || "",
        purchase_price: props.product.purchase_price || "",
        sale_price: props.product.sale_price || "",
        default_code: props.product.default_code || "",
        barcode_no: props.product.barcode_no || "",
        batch_no: props.product.batch_no || "",
        available_stock: props.product.available_stock || "",
        uom: props.product.uom || "",
        vendor_id: props.currentVendor || "",
    });

    function submit(e) {
        e.preventDefault();
        post("/inventory/update");
    }

    const vendors = props.vendor;

    const vendorOptions = vendors.map((vendor) => ({
        value: vendor.id,
        label: vendor.name,
    }));

    return (
        <div className="flex flex-row h-screen w-full">
            <Head title="Edit Product Detail" />
            <Navbar />
            <div className="flex flex-1 ml-64 px-5 pt-14 flex-col h-screen">
                <div>
                    <div className="w-full">
                        <BackHeader
                            label="Back to Product List"
                            title="Edit Product Detail"
                            href="/inventory"
                        />
                    </div>

                    <div className="mt-5 flex w-full">
                        <form
                            className="flex flex-row md:flex-row md:gap-0 gap-4 justify-between w-full"
                            onSubmit={submit}
                        >
                            <div className="flex flex-col gap-4 w-full pr-7">
                                <FormInput
                                    label="Item Name"
                                    placeholder="Enter Item Name"
                                    name="item-name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && <div>{errors.name}</div>}
                                <FormInput
                                    label="Purchase Price"
                                    placeholder="Enter Purchase Price"
                                    name="purchase-price"
                                    value={data.purchase_price}
                                    onChange={(e) =>
                                        setData(
                                            "purchase_price",
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.purchase_price && (
                                    <div>{errors.purchase_price}</div>
                                )}
                                <FormInput
                                    label="Sale Price"
                                    placeholder="Enter Sale Price"
                                    name="sale-price"
                                    value={data.sale_price}
                                    onChange={(e) =>
                                        setData("sale_price", e.target.value)
                                    }
                                />
                                {errors.sale_price && (
                                    <div>{errors.sale_price}</div>
                                )}
                                <FormInput
                                    label="Default Code"
                                    placeholder="Enter Default Code"
                                    name="default-code"
                                    value={data.default_code}
                                    onChange={(e) =>
                                        setData("default_code", e.target.value)
                                    }
                                />
                                {errors.default_code && (
                                    <div>{errors.default_code}</div>
                                )}
                                <FormInput
                                    label="Unit of Measure"
                                    placeholder="Enter Unit of Measure"
                                    name="default-code"
                                    value={data.uom}
                                    onChange={(e) =>
                                        setData("uom", e.target.value)
                                    }
                                />
                                {errors.uom && <div>{errors.uom}</div>}
                            </div>
                            <div className="flex flex-col gap-4 w-full pr-7">
                                <FormInput
                                    label="Barcode No"
                                    placeholder="Enter Barcode No"
                                    name="barcode-no"
                                    value={data.barcode_no}
                                    onChange={(e) =>
                                        setData("barcode_no", e.target.value)
                                    }
                                />
                                {errors.barcode_no && (
                                    <div>{errors.barcode_no}</div>
                                )}
                                <FormInput
                                    label="Batch No"
                                    placeholder="Enter Batch"
                                    name="batch-no"
                                    value={data.batch_no}
                                    onChange={(e) =>
                                        setData("batch_no", e.target.value)
                                    }
                                />
                                {errors.batch_no && (
                                    <div>{errors.batch_no}</div>
                                )}
                                <FormInput
                                    label="Available Stock"
                                    placeholder="Enter Available Stock"
                                    name="available-stock"
                                    value={data.available_stock}
                                    onChange={(e) =>
                                        setData(
                                            "available_stock",
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.available_stock && (
                                    <div>{errors.available_stock}</div>
                                )}
                                {/* <FormInput
                                    label="UOM"
                                    placeholder="Enter UOM"
                                    name="uom"
                                    value={data.uom}
                                    onChange={(e) =>
                                        setData("uom", e.target.value)
                                    }
                                />
                                {errors.uom && <div>{errors.uom}</div>} */}
                                <div>
                                    <label
                                        htmlFor="vendor_id"
                                        className="font-semibold text-sm"
                                    >
                                        <p>Vendor</p>
                                    </label>
                                    {/* <select
                                        id="vendor_id"
                                        name="vendor_id"
                                        value={data.vendor_id}
                                        onChange={(e) =>
                                            setData(
                                                "vendor_id",
                                                e.target.selected
                                            )
                                        }
                                        className="w-full rounded-md mt-2"
                                    >
                                        {props.vendor.map((vendor) => (
                                            <option
                                                key={vendor.id}
                                                value={vendor.id}
                                            >
                                                {vendor.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.vendor_id && (
                                        <div>{errors.vendor_id}</div>
                                    )} */}
                                    <Select
                                        name="vendor_id"
                                        options={vendorOptions}
                                        placeholder="Select Vendor..."
                                        value={data.vendor_id}
                                        onChange={(e) =>
                                            setData("vendor_id", e)
                                        }
                                        className="w-auto rounded-xl mt-2"
                                    />
                                    {errors.vendor_id && (
                                        <div>{errors.vendor_id}</div>
                                    )}
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 mr-5 mb-5 flex gap-4">
                                <TextButton
                                    title="Cancel"
                                    bgColor="#ffffff"
                                    href="/inventory"
                                />
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex flex-row gap-2 py-3 px-10 border-[1.5px] border-black rounded-xl h-12 min-w-fit place-items-center bg-[#CCE5E3]"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
