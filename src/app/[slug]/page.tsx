import { AddProduct } from "@/component/Add";
import { ProductImages } from "@/component/ProductImages";
import { CustomizeProducts } from "@/component/customizeProducts";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/**Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/**Texts */}
      <div className="w-full lg:w-1/2 flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          incidunt corrupti aliquam temporibus sint minima inventore. Accusamus
          nisi, tempore aliquid dolorem suscipit eum atque consequatur
          reprehenderit soluta explicabo temporibus non?
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flec items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$599</h3>
          <h3 className="font-medium text-2xl">$499</h3>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts />
        <AddProduct />
        <div className="h-[2px] bg-gray-100">
          <div className="text-sm">
            <h4 className="font-medium mb-4">Tittle</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sed exercitationem ut beatae ducimus ea quod explicabo
              rem dolorem quia.
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Tittle</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sed exercitationem ut beatae ducimus ea quod explicabo
              rem dolorem quia.
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Tittle</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sed exercitationem ut beatae ducimus ea quod explicabo
              rem dolorem quia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
