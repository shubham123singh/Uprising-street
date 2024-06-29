import { Button } from "@/components/ui/button";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

interface productListProps {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: productListProps) => {
  const wixClient = await wixClientServer();
  let productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome("productType", [searchParams?.type || "physical", "digital"])
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || 8)
    .skip(searchParams?.page ? parseInt(searchParams.page) * (limit || 8): 0)
    

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    if (sortType === "asc") {
      productQuery = productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery = productQuery.descending(sortBy);
    }
  }
  const res = await productQuery.find();

  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap  ">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] shadow-2xl rounded-2xl"
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
          <div className="flex flex-col items-start p-2 ">
            <span className="font-medium ">{product.name}</span>
            <span className="font-light line-through text-sm">
              ₹ {product.priceData?.price}
            </span>
            <span className="font-medium">
              ₹ {product.priceData?.discountedPrice}
            </span>
          </div>
          <div
            className="text-sm text-gray-500 p-3"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.description!),
            }}
          ></div>
          <div className="flex justify-center p-3">
            <Button
              variant="destructive"
              className="hover:text-red-500 hover:bg-white rounded-2xl ring-1 ring-red-500"
            >
              Add to Cart
            </Button>
          </div>
        </Link>
      ))}
      <Pagination
        currentPage={res.currentPage || 0}
        hasPrev={res.hasPrev()}
        hasNext={res.hasNext()}
      />
    </div>
  );
};

export default ProductList;
