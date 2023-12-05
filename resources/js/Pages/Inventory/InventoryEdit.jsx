import { BackHeader, FormInput, Navbar, TextButton } from "../../Components";
import { useForm } from "@inertiajs/react";

export default function InventoryEdit(props) {
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
        vendor_id: props.product.vendor_id || "",
    });

    function submit(e) {
        e.preventDefault();
        post("/product/update");
    }

    return (
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 flex-col h-screen">
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
                            <div className="flex flex-col gap-4 w-1/2 pr-7">
                                <FormInput
                                    label="Product Name"
                                    placeholder="Enter Prouct Name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && <div>{errors.name}</div>}
                                <FormInput
                                    label="Purchase Price"
                                    placeholder="Enter Purchase Price"
                                    name="purchase_price"
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
                                    name="sale_price"
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
                                    name="default_code"
                                    value={data.default_code}
                                    onChange={(e) =>
                                        setData("default_code", e.target.value)
                                    }
                                />
                                {errors.default_code && (
                                    <div>{errors.default_code}</div>
                                )}
                                <FormInput
                                    label="Barcode No"
                                    placeholder="Enter Barcode No"
                                    name="barcode_no"
                                    value={data.barcode_no}
                                    onChange={(e) =>
                                        setData("barcode_no", e.target.value)
                                    }
                                />
                                {errors.barcode_no && (
                                    <div>{errors.barcode_no}</div>
                                )}
                            </div>
                            <div className="flex flex-col gap-4 w-1/2 pr-7">
                                <FormInput
                                    label="Batch No"
                                    placeholder="Enter Batch"
                                    name="batch_no"
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
                                    name="available_stock"
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
                                <FormInput
                                    label="UOM"
                                    placeholder="Enter UOM"
                                    name="uom"
                                    value={data.uom}
                                    onChange={(e) =>
                                        setData("uom", e.target.value)
                                    }
                                />
                                {errors.uom && <div>{errors.uom}</div>}
                                <FormInput
                                    label="Vendor"
                                    placeholder="Enter Vendor"
                                    name="vendor_id"
                                    value={data.vendor_id}
                                    onChange={(e) =>
                                        setData("vendor_id", e.target.value)
                                    }
                                />
                                {errors.vendor_id && (
                                    <div>{errors.vendor_id}</div>
                                )}
                            </div>
                            <div className="absolute bottom-0 right-0 mr-5 mb-5 flex gap-4">
                                <TextButton
                                    title="Cancel"
                                    bgColor="#ffffff"
                                    onClick="back"
                                />
                                <TextButton title="Save" bgColor="#CCE5E3" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
