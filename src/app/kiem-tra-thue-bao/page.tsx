"use client";
import SearchHeader from "@components/search/SearchHeader";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { TailSpin } from "react-loader-spinner";
import moment from "moment";
import { checkPackage } from "@/lib/api";
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

  useEffect(() => {
    setPageTotal(getPageNumber(totalCount, limit));
  }, [totalCount]);
  const handleSearch = (e: any) => {
    if (e.key === "Enter") {
      setIsSearch(false);
      setSearchVal("");
    }
  };

  const handlePageChange = (event: any) => {
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
          console.log("e", e);
          const response = await fetch(`api/checkPackage?isdn=${e}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const result = await response.json();
          console.log("check ne", result);
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
                    <th scope="col">Tỉnh</th>
                    <th scope="col">Shopcode</th>
                    <th scope="col">Shopname</th>
                    <th scope="col">Mã nvpt</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Ngày kích hoạt</th>
                    <th scope="col">Tháng tính lương</th>
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2, 3, 5].map((item: any, index: number) => (
                    <tr key={index}>
                      <th>0</th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>5</th>
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
export function getPageNumber(total: number, limit: number) {
  return Math.ceil(total / limit);
}

export default Page;
