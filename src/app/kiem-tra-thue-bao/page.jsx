"use client";
import SearchHeader from "@components/search/SearchHeader";
import MySelectSingle from "@components/selects/MySelectSingle";
import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { TailSpin } from "react-loader-spinner";
import { arrayPackage, arrayPackage5G } from "@config/constants";
import { useSession } from "next-auth/react";
const API_URL = process.env.NEXTAUTH_APP_API_URL_SSL;
const CHECK_PACKAGE_URL = `${API_URL}/website/package`;

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
  const [namePackage, setNamePackage] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      setPageTotal(getPageNumber(totalCount, limit));
      setArrPaginate(arrSorted.slice(skip, limit + skip));
    }
  }, [arrSorted]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setArrPaginate(arrSorted.slice(skip, limit + skip));
    }
  }, [skip]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let arrayTemp = [];
      if (namePackage !== "") {
        arrayTemp = arrayMem.filter((item) => {
          return item.code === namePackage.toUpperCase().trim();
        });

        if (typeCycle === "all") {
          if (budget !== "all") {
            arrayTemp = arrayTemp.filter((item) => {
              return item.budget === budget;
            });
          }
        } else {
          arrayTemp = arrayTemp.filter((item) => {
            return item.typeCycle === typeCycle;
          });
          if (budget !== "all") {
            arrayTemp = arrayTemp.filter((item) => {
              return item.budget === budget;
            });
          }
        }
      } else {
        if (typeCycle === "all") {
          arrayTemp = arrayMem;
          if (budget !== "all") {
            arrayTemp = arrayTemp.filter((item) => {
              return item.budget === budget;
            });
          }
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
      }

      setTotalCount(arrayTemp.length);
      setArrSorted(arrayTemp);
    }
  }, [budget, typeCycle, namePackage]);

  const handlePageChange = (event) => {
    setSkip(event.selected + 1 == -1 ? 0 : event.selected * limit);
    setForcePageIndex(event.selected);
  };

  const handleSearch = async (e) => {
    setTypeCycle("all");
    setBudget("all");
    setNamePackage("");
    setTextSearch(e);
    setLoading(true);
    setForcePageIndex(0);
    setPageTotal(0);
    setTotalCount(0);
    setSkip(0);
    setArrSorted([]);
    setArrPaginate([]);
    setNamePackage("");

    const res = await fetch(`${CHECK_PACKAGE_URL}?isdn=${e}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session.user?.accessToken || null}`,
      },
      next: { revalidate: 10 },
    });
    const response= await res.json();
    setLoading(false);
    if (response.result && response) {
      const arrayResponse = response.result;
      if (arrayResponse) {
        if (arrayResponse.includes("Hien tai he thong dang ban")) {
          setError("Hệ thống bận, xin vui lòng thử lại sau");
          setArrPaginate([]);
        } else {
          setError("");
          let arrTemp = arrayResponse.map((item, index) => {
            const object = {
              code: item.CODE,
              price: item.CHARGE_PRICE,
              type: item.PACKAGE_TYPE,
            };

            return object;
          });
          let arrayUpdated = arrTemp;

          arrTemp.forEach((item, indexArrayItem) => {
            const indexObject = arrayPackage.findIndex(
              (o) => o.code == item.code
            );

            const indexObject5G = arrayPackage5G.findIndex(
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

            const o5G = arrayPackage5G[indexObject5G];
            if (indexObject5G != -1) {
              arrayUpdated[indexArrayItem] = {
                code: o5G.code,
                price: o5G.price,
                date: o5G.date,
                cycle: o5G.cycle,
                revenueOld: o5G.revenueOld,
                revenue: o5G.revenue,
                type: o5G.type,
                sms: o5G.sms,
                inAudio: o5G.inAudio,
                outAudio: o5G.outAudio,
                data: o5G.data,
                permission: o5G.permission,
                subcriber: o5G.subcriber,
                typeCycle: o5G.typeCycle,
                unlimitEntertainment: o5G.unlimitEntertainment,
                education: o5G.education,
                mp3Television: o5G.mp3Television,
                agriculture: o5G.agriculture,
                budget: o5G.budget,
                dataOnly: o5G.data_only,
              };
            }

            if (indexObject5G != -1) {
              arrayUpdated.unshift(arrayUpdated.splice(indexArrayItem, 1)[0]);
              setArrSorted(arrayUpdated);
              setArrayMem(arrayUpdated)
              // const sortingFunction = (a, _) => {
              //   const indexSort = arrayPackage5G.findIndex(
              //     (o) => o.code == a.code
              //   );
              //   indexSort != -1 ? -1 : +1;
              // };

              // setArrSorted(arrayUpdated.sort(sortingFunction));
              // setArrayMem(arrayUpdated.sort(sortingFunction));
            }

          
          });
          setTotalCount(arrayUpdated.length);
        }
      } else {
        setError("Hệ thống bận, xin vui lòng thử lại sau");
      }
    } else {
      setError("Hệ thống bận, xin vui lòng thử lại sau");
      setLoading(false);
      setArrPaginate([]);
    }
  };

  return (
    <div className="check_isdn  pt-5">
      <div className="d-flex flex-wrap flex-start justify-content-start align-items-center">
        <SearchHeader
          className="me-5"
          textSearch={textSearch}
          textHolder="Nhập thông tin ..."
          callback={async (e) => {
            handleSearch(e);
          }}
        />
        <SearchHeader
          textSearch={namePackage}
          textHolder="Tìm gói cước"
          nameInput="searchPackage"
          className="me-5"
          callback={async (e) => {
            setNamePackage(e);
          }}
        />
        <MySelectSingle
          className="me-4"
          placeholder="Loại gói"
          value={[
            { label: "Tất cả", value: "all" },
            { label: "Ngày", value: "Ngày" },
            { label: "Đơn kì", value: "Đơn kì" },
            { label: "Dài kì", value: "Dài kì" },
          ].filter((option) => option.value === typeCycle)}
          options={[
            { label: "Tất cả", value: "all" },
            { label: "Ngày", value: "Ngày" },
            { label: "Đơn kì", value: "Đơn kì" },
            { label: "Dài kì", value: "Dài kì" },
          ]}
          onChange={(e) => {
            console.log("e", e);
            setTypeCycle(e.value);
          }}
        />

        <MySelectSingle
          value={[
            { label: "Tất cả", value: "all" },
            { label: "<50k", value: "<50k" },
            { label: "50k-100k", value: "50k-100k" },
            { label: "100k-200k", value: "100k-200k" },
            { label: "200k-500k", value: "200k-500k" },
            { label: ">500k", value: ">500k" },
          ].filter((option) => option.value === budget)}
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
                    <th scope="col" style={{ minWidth: 180 }}>
                      Giá / Ngày sử dụng
                    </th>
                    <th scope=" col col-2" style={{ minWidth: 300 }}>
                      Ưu đãi
                    </th>
                    <th scope=" col col-2" style={{ minWidth: 500 }}>
                      Đối tượng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arrPaginate.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {" "}
                        <span className="fw-bold">
                          {item.code ? item.code : null}
                        </span>{" "}
                      </td>
                      <td>{item.typeCycle}</td>
                      <td>
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.price)}{" "}
                        / {item.cycle} ngày
                      </td>

                      <td className="text-wrap">
                        <span className="fw-bold">
                          {item.data ? "Data : " : null}
                        </span>{" "}
                        {`  ${item.data ? item.data : ""} `}
                        {item.permission ? <br /> : null}
                        <span className="fw-bold">
                          {item.permission ? "Quyền truy cập : " : null}
                        </span>{" "}
                        {`${item.permission ? item.permission : ""} `}
                        {item.typeSubcriber ? <br /> : null}
                        <span className="fw-bold">
                          {item.typeSubcriber ? "Loại thuê bao : " : null}
                        </span>{" "}
                        {`${item.typeSubcriber ? item.typeSubcriber : ""} `}
                        {/* {item.typeCycle ? <br /> : null}
                        {` ${
                          item.typeCycle ? "Loại gói : " + item.typeCycle : ""
                        }`} */}
                        {item.dataOnly ? <br /> : null}
                        <span className="fw-bold">
                          {item.dataOnly ? "Data only : " : null}
                        </span>{" "}
                        {` ${item.dataOnly ? item.dataOnly : ""}`}
                        <span className="fw-bold">
                          {item.unlimitEntertainment
                            ? "Giải trí không giới hạn  : "
                            : null}
                        </span>{" "}
                        {item.unlimitEntertainment ? <br /> : null}
                        {` ${
                          item.unlimitEntertainment
                            ? item.unlimitEntertainment
                            : ""
                        }`}
                        {item.education ? <br /> : null}
                        <span className="fw-bold">
                          {item.education ? "Giáo dục : " : null}
                        </span>{" "}
                        {` ${item.education ? item.education : ""}`}
                        {item.agriculture ? <br /> : null}
                        <span className="fw-bold">
                          {item.agriculture ? "Nông nghiệp : " : null}
                        </span>{" "}
                        {` ${item.agriculture ? item.agriculture : ""}`}
                        {item.inAudio ? <br /> : null}
                        <span className="fw-bold">
                          {item.inAudio ? "thoại nội mạng : " : null}
                        </span>{" "}
                        {` ${item.inAudio ? item.inAudio : ""}`}
                        {item.outAudio ? <br /> : null}
                        <span className="fw-bold">
                          {item.outAudio ? "thoại ngoại mạng : " : null}
                        </span>{" "}
                        {` ${item.outAudio ? item.outAudio : ""}`}
                        {item.sms ? <br /> : null}
                        <span className="fw-bold">
                          {item.sms ? "SMS : " : null}
                        </span>{" "}
                        {` ${item.sms ? item.sms : ""}`}
                        {/* {item.mp3Television ? <br /> : null} */}
                        {/* {` ${
                          item.mp3Television
                            ? "Truyền hình - nghe nhạc : " + item.mp3Television
                            : ""
                        }`} */}
                        {/* {item.budget ? <br /> : null}
                        {` ${item.budget ? "Ngân sách : " + item.budget : ""}`} */}
                      </td>
                      <td>
                        <span className="fw-bold">
                          {item.subcriber ? "Đối tượng ưu đãi : " : null}
                        </span>{" "}
                        {`${item.subcriber ? item.subcriber : ""}`}
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
