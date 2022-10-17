import { gql } from "@apollo/client";
import { Category } from "../types/Category";

export type GetCategoriesType = {
  categories: Category[];
};

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;
