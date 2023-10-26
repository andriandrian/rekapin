import { BackHeader, FormInput, Navbar, TextButton } from "../../Components";

export default function InventoryCreate({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 flex-col">
                <div>
                    <div className="w-full">
                        <BackHeader
                            label="Back to Inventory"
                            title="Add a new product"
                            href="/customer"
                        />
                    </div>

                    <div className="mt-5 flex w-full">
                        <form className="flex flex-col md:flex-row md:gap-0 gap-4 justify-between w-full">
                            <div className="flex flex-col gap-4 w-1/2 pr-7">
                                <FormInput
                                    label="Item Name"
                                    placeholder="Promag"
                                    name="item-name"
                                />
                                <FormInput
                                    label="Item ID"
                                    placeholder="Pmg"
                                    name="item-name"
                                />
                                <FormInput
                                    label="Batch Number"
                                    placeholder="PMG0000001"
                                    name="batch-number"
                                />
                                <FormInput
                                    label="Barcode No"
                                    placeholder="12115645415523"
                                    name="item-name"
                                />
                            </div>
                            <div className="flex flex-col w-1/2 gap-4"></div>
                            <div className="absolute bottom-0 right-0 mr-5 mb-5 flex gap-4">
                                <TextButton
                                    title="Cancel"
                                    bgColor="#ffffff"
                                    onClick="back"
                                />
                                <TextButton title="Add" bgColor="#CCE5E3" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
