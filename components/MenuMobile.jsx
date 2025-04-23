import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Logout from "./Logout";
import { useRouter } from "next/router";
import { mobileNavigation, subCategories, mensSummerProductsCount, womensSummerProductsCount, mensWinterProductsCount, womensWinterProductsCount } from "@/utils/variables";


const MenuMobile = ({ showMenCatMenu, showWomenCatMenu, mensCatClassName, womensCatClassName, setMensCatClassName, setWomensCatClassName, setShowMenCatMenu, setShowWomenCatMenu, setMobileMenu, isLoggedIn }) => {
  const router = useRouter();

  return (
    <ul className="flex flex-col md:hidden font-bold absolute menu-mobile left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black overflow-y-auto">
    {mobileNavigation.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <li className="py-4 px-8 border-t flex justify-between">
                <Link href={item.category ? ("/category/" + item?.url) : item.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
