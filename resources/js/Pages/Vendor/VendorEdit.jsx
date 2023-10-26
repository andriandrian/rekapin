import { BackHeader, FormInput, Navbar, TextButton } from "../../Components";

export default function VendorEdit({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 flex-col">
                <div>
                    <div className="w-full">
                        <BackHeader
                            label="Back to Vendor List"
                            title="Add a new Vendor"
                            href="/vendor"
                        />
                    </div>

                    <div className="mt-5 flex w-full">
                        <form className="flex flex-col md:flex-row md:gap-0 gap-4 justify-between w-full">
                            <div className="flex flex-col gap-4 w-1/2 pr-7">
                                <FormInput
                                    label="Vendor Name"
                                    placeholder="PT. Tempo Scan Group"
                                    name="item-name"
                                />
                                <FormInput
                                    label="Vendor ID"
                                    placeholder="Tempo"
                                    name="item-name"
                                />
                                <FormInput
                                    label="Vendor Phone Number"
                                    placeholder="(62-21) 2921-8888"
                                    name="batch-number"
                                />
                                <FormInput
                                    label="Website"
                                    placeholder="https://www.temposcangroup.com/id"
                                    name="item-name"
                                />
                                <FormInput
                                    label="Email"
                                    placeholder="corporate.secretary@thetempogroup.com"
                                    name="item-name"
                                />
                                <FormInput
                                    label="Warehouse"
                                    placeholder="Jl. Gajah Sembuh, Komplek Gajah Residence Blok G No. 11, Batam, Kepulauan Riau, Indonesia"
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
                                <TextButton title="Save" bgColor="#CCE5E3" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
             
        </div>
    );
}
