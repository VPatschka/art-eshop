export type Filters = Partial<{
  categoryIds: number[];
  prices: PriceRange;
}>;

export type PriceRange = {
  id: number;
  from: number;
  to?: number;
};
