import { BackHeader, FormInput, Navbar, TextButton } from "../../Components";
import { Head, useForm } from "@inertiajs/react";

export default function VendorEdit(props) {
    const { data, setData, post, processing, errors } = useForm({
        id: props.vendor.id,
        name: props.vendor.name || "",
        phone: props.vendor.phone || "",
        email: props.vendor.email || "",
        address: props.vendor.address || "",
    });

    function submit(e) {
        e.preventDefault();
        post("/vendor/update");
    }

    return (
        <div className="flex flex-row h-screen w-full">
            <Head title="Edit Vendor Profile" />
            <Navbar />
            <div className="flex flex-1 px-5 ml-64 pt-14 flex-col">
                <div>
                    <div className="w-full">
                        <BackHeader
                            label="Back to Vendor List"
                            title="Edit Vendor Profile"
                            href="/vendor"
                        />
                    </div>

                    <div className="mt-5 flex w-full">
                        <form
                            className="flex flex-col md:flex-row md:gap-0 gap-4 justify-between w-full"
                            onSubmit={submit}
                        >
                            <div className="flex flex-col gap-4 w-full pr-7">
                                <FormInput
                                    label="Vendor Name"
                                    placeholder="Enter Vendor Name"
                                    name="vendor-name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && <div>{errors.name}</div>}
                                <FormInput
                                    label="Phone Number"
                                    placeholder="Enter Phone Number"
                                    name="phone"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                />
                                {errors.phone && <div>{errors.phone}</div>}
                                <FormInput
                                    label="Email"
                                    placeholder="Enter Email Address"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && <div>{errors.email}</div>}
                                <FormInput
                                    label="Address"
                                    placeholder="Enter Address"
                                    name="address"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                />
                                {errors.address && <div>{errors.address}</div>}
                                <div className="absolute bottom-0 right-0 mr-5 mb-5 flex gap-4">
                                    <TextButton
                                        title="Cancel"
                                        bgColor="#ffffff"
                                        onClick={() => {
                                            window.location.href = "/vendor";
                                        }}
                                    />
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex flex-row gap-2 py-3 px-10 border-[1.5px] border-black rounded-xl h-12 min-w-fit place-items-center bg-[#CCE5E3]"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-4"></div>
                            {/* <div className="absolute bottom-0 right-0 mr-5 mb-5 flex gap-4">
                                <TextButton
                                    title="Cancel"
                                    bgColor="#ffffff"
                                    onClick={() => {
                                        window.location.href = "/vendor";
                                    }}
                                />
                                <TextButton title="Save" bgColor="#CCE5E3" />
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
             
        </div>
    );
}
