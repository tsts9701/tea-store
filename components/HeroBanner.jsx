import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

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
                <button className="go-catalog-button">
                    <i className="icon-shopping-cart" aria-hidden="true"></i>
                    <span>В каталог</span></button>
            </div>
        </div>
    );
};

export default HeroBanner;
