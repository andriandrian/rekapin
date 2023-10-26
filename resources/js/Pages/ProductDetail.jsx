import { BackIcon } from "../Assets";
import { BackHeader, Navbar } from "../Components";

export default function ProductDetail({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div className="mt-14 flex-1 px-5">
                <div>
                    <div className="flex flex-row">
                        <BackHeader
                            label="Back to Inventory"
                            title="Edit Product Detail"
                            href="/inventory"
                        />
                    </div>

                    <div className="mt-5 flex w-full">
                        <form className="flex flex-col md:flex-row md:gap-0 gap-4 justify-between w-full">
                            <div className="flex flex-col gap-4 w-1/2 pr-7">
                                <div className="flex flex-col">
                                    <label
                                        for="item-detail"
                                        className="text-sm"
                                    >
                                        Item Name
                                    </label>
                                    <input
                                        name="item-detail"
                                        placeholder="Promag"
                                        className="w-full"
                                    ></input>
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        for="item-detail"
                                        className="text-sm"
                                    >
                                        Item ID
                                    </label>
                                    <input
                                        name="item-detail"
                                        placeholder="Promag"
                                        className="w-full"
                                    ></input>
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        for="item-detail"
                                        className="text-sm"
                                    >
                                        Batch Number
                                    </label>
                                    <input
                                        name="item-detail"
                                        placeholder="Promag"
                                        className="w-full"
                                    ></input>
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        for="item-detail"
                                        className="text-sm"
                                    >
                                        Barcode No
                                    </label>
                                    <input
                                        name="item-detail"
                                        placeholder="Promag"
                                        className="w-full"
                                    ></input>
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        for="item-detail"
                                        className="text-sm"
                                    >
                                        Item Category
                                    </label>
                                    <input
                                        name="item-detail"
                                        placeholder="Promag"
                                        className="w-full"
                                    ></input>
                                </div>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-col gap-3">
                                    <p>Unit of Measurement</p>
                                    <div>
                                        <div className="border-[1.5px] border-black w-16 text-center py-1">
                                            <p>Pcs</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <div className="border-[1.5px] border-black w-16 text-center py-1">
                                            <p>Box</p>
                                        </div>
                                        <p>=</p>
                                        <input
                                            name=""
                                            className="border-[1.5px] border-black w-16 text-center py-1"
                                        ></input>
                                        <p>Pcs</p>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <div className="border-[1.5px] border-black w-16 text-center py-1">
                                            <p>Cth</p>
                                        </div>
                                        <p>=</p>
                                        <input
                                            name=""
                                            className="border-[1.5px] border-black w-16 text-center py-1"
                                        ></input>
                                        <p>Pcs</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
