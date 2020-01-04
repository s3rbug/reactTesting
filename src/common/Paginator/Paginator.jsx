import React from "react";
import Preloader from "../Preloader/Preloader";
import classes from "./Paginator.module.css";

const Paginator = ({
  totalCount,
  currentPage,
  countPages,
  pageSize,
  onPageChanged,
  isFetching
}) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for (
    let i = Math.max(1, currentPage - countPages);
    i <= Math.min(pagesCount, currentPage + countPages);
    ++i
  ) {
    pages.push(i);
  }
  return (
    <>
      <div className={classes.spanWrapper}>
        <span
          className={
            currentPage <= countPages ? classes.notVisible : classes.slide
          }
          onClick={() => {
            onPageChanged(currentPage - countPages);
          }}
        >
          {"<"}
        </span>
        {pages.map(v => {
          return (
            <span
              className={
                currentPage === v ? classes.selected : classes.notSelected
              }
              onClick={() => {
                onPageChanged(v);
              }}
              key={v}
            >
              {v + " "}
            </span>
          );
        })}
        <span
          onClick={() => {
            onPageChanged(currentPage + countPages);
          }}
          className={
            currentPage + countPages > pagesCount
              ? classes.notVisible
              : classes.slide
          }
        >
          {">"}
        </span>
      </div>
      {isFetching ? <Preloader /> : null}
    </>
  );
};

export default Paginator;
