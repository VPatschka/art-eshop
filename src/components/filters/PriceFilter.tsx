import { ChangeEvent, FC, useCallback } from "react";
import { PriceRange } from "../../types/Filters";

type PriceFilterProps = {
  selectedPriceRange?: PriceRange;
  priceRanges: PriceRange[];
  onChange: (priceRange?: PriceRange) => void;
};

const getLabel = (priceRange: PriceRange) => {
  const { from, to } = priceRange;
  if (from === 0) {
    return `Lower than $${to}`;
  }

  if (to === undefined) {
    return `More than $${from}`;
  }

  return `$${from} - $${to}`;
};

export const PriceFilter: FC<PriceFilterProps> = (props) => {
  const { selectedPriceRange, priceRanges, onChange } = props;

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      const selectedId = parseInt(event.target.value);
      if (isChecked) {
        onChange(
          priceRanges.find((priceRange) => priceRange.id === selectedId)
        );
      } else {
        onChange(undefined);
      }
    },
    [onChange, priceRanges]
  );

  return (
    <div className="filter__block">
      <label>Price range</label>
      {priceRanges.map((priceRange) => (
        <div key={priceRange.id}>
          <input
            id={priceRange.id.toString()}
            onChange={handleOnChange}
            type="checkbox"
            value={priceRange.id}
            checked={
              selectedPriceRange && priceRange.id === selectedPriceRange.id
            }
          />
          <label htmlFor={priceRange.id.toString()}>
            {getLabel(priceRange)}
          </label>
        </div>
      ))}
    </div>
  );
};
