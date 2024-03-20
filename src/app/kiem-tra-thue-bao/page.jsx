"use client";
import SearchHeader from "@components/search/SearchHeader";
import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { TailSpin } from "react-loader-spinner";
import moment from "moment";
import { checkPackage } from "@/lib/api";
import XMLParser from "react-xml-parser";
import { arrayPackage } from "@config/constants";

const limit = 10;

const Page = () => {
  const [textSearch, setTextSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [forcePageIndex, setForcePageIndex] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [pageTotal, setPageTotal] = useState(getPageNumber(totalCount, limit));
  const [skip, setSkip] = useState(0);
  const [arrSorted, setArrSorted] = useState([]);
  const [arrPaginate, setArrPaginate] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      setPageTotal(getPageNumber(totalCount, limit));
      setArrPaginate(arrSorted.slice(skip, limit + skip));
    }
  }, [totalCount]);
  useEffect(() => {
    setArrPaginate(arrSorted.slice(skip, limit + skip));
  }, [skip]);

  const handlePageChange = (event) => {
    setSkip(event.selected + 1 == -1 ? 0 : event.selected * limit);
    setForcePageIndex(event.selected);
  };

  return (
    <div className="check_isdn pt-5">
      <SearchHeader
        textSearch={textSearch}
        textHolder="Nhập thông tin ..."
        callback={async (e) => {
          setLoading(true);
          const response = await fetch(`api/checkPackage?isdn=${e}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          setLoading(false);
          const res = await response.json();
          if (res.result) {
            const removeXML = new XMLParser()
              .parseFromString(res.result)
              .children[0].value.split(":")[1];
            if (removeXML) {
              if (removeXML.includes("Hien tai he thong dang ban")) {
                setError("Hệ thống bận, xin vui lòng thử lại sau");
                setArrCodeJson([]);
              } else {
                const arrCode = removeXML.split(",");
                if (arrCode) {
                  setError("");
                  const arrTemp = arrCode.map((item, index) => {
                    const arrSub = item.split("|");
                    const object = {
                      code: arrSub[0],
                      subCode: arrSub[1],
                      price: arrSub[2],
                      date: arrSub[3],
                    };

                    return object;
                  });
                  arrTemp.forEach((item) => {
                    const hasValue = arrayPackage.includes(item.code);
                    if (hasValue) {
                      const sortingFunction = (a, _) =>
                        a.code === item.code ? -1 : +1;
                      setArrSorted(arrTemp.sort(sortingFunction));
                    }
                  });
                  setTotalCount(arrTemp.length);
                }
              }
            } else {
              setError("Hệ thống bận, xin vui lòng thử lại sau");
            }
          } else {
            setArrPaginate([]);
          }
        }}
      />

      <div className="border-1 mt-5">
        {error && <div className="text-danger">{error}</div>}
        <div className="list-subscriber">
          {loading ? (
            <div className="empty-content">
              <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <TailSpin ariaLabel="loading-indicator" />{" "}
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-row-dashed table-striped  table-row-gray-300 align-middle gs-0 gy-3">
                <thead className="">
                  <tr>
                    <th scope="col">Gói cước</th>
                    {/* <th scope="col">subCode</th> */}
                    <th scope="col">Giá</th>
                    <th scope="col">Ngày sử dụng</th>
                  </tr>
                </thead>
                <tbody>
                  {arrPaginate.map((item, index) => (
                    <tr key={index}>
                      <th>{item.code}</th>
                      {/* <th>{item.subCode}</th> */}
                      <th>{item.price} đồng</th>
                      <th>{item.date} ngày</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="d-flex justify-content-end align-items-center flex-wrap pt-10">
            <div className="fs-6 me-2 fw-bold text-gray-700">{`Showing 1 to 10 of ${totalCount} entries`}</div>
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageCount={pageTotal}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handlePageChange}
              containerClassName="pagination"
              activeClassName="active"
              forcePage={forcePageIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export function getPageNumber(total, limit) {
  return Math.ceil(total / limit);
}

export default Page;
