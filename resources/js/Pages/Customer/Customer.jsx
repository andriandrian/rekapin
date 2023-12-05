import {
    AddButton,
    Navbar,
    PrintButton,
    RefreshButton,
    SeacrhBarMini,
} from "../../Components";
import { Link, Head } from "@inertiajs/react";

export default function Customer(props) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Head title="Customer" />
            <Navbar />
            <div className="flex flex-1 px-5 pt-14 flex-col">
                <SeacrhBarMini placeholder="Search for Customer" />
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-semibold">Customer</h1>
                    <div className="flex flex-row gap-5">
                        <RefreshButton />
                        {/* <PrintButton title="Print for Customer" /> */}
                        <AddButton
                            title="Add Customer"
                            href="/customer/create"
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
                            <td className="border-[1.5px] border-black">
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {props.customer ? (
                            props.customer.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="border-[1.5px] border-black py-3 px-2">
                                            {i + 1}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.name}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.name}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.phone}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            {data.address}
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            <div className="flex flex-row gap-2 justify-center">
                                                <Link
                                                    href={route(
                                                        "customer.edit"
                                                    )}
                                                    data={{ id: data.id }}
                                                    method="get"
                                                    as="button"
                                                >
                                                    Edit
                                                </Link>

                                                <Link
                                                    href={route(
                                                        "customer.destroy"
                                                    )}
                                                    data={{ id: data.id }}
                                                    method="delete"
                                                    as="button"
                                                    onClick={() => {
                                                        if (
                                                            window.confirm(
                                                                "Are you sure you want to delete this customer?"
                                                            )
                                                        ) {
                                                            // Delete the customer
                                                        }
                                                    }}
                                                >
                                                    Delete
                                                </Link>
                                                {/* <a
                                                    href={`/customer-edit/${data.id}`}
                                                >
                                                    <button className="bg-[#B7C9C7] w-8 h-8 rounded-full">
                                                        <img
                                                            src="/assets/edit.png"
                                                            alt="edit"
                                                        />
                                                    </button>
                                                </a>
                                                <button className="bg-[#B7C9C7] w-8 h-8 rounded-full">
                                                    <img
                                                        src="/assets/delete.png"
                                                        alt="delete"
                                                    />
                                                </button> */}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="border-[1.5px] border-black py-3 px-2 text-center"
                                >
                                    No Data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
