import { FormInput, Navbar } from "../Components";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "@/Pages/Partials/DeleteUserForm";
import UpdatePasswordForm from "@/Pages/Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "@/Pages/Partials/UpdateProfileInformationForm";

export default function Settings({ auth, mustVerifyEmail, status }) {
    console;
    return (
        <div className="flex flex-row h-screen w-full ">
            <Head title="Settings" />
            <Navbar />
            {/* <div className="flex flex-1 px-5 pt-14 flex-col">
                <h1 className="font-semibold text-3xl">Settings</h1>
                <form className="flex w-1/2 mt-6">
                    <FormInput
                        label="Company Name"
                        placeholder="PT. Omega Sukses Abadi"
                    />
                </form>
            </div> */}
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Profile
                    </h2>
                }
            >
                <Head title="Profile" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}
