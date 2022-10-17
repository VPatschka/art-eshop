import { FC } from "react";
import { GET_CATEGORIES, GetCategoriesType } from "../../queries/getCategories";
import { useQuery } from "@apollo/client";

export const CategoryFilter: FC = () => {
  const { loading, error, data } = useQuery<GetCategoriesType>(GET_CATEGORIES);

  console.log(error, data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({error.name})</p>;

  return (
    <div className="filter__categories">
      {data?.categories.map(({ id, name }) => (
        <div key={id}>
          <h3>{name}</h3>
        </div>
      ))}
    </div>
  );
};
