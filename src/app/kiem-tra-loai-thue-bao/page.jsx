"use client";
import SearchHeader from "@components/search/SearchHeader";
import React, { useState } from "react";
import { getSearchTypeSubscriber } from "../../until/functions";
import { listRangeType } from "../../config/constants";

const Page = () => {
  const [textSearch, setTextSearch] = useState("");
  const [textResult, setTextResult] = useState("");

  const handleSearch = async (e) => {
    if (e && e.length > 0) {
      const response = await getSearchTypeSubscriber(e);
      console.log("response check", response);
      if (response) {
        setTextResult(response.result);
      } else {
        setTextResult("");
      }
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
            setTextSearch(e);
            handleSearch(e);
          }}
        />
      </div>
      <p>
        <span>Kết quả :</span>
        <span>{textResult}</span>
      </p>
      <div className="table-responsive table-type">
        <table className="table table-row-dashed table-striped  table-row-gray-300 align-middle gs-0 gy-3 ">
          <thead className="thead-light">
            <tr>
              <th scope="col" style={{ width: "100px !important" }}>
                Loại số
              </th>
              <th scope="col" style={{ width: 200 }}>
                Mức cam kết
              </th>
            </tr>
          </thead>
          <tbody>
            {listRangeType.map((item, index) => (
              <tr key={index}>
                <td>
                  <span className="fw-bold">
                    {item.value ? item.value : null}
                  </span>{" "}
                </td>
                <td>
                  <span className="fw-bold">
                    {item.label ? item.label : null}
                  </span>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
