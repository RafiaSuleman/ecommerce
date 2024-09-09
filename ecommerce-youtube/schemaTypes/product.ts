// export default{
//     name:'product',
//     type:'document',
//     title:'Product',
//     fields:[
//         {
//             name: "name",
//             type:'string',
//             title:'Name of Product'
//         },
//         {
//             name:'images',
//             type:'array',
//             title:'product Image',
//             of:[{type:'image'}],
//         },
//         {
//             name:'description',
//             type:'text',
//             title:'Description of product',

//         },
//         {
//             name:'slug',
//             type:'slug',
//             title:'Product Slug',
//             options:{
//                 source:'name',
//             }
//         },
//         {
//             name:'price',
//             title:'Price',
//             type:'number',
//         },
//         {
//             name:'category',
//             title:'Product Category',
//             type:'reference',
//             to:[
//                 {
//                     type:'category',
//                 }
//             ]
//         }
//     ]
// }
// product.ts
// product.ts
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of Product',
      },
      {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [{ type: 'image' }],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description of Product',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        options: {
          source: 'name',
        },
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'category',
        type: 'reference',
        title: 'Product Category',
        to: [{ type: 'category' }],
      },
    ],
  };
  