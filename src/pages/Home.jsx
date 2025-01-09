import { useDispatch, useSelector } from "react-redux";
import { Categories, Data } from "../assets/Data";
import Cart from "../assets/images/Cart.webp";
import CategorySection from "../components/CategorySection";
import InforSection from "../components/InforSection";
import { setProducts } from "../redux/productSlice";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(Data));
  }, [dispatch]);

  return (
    <div className="mt-32"> 
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/12">
            <div className="bg-black text-white text-lg font-bold px-2 py-2.5">Categories</div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {Categories.map((category, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>{category}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={Cart} alt="Shopping cart visual" className="h-full w-full" />
            <div className="absolute top-16 left-8">
              <h2 className="text-3xl font-bold mb-4">Welcome to ShopNow!</h2>
              <p className="text-gray-600 mb-4">Shop all Your Favorites at ShopNow</p>
              <button className="bg-black hover:bg-gray-800 px-8 py-1.5 text-white mt-4 transform transition-transform duration-300 hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <InforSection />
        <CategorySection />

        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 mt-16 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {products.products.slice(0, 6).map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      
      </div>
      <Shop />
    </div>   
  );
};

export default Home;
