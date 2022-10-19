import Modal from "react-modal";
import close from "../assets/close.svg";
import { Filter } from "./filters/Filter";
import { Sorting } from "./products/Sorting";
import { FC, useEffect, useState } from "react";
import { Filters } from "../types/Filters";
import { SortBy } from "../types/SortBy";
import { Product } from "../types/Product";
import "./FilterModal.scss";

type FilterModalProps = {
  show: boolean;
  products: Product[];
  filters: Filters;
  sortBy: SortBy;
  onClose: () => void;
  onSave: (filters: Filters, sortBy: SortBy) => void;
};

export const FilterModal: FC<FilterModalProps> = (props) => {
  const { show, products, filters, sortBy, onClose, onSave } = props;
  const [currentFilter, setCurrentFilter] = useState<Filters>({});
  const [currentSortBy, setCurrentSortBy] = useState<SortBy>({
    type: "alphabetical",
    ascending: true,
  });

  useEffect(() => {
    setCurrentFilter(filters);
    setCurrentSortBy(sortBy);
  }, [filters, sortBy]);

  const handleFiltersChange = (newFilter: Filters) => {
    setCurrentFilter(newFilter);
  };
  const handleSortByChange = (newSortBy: SortBy) => {
    setCurrentSortBy(newSortBy);
  };

  const handleClear = () => {
    setCurrentFilter({});
    setCurrentSortBy({
      type: "alphabetical",
      ascending: true,
    });
  };

  const handleClose = () => {
    setCurrentFilter(filters);
    setCurrentSortBy(sortBy);
    onClose();
  };

  const handleSave = () => {
    onSave(currentFilter, currentSortBy);
    onClose();
  };

  return (
    <Modal isOpen={show} onRequestClose={handleClose} className="filter-modal">
      <div className="filter-modal__header">
        <h3>Filter</h3>
        <div className="close" onClick={handleClose}>
          <img src={close} alt="Close filter" />
        </div>
      </div>
      <Filter
        filters={currentFilter}
        onChange={handleFiltersChange}
        products={products}
        formPrefix="mobile"
      />
      <Sorting sortBy={currentSortBy} onChange={handleSortByChange} />
      <div className="filter-modal__footer">
        <button onClick={handleClear} className="btn-secondary">
          Clear
        </button>
        <button onClick={handleSave} className="btn-primary">
          Save
        </button>
      </div>
    </Modal>
  );
};
