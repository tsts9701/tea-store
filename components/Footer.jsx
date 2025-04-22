import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {

    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            <Link href="/">
                                Юридична інформація
                            </Link>
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            <Link href="/allreviews">
                                Відгуки
                            </Link>
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                Допомога
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href="/">
                                    Методи оплати
                                </Link>
                            </div>
                            <Link href="/">
                                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                    Зв'язок з нами
                                </div>
                            </Link>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href="/">
                                    Доставка
                                </Link>
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <a href="/category/green-kratom">
                                    Green tea
                                </a>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <a href="/category/white-kratom">
                                    White tea
                                </a>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <a href="/category/javanica-mitragyna">
                                    Javanica Mitragyna
                                </a>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <a href="/about">
                                    Про нас
                                </a>
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                   {/* <div
                        onClick={() =>
                            window.open("https://facebook.com", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaFacebookF size={20} />
                    </div>
                    <Link
                        href="https://twitter.com"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaTwitter size={20} />
                    </Link>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div> */}
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2025 All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        <Link href="/">
                            Публічна оферта
                        </Link>
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        <Link href="/">
                            Політика конфіденційності
                        </Link>
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;
