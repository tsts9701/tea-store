import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { desktopNavigation, subCategories, mensSummerProductsCount, womensSummerProductsCount, mensWinterProductsCount, womensWinterProductsCount } from "@/utils/variables";

const Menu = ({ mensCatClassName, womensCatClassName, setMensCatClassName, setWomensCatClassName, setShowMenCatMenu, setShowWomenCatMenu }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black text-nowrap pr-2">
            {desktopNavigation.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <li className="cursor-pointer">
                            <a href={item.category ? ("/category/" + item?.url) : item?.url}> {item.name} </a>
                        </li>
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default Menu;
