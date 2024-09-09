import { client } from "@/lib/sanity";
import { simplifiedProduct } from "../interface";

// Fixing the typo in the parameter 'category'
async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"] {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  // No need for @ts-expect-error since 'getData' returns a valid type.
  const data: simplifiedProduct[] = await getData(params.category);

  // If you need to use 'data', render it in JSX or process it.
  return (
    <div>
      {data.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
