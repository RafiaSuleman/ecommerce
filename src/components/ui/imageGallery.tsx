"use client";
import Image from "next/image";
import { useState } from "react";

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Define the CustomSanityImageSource type
interface CustomSanityImageSource {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export const client = createClient({
  projectId: 'dqzugms3',
  dataset: 'production',
  apiVersion: '2024-07-09',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: CustomSanityImageSource) {
  return builder.image(source);
}

interface ImageType extends CustomSanityImageSource {
  _id: string;
}

interface iAppProps {
  images: ImageType[];
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState<ImageType>(images[0]);

  const handleSmallImageClick = (image: ImageType) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image) => (
          <div key={image._id} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
