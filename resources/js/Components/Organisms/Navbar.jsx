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

export function Navbar(props) {
    const { url } = usePage();

    return (
        <div className="bg-[#CCE5E3] z-20 fixed h-full w-64 px-7 flex flex-col items-center">
            <Link
                href="/dashboard"
                className="w-52 mt-[54px] mx-6 mb-5 items-center flex"
            >
                <img src={RekapinLogo} alt="Logo Rekapin" />
            </Link>
            <div className="flex flex-col items-center w-auto font">
                <ul>
                    <li
                        className={`${
                            url.startsWith("/inventory")
                                ? "opacity-100"
                                : "opacity-30"
                        }
                            flex flex-row items-center my-6 w-52 rounded-sm`}
                    >
                        <Link
                            href="/inventory"
                            className="text-black ml-[20px] font-semibold flex flex-row items-center gap-5 hover:scale-110 duration-100"
                        >
                            <img src={InventoryIcon} />
                            Inventory
                        </Link>
                    </li>
                    <li
                        className={`${
                            url.startsWith("/customer")
                                ? "opacity-100"
                                : "opacity-30"
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/customer"
                            className="text-black ml-[20px] font-semibold flex flex-row items-center gap-5 motion-safe hover:scale-110 duration-100"
                        >
                            <img src={CustomerIcon} />
                            Customer
                        </Link>
                    </li>
                    <li
                        className={`${
                            url.startsWith("/vendor")
                                ? "opacity-100"
                                : "opacity-30"
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/vendor"
                            className="text-black ml-[20px] font-semibold flex flex-row items-center gap-5 hover:scale-110 duration-100"
                        >
                            <img src={VendorIcon} />
                            Vendor
                        </Link>
                    </li>
                    <li
                        className={`${
                            url.startsWith("/sale")
                                ? "opacity-100"
                                : "opacity-30"
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/sale"
                            className="text-black ml-[20px] font-semibold flex flex-row items-center gap-5 hover:scale-110 duration-100"
                        >
                            <img src={SalesOrderIcon} />
                            Sales Order
                        </Link>
                    </li>
                    <li
                        className={`${
                            url.startsWith("/invoice")
                                ? "opacity-100"
                                : "opacity-30"
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/invoice"
                            className="text-black ml-[20px] font-semibold flex flex-row items-center gap-5 hover:scale-110 duration-100"
                        >
                            <img src={SalesInvoiceIcon} />
                            Sales Invoice
                        </Link>
                    </li>
                    <li
                        className={`${
                            url.startsWith("/purchase")
                                ? "opacity-100"
                                : "opacity-30"
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/purchase"
                            className="text-black ml-[20px] font-semibold flex flex-row items-center gap-5 hover:scale-110 duration-100"
                        >
                            <img src={PurchasingIcon} />
                            Purchasing
                        </Link>
                    </li>
                    <li
                        className={`${
                            url.startsWith("/profile")
                                ? "opacity-100"
                                : "opacity-30"
                        } flex flex-row items-center my-6 w-52`}
                    >
                        <Link
                            href="/profile"
                            className="text-black ml-[20px] font-semibold flex flex-row items-center gap-5 hover:scale-110 duration-100"
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
