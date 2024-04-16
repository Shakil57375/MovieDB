import React from "react";
import logo from "../public/logo.svg";
import ring from "../public/ring.svg";
import sun from "../public/icons/sun.svg";
import shoppingCart from "../public/shopping-cart.svg";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
    return (
        <div>
            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={139} height={26} />
                    </Link>
                    <ul className="flex items-center space-x-5">
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="#"
                            >
                                <Image
                                    src={ring}
                                    width={24}
                                    height={24}
                                    alt="ring"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="#"
                            >
                                <Image
                                    src={sun}
                                    width={24}
                                    height={24}
                                    alt="sun"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="#"
                            >
                                <Image
                                    src={shoppingCart}
                                    width={24}
                                    alt="shopping cart"
                                    height={24}
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
