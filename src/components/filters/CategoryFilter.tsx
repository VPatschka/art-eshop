import { ChangeEvent, FC, useCallback } from "react";
import { GET_CATEGORIES, GetCategoriesType } from "../../queries/getCategories";
import { useQuery } from "@apollo/client";

type CategoryFilterProps = {
  selectedCategoryIds: number[];
  onChange: (categoryIds: number[]) => void;
  formPrefix: string;
};

export const CategoryFilter: FC<CategoryFilterProps> = ({
  selectedCategoryIds,
  onChange,
  formPrefix,
}) => {
  const { loading, error, data } = useQuery<GetCategoriesType>(GET_CATEGORIES);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
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
            id={`${formPrefix}_${name}`}
            onChange={handleOnChange}
            type="checkbox"
            name={`${formPrefix}_${name}`}
            value={id}
            checked={selectedCategoryIds.includes(id)}
          />
          <label htmlFor={`${formPrefix}_${name}`}>{name}</label>
        </div>
      ))}
    </div>
  );
};
