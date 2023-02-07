
'use client'
import Link from "next/link";
import { useState } from "react";
import { SubmenuDropdown } from "./SubmenuDropdown";

export type MenuItemProps = {
    navItem: any
}

export const MenuItems: React.FC<MenuItemProps> = ({ navItem }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className="menu-items ">
            <span className="">
                {navItem.subMenu.length >= 1 ? (
                    <>
                        <button type="button" aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                            onMouseEnter={() => setDropdown(true)}
                        >
                            <span className="hover:text-blue-600">
                                {navItem.name}
                            </span>
                        </button>
                        <SubmenuDropdown submenus={navItem.subMenu} dropdown={dropdown} setDropdown={setDropdown} />
                    </>
                ) : (
                    <Link href={navItem.url}>
                        <span className="hover:text-blue-600">
                            {navItem.name}
                        </span>
                    </Link>
                )}
            </span>
        </li>
    );
}