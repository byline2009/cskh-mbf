"use client";
import SearchHeader from "@components/search/SearchHeader";
import MySelectSingle from "@components/selects/MySelectSingle";
import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { TailSpin } from "react-loader-spinner";
import XMLParser from "react-xml-parser";
import { arrayPackage } from "@config/constants";
import { ErrorMessage, Form, Formik } from "formik";

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
  const [arrayMem, setArrayMem] = useState([]);
  const [typeCycle, setTypeCycle] = useState("all");
  const [budget, setBudget] = useState("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      setPageTotal(getPageNumber(totalCount, limit));
      setArrPaginate(arrSorted.slice(skip, limit + skip));
    }
  }, [arrSorted]);
  useEffect(() => {
    setArrPaginate(arrSorted.slice(skip, limit + skip));
  }, [skip]);

  useEffect(() => {
    let arrayTemp = [];
    if (typeCycle === "all") {
      arrayTemp = arrayMem;
    } else {
      arrayTemp = arrayMem.filter((item) => {
        return item.typeCycle === typeCycle;
      });
      if (budget !== "all") {
        arrayTemp = arrayTemp.filter((item) => {
          return item.budget === budget;
        });
      }
    }
    setTotalCount(arrayTemp.length);
    setArrSorted(arrayTemp);
  }, [budget, typeCycle]);

  const handlePageChange = (event) => {
    setSkip(event.selected + 1 == -1 ? 0 : event.selected * limit);
    setForcePageIndex(event.selected);
  };

  return (
    <div className="check_isdn  pt-5">
      <div className="d-flex flex-wrap flex-start justify-content-start align-items-center">
        <SearchHeader
          className="me-5"
          textSearch={textSearch}
          textHolder="Nhập thông tin ..."
          callback={async (e) => {
            if (e == textSearch) {
              return;
            } else {
              setTextSearch(e);
            }
            setLoading(true);
            setForcePageIndex(0);
            setPageTotal(0);
            setTotalCount(0);
            setSkip(0);
            setArrSorted([]);
            setArrPaginate([]);
            const response = await fetch(`api/checkPackage?isdn=${e}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
            setLoading(false);
            const res = await response.json();
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
                          code: o.code,
                          price: o.price,
                          date: o.date,
                          cycle: o.cycle,
                          revenueOld: o.revenueOld,
                          revenue: o.revenue,
                          type: o.type,
                          sms: o.sms,
                          inAudio: o.inAudio,
                          outAudio: o.outAudio,
                          data: o.data,
                          permission: o.permission,
                          subcriber: o.subcriber,
                          typeCycle: o.typeCycle,
                          unlimitEntertainment: o.unlimitEntertainment,
                          education: o.education,
                          mp3Television: o.mp3Television,
                          agriculture: o.agriculture,
                          budget: o.budget,
                          dataOnly: o.data_only,
                        };
                      }

                      if (indexObject != -1) {
                        const sortingFunction = (a, _) =>
                          a.code === item.code ? -1 : +1;
                        setArrSorted(arrayUpdated.sort(sortingFunction));
                        setArrayMem(arrayUpdated.sort(sortingFunction));
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
        <SearchHeader
          textSearch={textSearch}
          textHolder="Tìm gói cước"
          className="me-5"
          callback={async (e) => {
            const arrayFilter = arrayMem.filter((item) => {
              return item.code === e.trim();
            });
            setTotalCount(arrayFilter.length);
            setArrSorted(arrayFilter);
          }}
        />
        <MySelectSingle
          className="me-4"
          placeholder="Loại gói"
          options={[
            { label: "Tất cả", value: "all" },
            { label: "Ngày", value: "Ngày" },
            { label: "Đơn kì", value: "Đơn kì" },
            { label: "Dài kì", value: "Dài kì" },
          ]}
          onChange={(e) => {
            setTypeCycle(e.value);
          }}
        />

        <MySelectSingle
          placeholder="Ngân Sách"
          options={[
            { label: "Tất cả", value: "all" },
            { label: "<50k", value: "<50k" },
            { label: "50k-100k", value: "50k-100k" },
            { label: "100k-200k", value: "100k-200k" },
            { label: "200k-500k", value: "200k-500k" },
            { label: ">500k", value: ">500k" },
          ]}
          onChange={(e) => {
            setBudget(e.value);
          }}
        />
      </div>

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
              <table className="table table-row-dashed table-striped  table-row-gray-300 align-middle gs-0 gy-3 ">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" style={{ minWidth: 100 }}>
                      Gói cước
                    </th>
                    <th scope="col" style={{ minWidth: 100 }}>
                      Loại gói
                    </th>
                    <th scope="col">Giá</th>
                    <th scope="col " style={{ minWidth: 120 }}>
                      Ngày sử dụng
                    </th>
                    <th scope="col">Đối tượng</th>
                    <th scope=" col col-2">Ưu đãi</th>
                  </tr>
                </thead>
                <tbody>
                  {arrPaginate.map((item, index) => (
                    <tr key={index}>
                      <td>{item.code}</td>
                      <td>{item.typeCycle}</td>
                      <td>
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.price)}
                      </td>
                      <td>{item.date} ngày</td>
                      <td>
                        {" "}
                        {`${
                          item.subcriber
                            ? "Đối tượng ưu đãi : " + item.subcriber
                            : ""
                        }`}
                      </td>
                      <td className="text-wrap">
                        {`  ${item.data ? "Data : " + item.data : ""} `}
                        {item.permission ? <br /> : null}
                        {`${
                          item.permission
                            ? "Quyền truy cập :" + item.permission
                            : ""
                        } `}
                        {item.typeSubcriber ? <br /> : null}
                        {`${
                          item.typeSubcriber
                            ? "Loại thuê bao : " + item.typeSubcriber
                            : ""
                        } `}
                        {/* {item.typeCycle ? <br /> : null}
                        {` ${
                          item.typeCycle ? "Loại gói : " + item.typeCycle : ""
                        }`} */}
                        {item.dataOnly ? <br /> : null}
                        {` ${
                          item.dataOnly ? "Data only : " + item.dataOnly : ""
                        }`}
                        {item.unlimitEntertainment ? <br /> : null}
                        {` ${
                          item.unlimitEntertainment
                            ? "Giải trí không giới hạn  : " +
                              item.unlimitEntertainment
                            : ""
                        }`}
                        {item.education ? <br /> : null}
                        {` ${
                          item.education ? "Giáo dục : " + item.education : ""
                        }`}
                        {item.agriculture ? <br /> : null}
                        {` ${
                          item.agriculture
                            ? "Nông nghiệp : " + item.agriculture
                            : ""
                        }`}
                        {item.inAudio ? <br /> : null}
                        {` ${
                          item.inAudio
                            ? "Ưu đãi thoại nội mạng : " + item.inAudio
                            : ""
                        }`}
                        {item.outAudio ? <br /> : null}
                        {` ${
                          item.outAudio
                            ? "Ưu đãi thoại ngoại mạng : " + item.outAudio
                            : ""
                        }`}
                        {item.sms ? <br /> : null}
                        {` ${item.sms ? "Ưu đãi SMS : " + item.sms : ""}`}

                        {/* {item.mp3Television ? <br /> : null} */}
                        {/* {` ${
                          item.mp3Television
                            ? "Truyền hình - nghe nhạc : " + item.mp3Television
                            : ""
                        }`} */}

                        {/* {item.budget ? <br /> : null}
                        {` ${item.budget ? "Ngân sách : " + item.budget : ""}`} */}
                      </td>
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
