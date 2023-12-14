import { Link } from "@inertiajs/react";

export function Paginator({ meta }) {
    const prev = meta.prev_page_url;
    const next = meta.next_page_url;
    const current = meta.current_page;

    return (
        <div className="flex flex-row">
            <Link
                href={prev || "#"}
                className={`border-[2px] border-gray-300 rounded-l-md p-2 ${
                    !prev && "opacity-50 cursor-not-allowed"
                }`}
            >
                <p>Prev</p>
            </Link>

            <div className="py-2 px-3 bg-[#505857] text-white">{current}</div>
            <Link
                href={next || "#"}
                className={`border-[2px] border-gray-300 rounded-r-md p-2 ${
                    !next && "opacity-50 cursor-not-allowed"
                }`}
            >
                Next
            </Link>
        </div>
    );
}
