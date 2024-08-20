import React from "react";
import { listJob } from "../../config/constants";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import HeaderNoAuth from "src/components/header/HeaderAppNoAuth";
const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session ? <></> : <HeaderNoAuth />}
      <div className="career">
        <div className="careerBanner banner pageBanner">
          <div className="bannerItem lazyloaded">
            <div className="bannerItemDesc">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <h2 className="bannerItemTitle">
                      Trở thành một người MobiFone
                    </h2>
                    <div className="bannerItemTxt">
                      Bạn đang tìm kiếm một môi trường làm việc chuyên nghiệp,
                      năng động, hiện đại, sáng tạo nơi bạn được trao cơ hội,
                      được cống hiến và được ghi nhận?
                      <br />
                      <br />
                      Hãy gia nhập Trung tâm Công nghệ thông tin MobiFone ngay
                      hôm nay!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="careerIntro">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <h2></h2>
                  <div className="d-flex justify-content-center align-item-center">
                    <img
                      className="wp-image-963 symbol-tuyendung "
                      src="https://mbf3.starfruit.com.vn/wp-content/uploads/2020/02/x-250x250-1.png"
                      alt=""
                      width="96"
                      height="96"
                      srcSet="https://it.mobifone.vn/wp-content/uploads/2020/02/x-250x250-1.png 250w, https://it.mobifone.vn/wp-content/uploads/2020/02/x-250x250-1-150x150.png 150w, https://it.mobifone.vn/wp-content/uploads/2020/02/x-250x250-1-120x120.png 120w"
                      sizes="(max-width: 96px) 100vw, 96px"
                    />
                  </div>
                  <h2>XIN CHÀO ỨNG VIÊN</h2>
                  <div className=" content-intro align--justify">
                    <div className="">
                      <span>
                        Bạn đang tìm kiếm một môi trường làm việc chuyên nghiệp
                        – năng động – sáng tạo, nơi bạn được trao cơ hội, được
                        cống hiến và được ghi nhận?
                      </span>
                    </div>
                    <div>
                      <span>
                        MobiFone IT chắc chắn sẽ là bến đỗ lý tưởng dành cho
                        bạn!
                      </span>
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: "Segoe UI Emoji,sans-serif",
                          fontSize: "22px",
                        }}
                      >
                        🌟
                      </span>
                      <span> Top 100 Nơi Làm Việc Tốt Nhất Việt Nam 2023</span>
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: "Segoe UI Emoji,sans-serif",
                          fontSize: "22px",
                        }}
                      >
                        🌟
                      </span>
                      <span>
                        Top 50 Thương Hiệu Nhà Tuyển Dụng Hấp Dẫn Với Sinh Viên
                        2023
                      </span>
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: "Segoe UI Emoji,sans-serif",
                          fontSize: "22px",
                        }}
                      >
                        🌟
                      </span>
                      <span>
                        Doanh nghiệp đạt chuẩn văn hóa kinh doanh Việt Nam 2023
                      </span>
                    </div>
                    <div>
                      <span>
                        Đến với MobiFone IT bạn sẽ nhận được: Thu nhập cạnh
                        tranh; Chế độ phúc lợi toàn diện, cân bằng công việc và
                        cuộc sống; Các khóa đào tạo phong phú để phát triển bản
                        thân; Bứt phá sự nghiệp với cơ hội thăng tiến luôn rộng
                        mở.
                      </span>
                    </div>
                    <div>
                      <strong style={{ fontSize: "20px" }}>
                        Trung tâm Công nghệ thông tin MobiFone luôn mở rộng cánh
                        cửa chào đón các bạn!
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="careerIntroImage lazyloaded"
              src="https://it.mobifone.vn/wp-content/uploads/5-1.jpg"
              data-src="https://it.mobifone.vn/wp-content/uploads/5-1.jpg"
            ></img>
          </div>
          <div className="careerJob">
            <div className="sectionTitle">
              <span>
                Thoả mãn &amp; đam mê. Cùng chúng tôi kiến tạo tương lai
              </span>
              <h2>Các vị trí tuyển dụng</h2>
            </div>
            <div className="container">
              <div className="row listing g-2">
                {listJob.map((item, index) => (
                  <div
                    className="item_Recruiment col-lg-6 col-md-12 col-sm-12"
                    key={index}
                  >
                    <div className="boxJob">
                      <img
                        className="boxJobImg thumbnail lazyloaded"
                        src={item.imageUrl}
                      ></img>
                    </div>
                    <div className="boxJobDesc desc">
                      <div className="boxJob">
                        <h5 className="boxJobTitle">{item.title}</h5>
                        <div>
                          <span
                            style={{
                              fontFamily: "Segoe UI Emoji,sans-serif",
                              fontSize: "22px",
                            }}
                          >
                            🌟
                          </span>
                          <span>Thu nhập lên đến 200 triệu/năm</span>
                        </div>
                        <div>
                          <Image
                            className="symbol-atl"
                            width={20}
                            height={20}
                            alt="writting-hand"
                            src={"imgs/svgs/writing-hand.svg"}
                          />
                          <span>
                            Tha hồ lên &quot;level&quot; nghiệp vụ chuyên môn
                            với các khóa đào tạo trong và ngoài nước
                          </span>
                        </div>
                        <div>
                          <Image
                            className="symbol-atl"
                            width={20}
                            height={20}
                            alt="heart"
                            src={"imgs/svgs/heart.svg"}
                          />
                          <span>
                            Chế độ chăm sóc &quot;đỉnh nóc&quot; như đi du lịch
                            bảo hiểm, khám sức khỏe với quyền lợi vượt trội
                          </span>
                        </div>
                        <div>
                          <Image
                            className="symbol-atl"
                            width={20}
                            height={20}
                            alt="victory-hand"
                            src={"imgs/svgs/victory-hand.svg"}
                          />
                          <span>
                            Hưởng chế độ đặc biệt dành cho cán bộ công nhân viên
                            và các ưu đãi khi sử dụng các dịch vụ của MobiFone
                          </span>
                        </div>

                        <div>
                          <Image
                            className="symbol-atl"
                            width={20}
                            height={20}
                            alt="hand-right"
                            src={"imgs/svgs/hand-right.svg"}
                          />
                          <span>
                            Về &quot;đại bản doanh&quot; của MobiFone tại Đắk
                            Lắk, Đắk Nông , Gia Lai, Khánh Hòa, Kon Tum bằng 2
                            cách:
                          </span>
                        </div>
                        <div>
                          <Image
                            className="symbol-atl"
                            width={20}
                            height={20}
                            alt="checked-tick"
                            src={"imgs/svgs/checked-tick.svg"}
                          />
                          <span>
                            Nộp hồ sơ online qua email:{" "}
                            <strong>tuyendungct7@mobifone.vn</strong>
                          </span>
                        </div>
                        <div>
                          <Image
                            className="symbol-atl"
                            width={20}
                            height={20}
                            alt="checked-tick"
                            src={"imgs/svgs/checked-tick.svg"}
                          />
                          <span>
                            Nộp hồ sơ trực tiếp qua bưu điện tại địa chỉ Phòng
                            Tổng hợp, Công ty Dịch vụ MobiFone Khu vực 7 - 16
                            Trường Chinh, phường Tân Lợi, thành phố Buôn Ma
                            Thuột, tỉnh Đắk Lắk.
                          </span>
                        </div>
                        <div className="boxJobMeta meta">
                          <div className="jobMetaItem number">
                            <Image
                              className="symbol-atl"
                              width={20}
                              height={20}
                              alt="user"
                              src={"imgs/svgs/user.svg"}
                            />
                            <span>Số lượng : </span>
                            <span>&nbsp;</span>
                            <strong> {item.quantity}</strong>
                          </div>
                          <div className="jobMetaItem number">
                            <i className="icon-location mt-1"></i>
                            <span>&nbsp;</span>{" "}
                            <strong> {item.location}</strong>
                          </div>
                          <div className="jobMetaItem deadline">
                            <span>Hạn chót : </span> <span>&nbsp;</span>{" "}
                            <strong> {item.deadline}</strong>
                          </div>
                          {/* <a
                            href="/"
                            className={`btn-houze btn-solid btn-apply`}
                          >
                            <i className="icon-call-connecting" />
                            <span>Nộp CV</span>
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
