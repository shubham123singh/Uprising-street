import Slider from "@/component/Slider";
import  CategoryList  from "@/component/categoryList";
import  ProductList  from "@/component/productList";
import { Suspense } from "react";

const Home = async () => {
  // const wixClient = useWixClient();

  // useEffect(() =>{
  //   const getProduct = async() =>{
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res);

  //   };

  //   getProduct();
  // },[wixClient]);

  //  const wixClient = await wixClientServer();
  //  const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        <Suspense fallback = {"loading"}>
          <ProductList categoryId = {process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit = {4} />
        </Suspense>
      </div>

      <div className="mt-24">
        <h1 className="text-2xl font-semibold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12 ">
          Categories
        </h1>
        <Suspense fallback = {"loading"}>
        <CategoryList></CategoryList>
        </Suspense>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-semibold">New Products</h1>
      </div>
    </div>
  );
};

export default Home;
