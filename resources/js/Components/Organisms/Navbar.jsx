import React from "react";
import {
    RekapinLogo,
    InventoryIcon,
    CustomerIcon,
    VendorIcon,
    SalesOrderIcon,
    PurchasingIcon,
    ChartOfAccountsIcon,
    SettingsIcon,
} from "../../Assets";
import { Link, usePage } from "@inertiajs/react";

export function Navbar() {
    const { url } = usePage();

    return (
        <div className="bg-[#CCE5E3] fixed h-full w-64">
            <img
                src={RekapinLogo}
                alt="Logo Rekapin"
                className="w-auto mt-[53px] mx-6 mb-5"
            />
            <div className="flex flex-col items-center w-[100%]">
                <ul>
                    <li className="flex flex-row items-center my-6 w-52 hover:bg-slate-300">
                        <Link
                            href="/dashboard"
                            className={`${
                                url == "/test"
                                    ? "text-slate-400"
                                    : "text-slate-400"
                            }text-black ml-[20px] font-bold flex flex-row items-center gap-5`}
                        >
                            <img src={InventoryIcon} />
                            Inventory
                        </Link>
                    </li>
                    <li className="flex flex-row items-center my-6 w-52">
                        <Link
                            to="/customer"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={CustomerIcon} />
                            Customer
                        </Link>
                    </li>
                    <li className="flex flex-row items-center my-6">
                        <Link
                            to="/vendor"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={VendorIcon} />
                            Vendor
                        </Link>
                    </li>
                    <li className="flex flex-row items-center my-6">
                        <Link
                            to="/customer"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={SalesOrderIcon} />
                            Sales Order
                        </Link>
                    </li>
                    <li className="flex flex-row items-center my-6">
                        <Link
                            to="/customer"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={CustomerIcon} />
                            Sales Invoice
                        </Link>
                    </li>
                    <li className="flex flex-row items-center my-6">
                        <Link
                            to="/customer"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={PurchasingIcon} />
                            Purchasing
                        </Link>
                    </li>
                    <li className="flex flex-row items-center my-6">
                        <Link
                            to="/customer"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={ChartOfAccountsIcon} />
                            Chart of Accounts
                        </Link>
                    </li>
                    <li className="flex flex-row items-center my-6">
                        <Link
                            to="/customer"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={SettingsIcon} />
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
