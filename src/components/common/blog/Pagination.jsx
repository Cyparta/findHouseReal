import { useState } from "react";
import { useDispatch } from "react-redux";
import { adddata } from "../../../features/page/pageSlice";
import { useEffect } from "react";
import { updateFilter } from "../../../features/units/unitsSlice";

function Pagination({ itemsPerPage, data, totalPages=10 }) {
  let dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  // let totalPages = Math.ceil(data?.length / itemsPerPage);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentData = data?.slice(startIndex, endIndex);
  function handlePageChange(event, page) {
    event.preventDefault();
    setCurrentPage(page);
  }
  useEffect(() => {
    dispatch(adddata(currentData));
  }, [currentPage]);

  return (
    <div className="en">
      <ul>
        {currentData?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item${i + 1 === currentPage ? " active" : ""}`}
              onClick={() => 
                dispatch(updateFilter({name: 'page', val: i+1}))
              }
            >
              <a
                className="page-link"
                href="#"
                onClick={(event) => handlePageChange(event, i + 1)}
              >
                {i + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
module.exports = Pagination;
