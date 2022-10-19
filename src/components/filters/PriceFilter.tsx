import { ChangeEvent, FC, useCallback } from "react";
import { PriceRange } from "../../types/Filters";

type PriceFilterProps = {
  selectedPriceRange?: PriceRange;
  priceRanges: PriceRange[];
  onChange: (priceRange?: PriceRange) => void;
  formPrefix: string;
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
  const { selectedPriceRange, priceRanges, onChange, formPrefix } = props;
  const currentPriceRange = selectedPriceRange || { id: -1, from: 0 }; // default price range

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
      {priceRanges.map((priceRange) => {
        const inputId = `${formPrefix}_${priceRange.id.toString()}`;
        return (
          <div key={priceRange.id}>
            <input
              id={inputId}
              onChange={handleOnChange}
              type="checkbox"
              value={priceRange.id}
              checked={
                currentPriceRange && priceRange.id === currentPriceRange.id
              }
            />
            <label htmlFor={inputId}>{getLabel(priceRange)}</label>
          </div>
        );
      })}
    </div>
  );
};
