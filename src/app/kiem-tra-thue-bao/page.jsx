"use client";
import SearchHeader from "@components/search/SearchHeader";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { TailSpin } from "react-loader-spinner";
import moment from "moment";
import { checkPackage } from "@/lib/api";
import XMLParser from "react-xml-parser";

const limit = 10;
const Page = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const [textSearch, setTextSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [forcePageIndex, setForcePageIndex] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [pageTotal, setPageTotal] = useState(getPageNumber(totalCount, limit));
  const [skip, setSkip] = useState(0);
  const renderAfterCalled = useRef(false);
  const [arrCodeJson, setArrCodeJson] = useState([]);
  useEffect(() => {
    setPageTotal(getPageNumber(totalCount, limit));
  }, [totalCount]);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setIsSearch(false);
      setSearchVal("");
    }
  };

  const handlePageChange = (event) => {
    setLoading(true);
    setSkip(event.selected + 1 == -1 ? 0 : event.selected * limit);
    setForcePageIndex(event.selected);
  };

  return (
    <div className="check_isdn">
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
          const removeXML = new XMLParser()
            .parseFromString(res.result)
            .children[0].value.split(":")[1];
          const arrCode = removeXML.split(",");
          if (arrCode) {
            arrCode.map((item, index) => {
              const arrSub = item.split("|");
              const object = {
                code: arrSub[0],
                subCode: arrSub[1],
                price: arrSub[2],
                date: arrSub[3],
              };
              console.log("object", object);

              setArrCodeJson((prev) => [...prev, object]);
            });
          }
        }}
      />

      <div>
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
                    <th scope="col">code</th>
                    <th scope="col">subCode</th>
                    <th scope="col">Gia</th>
                    <th scope="col">Ngay su dung</th>
                  </tr>
                </thead>
                <tbody>
                  {arrCodeJson.map((item, index) => (
                    <tr key={index}>
                      <th>{item.code}</th>
                      <th>{item.subCode}</th>
                      <th>{item.price}</th>
                      <th>{item.date}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="d-flex justify-content-end align-items-center flex-wrap pt-10">
            <div className="fs-6 me-2 fw-bold text-gray-700">{`Showing 1 to 10 of ${totalCount} entries`}</div>
            {/* <ReactPaginate
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
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName="pagination"
              activeClassName="active"
              forcePage={forcePageIndex}
            /> */}
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
