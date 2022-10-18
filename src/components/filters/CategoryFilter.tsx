import { ChangeEvent, FC, useCallback } from "react";
import { GET_CATEGORIES, GetCategoriesType } from "../../queries/getCategories";
import { useQuery } from "@apollo/client";

type CategoryFilterProps = {
  selectedCategoryIds: number[];
  onChange: (categoryIds: number[]) => void;
};

export const CategoryFilter: FC<CategoryFilterProps> = ({
  selectedCategoryIds,
  onChange,
}) => {
  const { loading, error, data } = useQuery<GetCategoriesType>(GET_CATEGORIES);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log("change");
      const isChecked = event.target.checked;
      const checkedId = parseInt(event.target.value);
      if (isChecked) {
        onChange([...selectedCategoryIds, checkedId]);
      } else {
        onChange(
          selectedCategoryIds.filter((categoryId) => categoryId !== checkedId)
        );
      }
    },
    [selectedCategoryIds, onChange]
  );

  if (loading) {
    return <span className="loading" />;
  }

  if (error) {
    console.log(error);
    return <div className="danger">Error occured while downloading data</div>;
  }

  return (
    <div className="filter__block">
      <label>Category</label>
      {data?.categories.map(({ id, name }) => (
        <div key={id}>
          <input
            id={name}
            onChange={handleOnChange}
            type="checkbox"
            name={name}
            value={id}
            checked={selectedCategoryIds.includes(id)}
          />
          <label htmlFor={name}>{name}</label>
        </div>
      ))}
    </div>
  );
};
