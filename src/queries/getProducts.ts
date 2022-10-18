import { gql } from "@apollo/client";
import { Product } from "../types/Product";

export type GetProductsType = {
  products: Product[];
};

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      category {
        id
        name
      }
      bestseller
      description
      featured
      id
      name
      price
      product_details {
        name
        value
      }
      product_images {
        source
        alt
      }
      related_products {
        product {
          id
          name
          product_images {
            source
            alt
          }
        }
      }
    }
  }
`;
