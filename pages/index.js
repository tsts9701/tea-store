import BrandsSuggestions from "@/components/BrandsSuggestions";
import GenderBannersSuggestions from "@/components/GenderBannersSuggestions"
import HeroBanner from "@/components/HeroBanner";
import HomepageReviews from "@/components/HomepageReviews";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { recommendationProducts, allSiteProducts } from "@/utils/variables";
import reviews from "@/utils/reviews.json";
import Carousel from "react-multi-carousel";
import AboutUsBoxes from "@/components/AboutUsBoxes";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

export default function Home({ products }) {

    return (
        <main className="mt-10">
            <HeroBanner />
            <Wrapper>
                <AboutUsBoxes />

                {/* heading and paragaph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]" id="productsRecommendations">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Бестселери
                    </div>
                    <div className="text-md md:text-xl">
                        
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="homepage-slider-wrapper">
                    <Carousel 
                        responsive={responsive}
                        arrows
                        autoPlaySpeed={2000}
                        containerclassName="container"
                        infinite
                        pauseOnHover
                        draggable={false}
                        emulateTouch={true}
                        autoPlay={true}
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        rewind={false}
                        rewindWithAni
                    >
                        {products?.map((product, index) => (
                            <ProductCard key={index} data={product} />
                        ))}
                    </Carousel>
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
                {/* products grid end */}

            </Wrapper>

            <HomepageReviews reviews={reviews} />

        </main>
    );
}

export async function getStaticProps() {
    const products = [...recommendationProducts]

    return {
        props: { products }
    };
}
