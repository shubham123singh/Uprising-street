import { Button } from "@/components/ui/button";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

interface productListProps {
  categoryId: string;
  limit?: number;
  searchParams? : any;
}

const ProductList = async ({ categoryId, limit }: productListProps) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();

  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={
                product.media?.mainMedia?.image?.url ||
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={
                  product.media?.items[1]?.image?.url ||
                  "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">
              {product.priceData?.currency} {product.priceData?.price}
            </span>
          </div>
          <div className="text-sm text-gray-500">{product.description}</div>
          <Button
            variant="destructive"
            className="w-max hover:text-red-500 hover:bg-white rounded-2xl ring-1 ring-red-500"
          >
            Add to Cart
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
