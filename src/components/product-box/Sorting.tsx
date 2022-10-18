import { SortBy, SortByType } from "../../types/SortBy";
import { ChangeEvent, FC, useCallback } from "react";
import "./Sorting.scss";

type SortingProps = {
  sortBy: SortBy;
  onChange: (sortBy: SortBy) => void;
};

export const Sorting: FC<SortingProps> = ({ sortBy, onChange }) => {
  const toggleAscendingSort = useCallback(() => {
    onChange({ ...sortBy, ascending: !sortBy.ascending });
  }, [onChange, sortBy]);

  const changeSortByType = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange({ ...sortBy, type: event.target.value as SortByType });
    },
    [onChange, sortBy]
  );

  return (
    <div className="sorting">
      <div onClick={toggleAscendingSort}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={!sortBy.ascending ? "black" : "gray"}
            d="M3.64807 14.3734V1.5347L5.90435 3.79098C5.97793 3.86456 6.07296 3.90134 6.17106 3.90134C6.26916 3.90134 6.36419 3.86456 6.43777 3.79098C6.58492 3.64383 6.58492 3.40778 6.43777 3.26063L3.54077 0.363637C3.39976 0.222619 3.15144 0.222619 3.01042 0.363637L0.110362 3.26063C-0.0367873 3.40778 -0.0367873 3.64383 0.110362 3.79098C0.257511 3.93813 0.493562 3.93813 0.640711 3.79098L2.897 1.5347V14.3734C2.897 14.5819 3.0656 14.7505 3.27407 14.7505C3.47946 14.7474 3.64807 14.5788 3.64807 14.3734Z"
          />
          <path
            fill={sortBy.ascending ? "black" : "gray"}
            d="M11.4592 14.6367C11.5328 14.7103 11.6279 14.7471 11.726 14.7471C11.8241 14.7471 11.9191 14.7103 11.9927 14.6367L14.8897 11.7397C15.0368 11.5926 15.0368 11.3565 14.8897 11.2094C14.7425 11.0622 14.5065 11.0622 14.3593 11.2094L12.103 13.4657V0.626917C12.103 0.418456 11.9344 0.249847 11.726 0.249847C11.5175 0.249847 11.3489 0.418456 11.3489 0.626917V13.4657L9.09567 11.2094C8.94852 11.0622 8.71247 11.0622 8.56532 11.2094C8.41817 11.3565 8.41817 11.5926 8.56532 11.7397L11.4592 14.6367Z"
          />
        </svg>
      </div>
      <label>Sort By</label>
      <select onChange={changeSortByType}>
        <option value="alphabetical">Alphabetically</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};
