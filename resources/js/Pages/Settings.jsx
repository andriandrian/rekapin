import { FormInput, Navbar } from "../Components";
import { Head } from "@inertiajs/react";

export default function Settings({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Head title="Settings" />
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 flex-col">
                <h1 className="font-semibold text-3xl">Settings</h1>
                <form className="flex w-1/2 mt-6">
                    <FormInput
                        label="Company Name"
                        placeholder="PT. Omega Sukses Abadi"
                    />
                </form>
            </div>
        </div>
    );
}
