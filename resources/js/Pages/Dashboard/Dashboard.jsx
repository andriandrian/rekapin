import {
    CustomerDashboard,
    InventoryDashboard,
    SalesOrderDashboard,
    VendorDashboard,
} from "@/Assets";
import { Navbar, SeacrhBarMini } from "../../Components";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <div className="flex flex-row h-screen w-full ">
            <Head title="Dashboard" />
            <Navbar />
            <div className="flex flex-1 ml-64 px-5 pt-6 flex-col">
                {/* <SeacrhBarMini placeholder="Search for any item" /> */}
                <div className="mt-9 flex flex-row justify-between">
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
                </div>

                <div className="mt-10">
                    {/* <h1 className="">Total Profit :</h1>
                    <p>{props.totalProfits}</p> */}
                    <div className="grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-2">
                        <div className="flex flex-col bg-[#dcfde7] w-full rounded-xl p-3">
                            <div className="w-10 p-1">
                                <img src={InventoryDashboard} />
                            </div>
                            <p className="text-lg text-slate-400 mt-2">
                                Total Product
                            </p>
                            <p className="text-2xl font-bold">
                                {props.totalProducts}
                            </p>
                        </div>

                        <div className="flex flex-col bg-[#cceffe] w-full rounded-xl p-3">
                            <div className="w-10 p-1">
                                <img src={CustomerDashboard} />
                            </div>
                            <p className="text-lg text-slate-400 mt-2">
                                Total Customer
                            </p>
                            <p className="text-2xl font-bold">
                                {props.totalCustomers}
                            </p>
                        </div>

                        <div className="flex flex-col bg-[#feddf3] w-full rounded-xl p-3">
                            <div className="w-10 p-1">
                                <img src={VendorDashboard} />
                            </div>
                            <p className="text-lg text-slate-400 mt-2">
                                Total Vendor
                            </p>
                            <p className="text-2xl font-bold">
                                {props.totalVendors}
                            </p>
                        </div>

                        <div className="flex flex-col bg-[#f9e2dd] w-full rounded-xl p-3">
                            <div className="w-10 p-1">
                                <img src={SalesOrderDashboard} />
                            </div>
                            <p className="text-lg text-slate-400 mt-2">
                                Total Sales
                            </p>
                            <p className="text-2xl font-bold">
                                {props.totalSales}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row w-full mt-5">
                        <div className="w-1/2 pr-3">
                            <p className="text-xl font-semibold mb-2">
                                Top Products
                            </p>
                            <table className="w-full">
                                <thead className="bg-[#B7C9C7] text-center font-semibold">
                                    <tr>
                                        <td className="border-[1.5px] border-black py-3 px-2">
                                            No
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            Product Name
                                        </td>
                                        <td className="border-[1.5px] border-black px-2">
                                            Sold
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {props.topProductSold &&
                                    props.topProductSold.length > 0 ? (
                                        props.topProductSold.map(
                                            (product, i) => (
                                                <tr key={i}>
                                                    <td className="border-[1.5px] border-black py-3 px-2 w-8">
                                                        {i + 1}
                                                    </td>
                                                    <td className="border-[1.5px] border-black text-left px-1 w-full">
                                                        <p className="line-clamp-1">
                                                            {product.name}
                                                        </p>
                                                    </td>
                                                    <td className="border-[1.5px] border-black">
                                                        {
                                                            product.totalProductSold
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        )
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="3"
                                                className="border-[1.5px] border-black py-3 px-2"
                                            >
                                                No Data
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="w-1/2">
                            <p className="text-xl font-semibold mb-2">
                                Recent Activity
                            </p>
                            <table className="w-full">
                                <thead className="bg-[#B7C9C7] text-center font-semibold">
                                    <tr>
                                        <td className="border-[1.5px] border-black py-3 px-2">
                                            No
                                        </td>
                                        <td className="border-[1.5px] border-black w-2/6">
                                            Date & Time
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            Activity
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {props.recentActivity &&
                                    props.recentActivity.length > 0 ? (
                                        props.recentActivity.map(
                                            (activity, i) => (
                                                <tr key={i}>
                                                    <td className="border-[1.5px] border-black py-3 px-2 w-8">
                                                        {i + 1}
                                                    </td>
                                                    <td className="border-[1.5px] border-black">
                                                        {activity.date}
                                                    </td>
                                                    <td className="border-[1.5px] border-black w-full">
                                                        {activity.name}
                                                    </td>
                                                </tr>
                                            )
                                        )
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="3"
                                                className="border-[1.5px] border-black py-3 px-2"
                                            >
                                                No Data
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            <p className="text-xl font-semibold mb-2 mt-[10px]">
                                Top Customers
                            </p>
                            <table className="w-full">
                                <thead className="bg-[#B7C9C7] text-center font-semibold">
                                    <tr>
                                        <td className="border-[1.5px] border-black py-3 px-2">
                                            No
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            Customer Name
                                        </td>
                                        <td className="border-[1.5px] border-black">
                                            Total Spent
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {props.topCustomer &&
                                    props.topCustomer.length > 0 ? (
                                        props.topCustomer.map((customer, i) => (
                                            <tr key={i}>
                                                <td className="border-[1.5px] border-black py-3 px-2 w-8">
                                                    {i + 1}
                                                </td>
                                                <td className="border-[1.5px] border-black w-4/5">
                                                    {customer.name}
                                                </td>
                                                <td className="border-[1.5px] border-black w-full px-2">
                                                    <span className="flex justify-between">
                                                        <p>Rp </p>
                                                        <p className="line-clamp1">
                                                            {Number(
                                                                customer.sales
                                                            ).toLocaleString()}
                                                        </p>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="3"
                                                className="border-[1.5px] border-black py-3 px-2"
                                            >
                                                No Data
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
