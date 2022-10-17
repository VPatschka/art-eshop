export type SortByType = "alphabetical" | "price";

export type SortBy = {
  type: SortByType;
  ascending: boolean;
};
