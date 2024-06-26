import { Filter } from "@/component/Filter";
import  ProductList  from "@/component/productList";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/** Campaign */}
      <div className=" hidden: bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br />
            Selected Products
          </h1>
          <Button
            variant="destructive"
            className="rounded-2xl text-white w-max py-2 px-4 text-sm"
          >
            Buy Now
          </Button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt="womanimage"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/**Filter */}
      <Filter/>
      {/** Products */}
      <h1 className="mt-12 text-xl font-semibold">T-shirt for you</h1>
      <ProductList categoryId= {process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4}></ProductList>
    </div>
  );
};

export default ListPage;
