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
    SalesInvoiceIcon,
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
                    <li
                        className={`${url == "/inventory" ? "bg-slate-400" : ""}
                            flex flex-row items-center my-6 w-52 hover:bg-slate-300 py-2 rounded-sm`}
                    >
                        <Link
                            href="/inventory"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={InventoryIcon} />
                            Inventory
                        </Link>
                    </li>
                    <li
                        className={`${
                            url == "/customer" ? "bg-slate-400" : ""
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/customer"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={CustomerIcon} />
                            Customer
                        </Link>
                    </li>
                    <li
                        className={`${
                            url == "/vendor" ? "bg-slate-400" : ""
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/vendor"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={VendorIcon} />
                            Vendor
                        </Link>
                    </li>
                    <li
                        className={`${
                            url == "/sales-order" ? "bg-slate-400" : ""
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/sales-order"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={SalesOrderIcon} />
                            Sales Order
                        </Link>
                    </li>
                    <li
                        className={`${
                            url == "/sales-invoice" ? "bg-slate-400" : ""
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/sales-invoice"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={SalesInvoiceIcon} />
                            Sales Invoice
                        </Link>
                    </li>
                    <li
                        className={`${
                            url == "/purchasing" ? "bg-slate-400" : ""
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/purchasing"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={PurchasingIcon} />
                            Purchasing
                        </Link>
                    </li>
                    <li
                        className={`${
                            url == "/chartofaccounts" ? "bg-slate-400" : ""
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/chartofaccounts"
                            className="text-black ml-[20px] font-bold flex flex-row items-center gap-5"
                        >
                            <img src={ChartOfAccountsIcon} />
                            Chart of Accounts
                        </Link>
                    </li>
                    <li
                        className={`${
                            url == "/settings" ? "bg-slate-400" : ""
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/settings"
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
