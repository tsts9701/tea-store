import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import AboutOrderOnPDP from "@/components/AboutOrderOnPDP";
import { fetchDataFromApi } from "@/utils/api";
import { allSiteProducts } from "@/utils/variables";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCart } from "@/store/cartSlice";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductSizesGrids from "@/components/ProductSizesGrids";
import { redirect } from "next/dist/server/api-utils";
import PDPAccordion from "@/components/PDPAccordion";
import { compose } from "@reduxjs/toolkit";

const ProductDetails = ({ p }) => {
  const [ selectedWeight, setSelectedWeight ] = useState(100);
  const [ productImages, setProductImages ] = useState([]);
  const [ openedSizesGrids, setOpenedSizesGrids ] = useState(false);
  const [ sizeGrids, setSizeGrids ] = useState(null);
  const [ showError, setShowError ] = useState(false);
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ seasonsString, setSeasonsString ] = useState("");
  const [ product, setProduct ] = useState(null);
  const [ apexMaterials, setApexMaterials ] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [ isFavorited, setIsFavorited ] = useState(false);
  var gramsForOrderArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  useEffect(() => {
    if (p && p.images) {
      setProduct(p);
      setTotalPrice(p.pricePer100g);
      setProductImages(() => {
        let array = [];

        for (let i = 0; i < p.images.length; i++) {
          array.push({
            url: p.images[i],
            key: i,
            src: "Product image " + i
          });
        }

        return array;
      });
    }
  }, [p]);

  const notify = () => {
    toast.success("Товар успішно додавно в корзину", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const addToWishlist = async (productName) => {
    let wishlistData = localStorage.getItem("wishlistData");

    if (wishlistData && wishlistData.length) {
      if (wishlistData.indexOf(productName) !== -1) {
        toast.warn("Товар вже у списку бажань", toastOptions);
        return;
      }

      wishlistData = wishlistData.split("|");

      wishlistData.push(productName)

      localStorage.setItem("wishlistData", wishlistData.join("|"));
    } else {
      localStorage.setItem("wishlistData", productName);
    }

    toast.success("Товар успішно доданий у список бажань", toastOptions);
    setIsFavorited(true);
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  return (
      <div>
        <div className="w-full md:py-20">
          <ToastContainer />
          <Wrapper>
            <div className="flex flex-col lg:flex-row mt-10 md:px-10 gap-[20px] lg:gap-[100px]">
              {/* left column start */}
              <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailsCarousel images={productImages} />
              </div>
              {/* left column end */}

              {/* right column start */}
              <div className="flex-[1] py-3">
                {/* PRODUCT TITLE */}
                <h2 className="text-[34px] font-semibold mb-2 leading-tight">
                  {product?.name}
                </h2>

                <div className="text-md font-medium text-black/[0.5]">
                  Артикул: {product?.name.toLowerCase().split(" ").join("-")}
                </div>

                {/* PRODUCT PRICE */}
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold">{p?.salePrice && p?.salePrice > 0 ? p.salePrice : totalPrice} грн</p>
                  {product?.price && p?.salePrice > 0 && (
                    <>
                      <p className="text-base font-medium line-through">
                        {p?.salePrice && p.price > p.salePrice ? (product.pricePer100g) : ""}
                      </p>
                      {p?.salePrice && p.price > p.salePrice && (
                        <p className="ml-auto text-base font-medium discount-percents-text">
                        -{getDiscountedPricePercentage(product.price, product.salePrice)}%
                        </p>
                      )}
                    </>
                  )}
                </div>

                <div className="mb-10"></div>

                {/* PRODUCT SIZE RANGE START */}
                <div className="mb-10">
                  {/* HEADING START */}
                  <div className="flex justify-between mb-2">
                    <div className="text-md font-semibold">Кількість грам</div>
                  </div>
                  {/* HEADING END */}

                  {/* SIZE START */}
                  <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                    {
                      gramsForOrderArray.map((weight, index) => (
                        <div 
                          key={index} 
                          className={`${selectedWeight === weight ? 'border-black' : ''} border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                          onClick={() => {
                            setSelectedWeight(weight);
                            setShowError(false);

                            if (p && p.pricePer100g) {
                              setTotalPrice((index + 1) * p.pricePer100g)
                            }
                          }}>
                          {weight >= 1000 ? (weight / 1000) + "кг" : weight + "г"}
                        </div>
                      ))
                    }
                  </div>
                  {/* SIZE END */}

                  {/* SHOW ERROR START */}
                  {showError && (
                    <div className="text-red-600 mt-1">
                      Size selection is required
                    </div>
                  )}
                  {/* SHOW ERROR END */}
                </div>

                {/* PRODUCT SIZE RANGE END */}

                {/* ADD TO CART BUTTON START */}
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                  onClick={() => {
                    if (!selectedWeight) {
                      setShowError(true);
                      document.getElementById("sizesGrid").scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      });
                    } else {
                      dispatch(getCart());
                      dispatch(
                        addToCart({
                          product,
                          selectedWeight,
                          pricePer100g: p.pricePer100g,
                        })
                      );
                      notify();
                    }
                  }}
                >
                  Додати у кошик
                </button>
                {/* ADD TO CART BUTTON END */}

                {/* WISHLIST BUTTON START */}
                <button
                    className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
                    onClick={() => addToWishlist(product.name)}
                >
                    {currentUser ? 'Favorite' : 'Додати у список бажань'}
                    {isFavorited ? (
                        <IoMdHeart size={20} />
                    ) : (
                        <IoMdHeartEmpty size={20} />
                    )}
                </button>


                {/* WISHLIST BUTTON END */}

                <div>
                  <div className="text-lg font-bold mb-5">Опис</div>
                  <div className="markdown text-md text-justify mb-5">
                    <ReactMarkdown>{product?.description}</ReactMarkdown>
                  </div>
                </div>

                <>
                  <PDPAccordion />
                </>
              </div>
              {/* right column end */}
            </div>

            {/*<RelatedProducts products={products} />*/}
          </Wrapper>
        </div>

        <div>
          <AboutOrderOnPDP />
        </div>

        <div>
          <ProductSizesGrids sizesGrids={sizeGrids} productName={p?.name ? p.name : null} openedSizesGrids={openedSizesGrids} setOpenedSizesGrids={setOpenedSizesGrids} />
        </div>

      </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {

  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  let product;

  for (let prd of allSiteProducts) {
    if ((prd.name + "") === slug.split("-").join(" ")) {
      product = prd;
    }
  }

  return {
    props: {
      p: product,
      hi: 555
    },
  };
}
