"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Modalcart = () => {
  const cartItem = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItem ? (
        <div className="">Cart is empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping cart</h2>
          <div className="flex flex-col gap-8">
            {/** Item */}

            <div className="flex gap-4">
              <Image
                src="/sampleimage.jfif"
                alt="sample image"
                height={72}
                width={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/** Top */}
                <div className="">
                  {/** Tittle */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50">₹ 499</div>
                  </div>
                  {/** Description */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/** Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Quantity: 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>

            {/** Item */}

            <div className="flex gap-4">
              <Image
                src="/sampleimage.jfif"
                alt="sample image"
                height={72}
                width={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/** Top */}
                <div className="">
                  {/** Tittle */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50">₹ 499</div>
                  </div>
                  {/** Description */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/** Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Quantity: 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/** Bottom */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>₹ 499</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 ">Lorem ipsum dolor sit amet consectetur</p>
            <div className="flex justify-between text-sm">
                <Button variant={"outline"}>View Cart</Button>
                <Button variant={"default"}>CheckOut</Button>

            </div>
          </div>
        </>
      )}
    </div>
  );
};
