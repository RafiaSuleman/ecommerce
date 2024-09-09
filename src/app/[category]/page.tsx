import { client } from "@/lib/sanity";
import { simplifiedProduct } from "../interface";

async function getData(cateogry: "string") {
  const query = `*[_type == "product" && category->name = "Men"] {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
    };
    }`;
  const data = await client.fetch(query);
  return data;
}
export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
 //@ts-expect-error
  const data: simplifiedProduct[] = await getData(params.category);
 
}
