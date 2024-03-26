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
          setForcePageIndex(0);
          const res = await response.json();
          console.log("res", res);
          if (
            res.result &&
            res &&
            new XMLParser().parseFromString(res.result)
          ) {
            const removeXML = new XMLParser()
              .parseFromString(res.result)
              .children[0].value.split(":")[1];
            if (removeXML) {
              if (removeXML.includes("Hien tai he thong dang ban")) {
                setError("Hệ thống bận, xin vui lòng thử lại sau");
                setArrPaginate([]);
              } else {
                const arrCode = removeXML.split(",");
                if (arrCode) {
                  setError("");
                  let arrTemp = arrCode.map((item, index) => {
                    const arrSub = item.split("|");
                    const object = {
                      code: arrSub[0],
                      subCode: arrSub[1],
                      price: arrSub[2],
                      date: arrSub[3],
                    };

                    return object;
                  });
                  let arrayUpdated = arrTemp;

                  arrTemp.forEach((item, indexArrayItem) => {
                    const indexObject = arrayPackage.findIndex(
                      (o) => o.code == item.code
                    );
                    const o = arrayPackage[indexObject];
                    if (indexObject != -1) {
                      arrayUpdated[indexArrayItem] = {
                        code: item.code,
                        price: item.price,
                        date: item.date,
                        cycle: o.cycle,
                        revenueOld: o.revenueOld,
                        revenue: o.revenue,
                        type: o.type,
                        sms: o.sms,
                        inAudio: o.inAudio,
                        outAudio: o.outAudio,
                        data: o.Data,
                        permission: o.permission,
                        subcriber: o.subcriber,
                        typeCycle: o.typeCycle,
                        typeSubcriber: o.typeSubcriber,
                        autoSubcriber: o.autoSubcriber,
                        methodSubcriber: o.methodSubcriber,
                        cancelSubcriber: o.cancelSubcriber,
                        cancelAutoSubriber: o.cancelAutoSubriber,
                      };
                    }

                    if (indexObject != -1) {
                      const sortingFunction = (a, _) =>
                        a.code === item.code ? -1 : +1;
                      setArrSorted(arrayUpdated.sort(sortingFunction));
                    }
                  });
                  setTotalCount(arrayUpdated.length);
                }
              }
            } else {
              setError("Hệ thống bận, xin vui lòng thử lại sau");
            }
          } else {
            setError("Hệ thống bận, xin vui lòng thử lại sau");
            setLoading(false);
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
                    <th scope=" col col-2">Ưu đãi</th>
                  </tr>
                </thead>
                <tbody>
                  {arrPaginate.map((item, index) => (
                    <tr key={index}>
                      <th>{item.code}</th>
                      {/* <th>{item.subCode}</th> */}
                      <th>{item.price} đồng</th>
                      <th>{item.date} ngày</th>
                      <th className="text-wrap">
                        {`${
                          item.subcriber
                            ? "Đối tượng ưu đãi :" + item.subcriber
                            : ""
                        }`}
                        <br />
                        {`  ${item.data ? "Data :" + item.data : ""} `} <br /> {`${
                          item.permission
                            ? "Quyền truy cập :" + item.permission
                            : ""
                        } `}
                        <br />
                        {`${
                          item.typeSubcriber
                            ? "Loại thuê bao :" + item.typeSubcriber
                            : ""
                        } `}
                        <br />
                        {` ${
                          item.typeCycle ? "Loại gói : " + item.typeCycle : ""
                        }`}
                        <br />
                        {` ${
                          item.methodSubcriber
                            ? "Đăng kí  : " + item.methodSubcriber
                            : ""
                        }, ${
                          item.cancelSubcriber
                            ? "Hủy : " + item.cancelSubcriber
                            : ""
                        }`}
                      </th>
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
