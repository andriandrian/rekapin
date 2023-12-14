import { BackHeader, FormInput, Navbar, TextButton } from "../../Components";
import { useForm } from "@inertiajs/react";

export default function CustomerEdit(props) {
    const { data, setData, post, processing, errors } = useForm({
        id: props.customer.id,
        name: props.customer.name || "",
        phone: props.customer.phone || "",
        email: props.customer.email || "",
        address: props.customer.address || "",
    });

    function submit(e) {
        e.preventDefault();
        post("/customer/update");
    }

    return (
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 ml-64 flex-col">
                <div>
                    <div className="w-full">
                        <BackHeader
                            label="Back to Customer List"
                            title="Edit Customer Profile"
                            href="/customer"
                        />
                    </div>

                    <div className="mt-5 flex w-full">
                        <form
                            className="flex flex-col md:flex-row md:gap-0 gap-4 justify-between w-full"
                            onSubmit={submit}
                        >
                            <div className="flex flex-col gap-4 w-1/2 pr-7">
                                <FormInput
                                    label="Customer Name"
                                    placeholder="Enter Customer Name"
                                    name="customer-name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && <div>{errors.name}</div>}
                                {/* <FormInput
                                    label="Customer ID"
                                    placeholder="Cust000001"
                                    name="item-name"
                                />
                                <FormInput
                                    label="Customer Store"
                                    placeholder="Grosir Gajah Keseleo"
                                    name="batch-number"
                                /> */}
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
                            </div>
                            <div className="flex flex-col w-1/2 gap-4"></div>
                            <div className="absolute bottom-0 right-0 mr-5 mb-5 flex gap-4">
                                <TextButton
                                    title="Cancel"
                                    bgColor="#ffffff"
                                    href="/customer"
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
