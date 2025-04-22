import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import { allSiteProducts } from "@/utils/variables";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favorites = ({ displayCount, setWishlistItemsCount }) => {
  const currentUser = useSelector((state) => state.auth.user);
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add this line
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    setIsLoading(true); // Start loading
  
    try {
      let wishlistProducts = localStorage.getItem("wishlistData");
  
      if (wishlistProducts && wishlistProducts.length) {
        var wishListProductsData = [];
        wishlistProducts = wishlistProducts.split("|");

        wishlistProducts.forEach((elName) => {
          for (let i = 0; i < allSiteProducts.length; i++) {
            if (elName === allSiteProducts[i].name) {
              wishListProductsData.push(allSiteProducts[i]);
            }
          }
        });

        setFavorites(wishListProductsData);
        setProducts(wishListProductsData);
      }
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }

    setIsLoading(false); // End loading
  };


  const removeFavorite = async (itemName) => {
    try {
      let wishlistData = localStorage.getItem("wishlistData");

      if (wishlistData && wishlistData.length) {
        wishlistData = wishlistData.split("|");

        wishlistData.splice(wishlistData.indexOf(itemName), 1);

        localStorage.setItem("wishlistData", wishlistData.join("|"));

        // remove the product from local state as well
        window.location.reload();

        // Show a success toast
        toast.success("Товар успішно видалено", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error removing favorite:", error);
      // Show an error toast
      toast.error("Помилка при видаленні товару", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

   return (
    <div>
    <ToastContainer />
    {isLoading ? (
      <div>Завантаження...</div> // Display a loading indicator
    ) : favorites.length === 0 ? (
      <div className="text-center py-8">
        <h5 className="text-lg">Список бажань пустий</h5>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard
           key={index}
           data={product}
           onRemoveFavorite={() => removeFavorite(product.name)}
           isFavorite={true}
          />
        ))}
      </div>
    )}
  </div>
);
};

Favorites.defaultProps = {
displayCount: Infinity,
};

export default Favorites;
