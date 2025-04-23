import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Link from "next/link";

const HeroBanner = () => {
    return (
        <div className="relative text-white text-[20px] w-full mx-auto homepage-banners">
            <div className="position-relative">
                <video className="kratom-main-video" preload="true" playsInline={true} autoPlay={true} muted={true} loop={true}>
                    <source src="/homepage-video-banner.mp4" type="video/mp4"></source>
                </video>

                <div className="homepage-video-overlay"></div>
            </div>

            <div className="homepage-titles">
                <span className="homepage-title">Вітаємо у нашому магазині</span>
                <span className="homepage-title">Тут ви можете придбати чай по приємним цінам</span>
                <Link href="/category/all-products">
                    <button className="go-catalog-button">
                        <i className="icon-shopping-cart" aria-hidden="true"></i>
                        <span>В каталог</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HeroBanner;
