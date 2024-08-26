import React from "react";

const Pagination = ({ offset, setOffset, limit }) => {
  const handleNext = () => setOffset(offset + limit);
  const handlePrev = () => setOffset(Math.max(0, offset - limit));

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={offset === 0}>
        Previous
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
