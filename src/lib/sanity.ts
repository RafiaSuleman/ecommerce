import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Define a custom type for Sanity image source
interface CustomSanityImageSource {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}
interface ImageType {
  _key: string;
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
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
