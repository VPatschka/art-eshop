import { FC } from "react";
import "./Pagination.scss";

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  pageCount,
  onPageChange,
}) => {
  return (
    <div className="pagination">
      <span
        onClick={() => onPageChange(currentPage - 1)}
        className={"pagination__arrow" + (currentPage === 0 ? " disabled" : "")}
      >
        <svg
          width="13"
          height="20"
          viewBox="0 0 13 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 2L3 10L11 18" stroke="black" strokeWidth="3" />
        </svg>
      </span>

      {Array(pageCount)
        .fill(undefined)
        .map((_, index) => (
          <span
            key={index}
            onClick={() => onPageChange(index)}
            className={currentPage === index ? "active" : ""}
          >
            {index + 1}
          </span>
        ))}

      <span
        onClick={() => onPageChange(currentPage + 1)}
        className={
          "pagination__arrow" +
          (currentPage === pageCount - 1 ? " disabled" : "")
        }
      >
        <svg
          width="13"
          height="20"
          viewBox="0 0 13 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2L10 10L2 18" stroke="black" strokeWidth="3" />
        </svg>
      </span>
    </div>
  );
};
