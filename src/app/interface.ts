interface ImageAsset {
    _key: string;
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }
  
  export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
  }
  
  export interface fullProduct {
    price_id: string;
    _id: string;
    images: ImageAsset[]; // Updated from 'any' to a specific type
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
  }
  