import {
    AddButton,
    Navbar,
    PrintButton,
    RefreshButton,
    SeacrhBarMini,
} from "../../Components";

export default function Customer({ auth }) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 flex-col">
                <SeacrhBarMini placeholder="Search for Customer" />
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-semibold">Customer</h1>
                    <div className="flex flex-row gap-5">
                        <RefreshButton />
                        <PrintButton title="Print for Customer" />
                        <AddButton
                            title="Add Customer"
                            href="/customer-create"
                        />
                    </div>
                </div>

                <table className="mt-6">
                    <thead className="bg-[#B7C9C7] text-center ">
                        <tr>
                            <td className="border-[1.5px] border-black py-3 px-2">
                                No
                            </td>
                            <td className="border-[1.5px] border-black">
                                Customer Name
                            </td>
                            <td className="border-[1.5px] border-black">
                                Customer ID
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
                                Martius Lim
                            </td>
                            <td className="border-[1.5px] border-black">
                                Cust000001
                            </td>
                            <td className="border-[1.5px] border-black">
                                0811111111111111
                            </td>
                            <td className="border-[1.5px] border-black">
                                Jalan Gajah Mada RT. 10 RW. 2
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
