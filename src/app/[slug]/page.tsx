import { AddProduct } from "@/component/Add";
import { ProductImages } from "@/component/ProductImages";
import { CustomizeProducts } from "@/component/customizeProducts";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();
  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/**Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages item={product.media?.items} />
      </div>
      {/**Texts */}
      <div className="w-full lg:w-1/2 flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flec items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$599</h3>
          <h3 className="font-medium text-2xl">
            <span className="font-light text-2xl">
              {product.priceData?.currency}
            </span>{" "}
            {product.priceData?.price}
          </h3>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts />
        <AddProduct />
        <div className="h-[2px] bg-gray-100">
          {product.additionalInfoSections?.map((section: any) => (
            <div className="text-sm" key={section.title}>
              <h4 className="font-medium mb-4">{section.title}</h4>
              <p>
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
