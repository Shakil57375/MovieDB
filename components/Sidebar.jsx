import React from "react";
import trending from "../public/icons/trending.svg";
import newRelease from "../public/icons/newRelease.svg";
import commingSoon from "../public/icons/commingSoon.svg";
import favourite from "../public/icons/favourite.svg";
import Image from "next/image";
import watchLater from "../public/icons/watchLater.svg";
const Sidebar = ({ dictionary }) => {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                        href="#"
                    >
                        <Image
                            src={trending}
                            width={24}
                            height={24}
                            alt="trending"
                        />
                        <span>{dictionary.trending}</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image
                            src={newRelease}
                            width={24}
                            height={24}
                            alt="newRelease"
                        />
                        <span>{dictionary.newRelease}</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image
                            src={commingSoon}
                            width={24}
                            height={24}
                            alt="commingSoon"
                        />
                        <span>{dictionary.comingSoon}</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image
                            src={favourite}
                            width={24}
                            height={24}
                            alt="favourite"
                        />
                        <span>{dictionary.favourites}</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image
                            src={watchLater}
                            width={24}
                            height={24}
                            alt="watchLater"
                        />
                        <span>{dictionary.watchLater}</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
