import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import "./scrollbar.css";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide scrollbar-custom bg-gradient-to-r from-yellow-50 to-pink-50">
      <div className="flex gap-4 md:gap-8 ">
        {cat.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-96 group">
              <Image
                src={item.media?.mainMedia?.image?.url || "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600"}
                alt=""
                fill
                sizes="20vw"
                className="object-cover group-hover:blur-sm transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-white text-2xl font-bold">{item.name}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
