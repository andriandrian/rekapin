import { Navbar } from "../Components";
import { Head } from "@inertiajs/react";

export default function Vendor({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 flex-col">
                <input
                    placeholder="Search for Vendor"
                    className="w-full border-[1.5px] border-black p-4 rounded-xl"
                ></input>
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-bold">Vendor List</h1>
                    <div className="flex flex-row gap-5">
                        <div className="bg-[#E4F2F0] py-3 px-6 border-[1.5px] border-black rounded-xl">
                            Refresh
                        </div>
                        <div className="bg-[#CCE5E3] py-3 px-6 border-[1.5px] border-black rounded-xl">
                            Print Vendor List
                        </div>
                        <div className="bg-[#B7C9C7] py-3 px-6 border-[1.5px] border-black rounded-xl">
                            Add Product
                        </div>
                    </div>
                </div>

                <table className="mt-6">
                    <thead className="bg-[#B7C9C7] text-center">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                No
                            </td>
                            <td className="border-[1.5px] border-black">
                                Vendor Name
                            </td>
                            <td className="border-[1.5px] border-black">
                                Vendor ID
                            </td>
                            <td className="border-[1.5px] border-black">
                                Phone Number
                            </td>
                            <td className="border-[1.5px] border-black">
                                Address
                            </td>
                            <td className="border-[1.5px] border-black"></td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                1
                            </td>
                            <td className="border-[1.5px] border-black">
                                PT. Kalbe Farma
                            </td>
                            <td className="border-[1.5px] border-black">
                                Vend0001
                            </td>
                            <td className="border-[1.5px] border-black">
                                0778 7665523
                            </td>
                            <td className="border-[1.5px] border-black">
                                Tempor do et aliqua culpa sunt eiusmod elit.
                            </td>
                            <td className="border-[1.5px] border-black px-3">
                                :
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
