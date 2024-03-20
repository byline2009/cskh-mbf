// interface ILink {
//   label: string
//   link: string
// }

const infoLink = [
  {
    label: "Hỗ trợ khách hàng",
    link: "/ho-tro-khach-hang",
  },
  {
    label: "Câu hỏi thường gặp",
    link: "/cau-hoi-thuong-gap",
  },
  {
    label: "Đăng kí thông tin",
    link: "https://www.mobifone.vn/tai-khoan/kiem-tra-dang-ky-thong-tin",
  },
] as any[];

const companyLink = [
  {
    label: "Về chúng tôi",
    link: "https://mobifone.vn/gioi-thieu",
    newTab: true,
  },
  {
    label: "Hợp tác với MobiFone",
    link: "https://mobifone.group/gioi-thieu/hop-tac-voi-mobifone",
    newTab: true,
  },
  {
    label: "Tuyển dụng",
    link: "https://mobifone.vn/tuyen-dung",
    newTab: true,
  },
  {
    label: "Tải Logo",
    link: "https://www.mobifone.vn/assets/source/file/logofontchuMobiFone.rar",
    newTab: true,
  },
] as any[];

const serviceLink = [
  {
    label: "Điều khoản sử dụng",
    link: "https://www.mobifone.vn/dieu-khoan-su-dung",
  },
  {
    label: "Bảo mật thông tin",
    link: "https://www.mobifone.vn/bao-mat-thong-tin",
  },
] as any[];

const menuCategory = [
  {
    label: "Trang chủ",
    link: "/",
  },
  {
    label: "Kiểm tra thuê bao",
    link: "/kiem-tra-thue-bao",
  },
  {
    label: "Câu hỏi thường gặp",
    link: "/cau-hoi-thuong-gap",
  },
  {
    label: "Tuyển dụng",
    link: "/tuyen-dung",
  },
];

const topSliders = [
  {
    imgSrc: "imgs/sliders/slider-1.jpeg",
  },
  {
    imgSrc: "imgs/sliders/slider-2.jpg",
  },
  {
    imgSrc: "imgs/sliders/slider-3.jpeg",
  },
  {
    imgSrc: "imgs/sliders/slider-4.jpg",
  },
  {
    imgSrc: "imgs/sliders/slider-5.jpg",
  },
  {
    imgSrc: "imgs/sliders/slider-6.jpeg",
  },
];

const questions1 = [
  {
    q: "Mua thẻ cào nạp tiền nhưng hệ thống báo thẻ đã nạp tôi phải làm gì?",
    a: " Khách hàng liên hệ lại nơi mua thẻ để được hỗ trợ.",
    id: "goi-cuoc-1",
  },
  {
    q: "TB trả sau và trả trước đang chuyển vùng quốc tế có thể nạp tiền hay thanh toán bằng mobiEZ được không?",
    a: "Được",
  },
  {
    q: "Thuê bao Fast Connnect trả trước có ngày sử dụng tối đa là bao nhiêu ngày?",
    a: "60 ngày sử dụng",
  },
  {
    q: "Thuê bao Fast Connnect trả trước có ngày sử dụng tối đa là bao nhiêu ngày?",
    a: "60 ngày sử dụng",
  },
  {
    q: "Thời hạn giữ số của thuê bao khi bị khóa 2 chiều là bao nhiêu ngày?",
    a: "30 ngày",
  },
  {
    q: "Chuyển đổi giữa các hình thức thuê bao trả trước được miễn phí phải không?",
    a: "Nếu tài khoản chính của thuê bao dưới 50.000đ thì phí chuyển đổi là 5.000đ/ lần. Nếu tài khoản chính của thuê bao từ 50.000đ trở lên thì phí chuyển đổi là 10% tài khoản chính/ lần",
  },
  {
    q: "Mỗi KH cá nhân có thể đứng tên bao nhiêu thuê bao trả sau?",
    a: "Tối đa 5TB",
  },
];

const mostRead = [
  {
    title: "Đất nền có sổ đỏ liền kề TP.HCM thu hút nhiều nhà đầu tư",
    publishDay: "21 Tháng 1, 2021",
    imgSrc: "most-read-1.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title: 'Nguồn cung nhà ở TP.HCM sẽ đình trệ khi "siết" tín dụng BĐS ca...',
    publishDay: "9 Tháng 10, 2020",
    imgSrc: "most-read-2.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title: "Quy hoạch không gian ngầm của Hà Nội phủ 20 quận, huyện",
    publishDay: "16 Tháng 2, 2021",
    imgSrc: "most-read-3.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title:
      "Cầu Thủ Thiêm 2 thông xe, Paris Thủ Thiêm trở thành điểm sáng đầu...",
    publishDay: "2 Tháng 4, 2021",
    imgSrc: "most-read-4.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title: "Đồng Tháp duyệt nhiệm vụ quy hoạch KĐT Mỹ Hòa và Đốc ...",
    publishDay: "11 Tháng 4, 2020",
    imgSrc: "most-read-5.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title: "Chuyên gia dự báo xu hướng của thị trường bất động sản 2022",
    publishDay: "1 Tháng 7, 2020",
    imgSrc: "most-read-6.jpg",
    linkBlog: "/blog-detail",
  },
];

const newBlog = [
  {
    title: "Thị trường bất động sản phía Nam “mất nhiệt”",
    publishDay: "3 Tháng 4, 2020",
    imgSrc: "new-blog-1.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title:
      "Xuất hiện nguồn cung căn hộ dưới 2 tỷ đồng ngay đường Phạm Văn Đồng",
    publishDay: "7 Tháng 1, 2021",
    imgSrc: "new-blog-2.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title:
      'Nguồn cung nhà ở TP.HCM sẽ đình trệ khi "siết" tín dụng BĐS cao cấp',
    publishDay: "23 Tháng 10, 2020",
    imgSrc: "new-blog-3.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title:
      "Nhà phố hai mặt tiền tại The Manor Central Park - tinh hoa thương mại",
    publishDay: "22 Tháng 9, 2021",
    imgSrc: "new-blog-4.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title: "Tập đoàn Kavi công bố dự án Tân Uyên Central Point",
    publishDay: "17 Tháng 9, 2020",
    imgSrc: "new-blog-5.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title: "Bong bóng giá đất xuất hiện cục bộ, người mua nên làm gì?",
    publishDay: "20 Tháng 7, 2020",
    imgSrc: "new-blog-6.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title: "Giá thuê mặt bằng bán lẻ TP.HCM phục hồi",
    publishDay: "14 Tháng 6, 2020",
    imgSrc: "new-blog-7.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title:
      "DKRA Vietnam làm Tổng đại lý tiếp thị & phân phối khối căn hộ du lịch biển Ngô Mây, Quy Nhơn",
    publishDay: "9 Tháng 7, 2020",
    imgSrc: "new-blog-8.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title: "Mega Royal City: Tái định nghĩa đô thị xanh giữa lòng Đồng Xoài",
    publishDay: "17 Tháng 10, 2021",
    imgSrc: "new-blog-9.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title: "Tranh thủ mua nhà trước nỗi lo tăng giá bán",
    publishDay: "3 Tháng 7, 2021",
    imgSrc: "new-blog-10.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title: "Nhà đầu tư tay ngang khó thoát hàng khi sốt đất hạ nhiệt",
    publishDay: "18 Tháng 7, 2020",
    imgSrc: "new-blog-11.jpg",
    linkBlog: "/blog-detail",
  },
  {
    title:
      "Houze Group nhận giải thưởng đổi mới sáng tạo 2020 trong lĩnh vực bất động sản.",
    publishDay: "26 Tháng 3, 2021",
    imgSrc: "new-blog-12.jpg",
    linkBlog: "/blog-detail",
  },
];

const searchData = [
  {
    title: "Thị trường bất động sản phía Nam “mất nhiệt”",
    publishDay: "3 Tháng 4, 2020",
    imgSrc: "new-blog-1.jpg",
    linkBlog: "/blog-detail",
    subject: "Đầu tư",
  },
  {
    title:
      "Xuất hiện nguồn cung căn hộ dưới 2 tỷ đồng ngay đường Phạm Văn Đồng",
    publishDay: "7 Tháng 1, 2021",
    imgSrc: "new-blog-2.jpg",
    linkBlog: "/blog-detail",
    subject: "Đầu tư",
  },
  {
    title:
      'Nguồn cung nhà ở TP.HCM sẽ đình trệ khi "siết" tín dụng BĐS cao cấp',
    publishDay: "23 Tháng 10, 2020",
    imgSrc: "new-blog-3.jpg",
    linkBlog: "/blog-detail",
    subject: "Phân tích",
  },
  {
    title:
      "Nhà phố hai mặt tiền tại The Manor Central Park - tinh hoa thương mại",
    publishDay: "22 Tháng 9, 2021",
    imgSrc: "new-blog-4.jpg",
    linkBlog: "/blog-detail",
    subject: "Kiến thức",
  },
  {
    title: "Tập đoàn Kavi công bố dự án Tân Uyên Central Point",
    publishDay: "17 Tháng 9, 2020",
    imgSrc: "new-blog-5.jpg",
    linkBlog: "/blog-detail",
    subject: "Thị trường",
  },
  {
    title: "Bong bóng giá đất xuất hiện cục bộ, người mua nên làm gì?",
    publishDay: "20 Tháng 7, 2020",
    imgSrc: "new-blog-6.jpg",
    linkBlog: "/blog-detail",
    subject: "Góc nhìn",
  },
  {
    title: "Giá thuê mặt bằng bán lẻ TP.HCM phục hồi",
    publishDay: "14 Tháng 6, 2020",
    imgSrc: "new-blog-7.jpg",
    linkBlog: "/blog-detail",
    subject: "Góc nhìn",
  },
  {
    title:
      "DKRA Vietnam làm Tổng đại lý tiếp thị & phân phối khối căn hộ du lịch biển Ngô Mây, Quy Nhơn",
    publishDay: "9 Tháng 7, 2020",
    imgSrc: "new-blog-8.jpg",
    linkBlog: "/blog-detail",
    subject: "Thị trường",
  },
  {
    title: "Mega Royal City: Tái định nghĩa đô thị xanh giữa lòng Đồng Xoài",
    publishDay: "17 Tháng 10, 2021",
    imgSrc: "new-blog-9.jpg",
    linkBlog: "/blog-detail",
    subject: "Kiến thức",
  },
  {
    title: "Tranh thủ mua nhà trước nỗi lo tăng giá bán",
    publishDay: "3 Tháng 7, 2021",
    imgSrc: "new-blog-10.jpg",
    linkBlog: "/blog-detail",
    subject: "Đầu tư",
  },
  {
    title: "Nhà đầu tư tay ngang khó thoát hàng khi sốt đất hạ nhiệt",
    publishDay: "18 Tháng 7, 2020",
    imgSrc: "new-blog-11.jpg",
    linkBlog: "/blog-detail",
    subject: "Đầu tư",
  },
  {
    title:
      "Houze Group nhận giải thưởng đổi mới sáng tạo 2020 trong lĩnh vực bất động sản.",
    publishDay: "26 Tháng 3, 2021",
    imgSrc: "new-blog-12.jpg",
    linkBlog: "/blog-detail",
    subject: "Thị trường",
  },
];

const menuData = [
  {
    label: "Mua",
    link: "https://integration-houze-vn.houze.io/mua",
  },
  {
    label: "Bán",
    link: "https://integration-houze-vn.houze.io/ban",
  },
  {
    label: "Cho thuê",
    link: "https://integration-houze-vn.houze.io/cho-thue",
  },
  {
    label: "Dịch vụ",
    link: "https://integration-houze-vn.houze.io/dich-vu",
    children: [
      {
        label: "Tìm chuyên viên tư vấn",
        link: "https://integration-houze-vn.houze.io/",
        description: "Để giúp bạn tìm hiểu sản phẩm dễ dàng hơn.",
      },
      {
        label: "Gói vay mua nhà",
        link: "https://integration-houze-vn.houze.io/",
        description: "Giúp bạn có thêm sự lựa chọn về kinh phí.",
      },
      {
        label: "Mua nhà với Houze",
        link: "https://integration-houze-vn.houze.io/",
        description: "Giúp quá trình tìm mua nhà của bạn trở nên đơn giản hơn.",
      },
    ],
  },
  {
    label: "Tin tức",
    link: "https://integration-houze-vn.houze.io/tin-tuc",
    children: [
      {
        label: "Tin tức 1",
        link: "https://integration-houze-vn.houze.io/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      },
      {
        label: "Tin tức 2",
        link: "https://integration-houze-vn.houze.io/",
        description: "Ducimus quibusdam repellendus quos sequi nemo",
      },
    ],
  },
  {
    label: "Về chúng tôi",
    link: "https://integration-houze-vn.houze.io/about-us",
  },
];
const errorMsale = [
  {
    error:
      "0252, java.lang.Exception: Không lấy được thông tin thuê bao trên IN",
    explain:
      "Không lấy được thông tin thuê bao trên IN. Người dùng thực hiện lại",
  },
  {
    error: "0252, Lỗi trong quá trình gọi API đối soát CSDL QG DC",
    explain: "Lỗi trong quá trình gọi API đối soát CSDL QG DC",
  },
  {
    error: "0278, Huyện hoặc Phường",
    explain: "Mã địa bàn Huyện/Phường chưa khớp dữ liệu, vui lòng kiểm tra lại",
  },
  {
    error: "0279,Thuê bao không được thay đổi dịch vụ GPRS",
    explain:
      "Thuê bao không được hủy dịch vụ GPRS khi đấu mới, vui lòng kiểm tra lại",
  },
  {
    error: "0666, Không tồn tại IMSI",
    explain: "IMSI/Serial Sim không chính xác, vui lòng kiểm tra lại",
  },
  {
    error: "0749, Lỗi từ hệ thống: ERR - ISDN, chua duoc gan loai so",
    explain: "Thuê bao {Số TB} chưa được gán loại số, vui lòng kiểm tra lại",
  },
  {
    error:
      "1731, Theo quy định mới, thuê bao doanh nghiệp số hợp đồng phải trùng với số GPKD",
    explain:
      "Theo quy định mới, thuê bao doanh nghiệp, số hợp đồng phải trùng với số GPKD",
  },
  {
    error: "9991, User không thuộc cửa hàng đã chọn,",
    explain:
      "Tài khoản đấu nối không thuộc cửa hàng đã chọn, vui lòng kiểm tra lại",
  },
  {
    error: "9994, Thong tin xac thuc khong chinh xac",
    explain:
      "Thông tin tài khoản đấu nối không chính xác, vui lòng kiểm tra lại",
  },
  {
    error: "9994, User name hoac Mat khau nguoi su dung khong hop le",
    explain:
      "Tài khoản hoặc Mật khẩu đấu nối của người sử dụng không hợp lệ, vui lòng kiểm tra lại",
  },
  {
    error: "An invalid response was received from the upstream server",
  },
  {
    error: "arrRegProm khong hop le",
    explain: "Bộ tham số mã khuyến mại không hợp lệ, vui lòng kiểm tra lại",
  },
  {
    error: "Bạn không có quyền thực hiện chức năng này",
    explain: "Bạn không có quyền thực hiện chức năng này",
  },
  {
    error: "bị cấm thực hiện tác động này",
    explain: "Tài khoản bị cấm thực hiện tác động này",
  },
  {
    error: "Broken pipe(Write failed)",
  },
  {
    error: "cen_code và shop_code không hợp lệ",
    explain:
      "Mã Cencode (Trung tâm) và ShopCode (Cửa hàng) không hợp lệ, vui lòng kiểm tra lại",
  },
  {
    error: "Có lỗi từ hệ thống OCS Support (HLRGW)",
    explain: "Có lỗi từ hệ thống OCS Support (HLRGW)",
  },
  {
    error: "Có lỗi từ hệ thống VASP_PROM",
    explain: "Có lỗi từ hệ thống VASP_PROM",
  },
  {
    error: "com.google.gson.stream.MalformedJsonException",
  },
  {
    error: "Cung giay to khac ten(ten dai dien) voi thue bao tra truoc",
    explain:
      "Cùng số giấy tờ khác tên (tên đại diện) với thuê bao trả trước {Số TB}, vui lòng kiểm tra lại",
  },
  {
    error: "dang duoc gan chi dau tra sau",
    explain:
      "Thuê bao {Số TB} đang được gán chỉ đấu trả sau, vui lòng kiểm tra lại",
  },
  {
    error: "Dia chi IP",
    explain:
      "Tài khoản đấu nối chưa được khai báo địa chỉ IP mSale Pro, vui lòng kiểm tra lại",
  },
  {
    error: "duoc phan cho cua hang truc tuyen",
    explain:
      "Thuê bao {Số TB} được phân cho cửa hàng trực tuyến {Mã cửa hàng}, vui lòng kiểm tra lại",
  },
  {
    error: "duoc phan cho trung tam",
    explain:
      "Thuê bao {Số TB} được phân cho trung tâm {Mã trung tâm}, vui lòng kiểm tra lại",
  },
  {
    error: "E05, khong duoc DKTT TBTT hoa mang sau ngay",
    explain: "Không được DKTT TBTT hòa mạng sau ngày {Ngày}",
  },
  {
    error: "E06 Cung giay to khac ten(ten dai dien) voi thue bao tra truoc",
    explain:
      "Cùng số giấy tờ khác tên (tên đại diện) với thuê bao trả trước {Số TB}, {Tên KH}. Vui lòng kiểm tra lại",
  },
  {
    error: "ERR - ISDN",
    explain: "Người dùng kiểm tra lại số thuê bao",
  },
  {
    error: "ERR008, So IMSI dang dau cho so",
    explain:
      "Số IMSI/Serial Sim đang đấu cho số {Số TB}, vui lòng kiểm tra lại",
  },
  {
    error: "FIS-WS-E029",
  },
  {
    error: "FSS-00009, Database.getValue Additional info",
  },
  {
    error: "HLR9820",
  },
  {
    error: "HoatDong",
  },
  {
    error: "khong duoc phan cho cua hang cua ban, ban khong co quyen thuc hien",
    explain:
      "Thuê bao {Số TB} không được phân cho cửa hàng của bạn, bạn không có quyền thực hiện",
  },
  {
    error:
      "không được phép lock/release vì không phải số mới hoặc không phải số đã ngưng sử dụng",
    explain:
      "Thuê bao {Số TB} không được phép lock/release vì không phải số mới hoặc không phải số đã ngưng sử dụng, vui lòng kiểm tra lại",
  },
  {
    error: "Không tồn tại thông tin số thuê bao",
    explain: "Không tồn tại thông tin số thuê bao",
  },
  {
    error: "la so danh rieng cho cua hang",
    explain:
      "Thuê bao {Số TB} là số dành riêng cho cửa hàng {Mã cửa hàng}, vui lòng kiểm tra lại",
  },
  {
    error: "Mat khau cua ban da het han su dung!",
    explain:
      "Mật khẩu tài khoản đấu nối đã hết hạn sử dụng. Vui lòng cập nhật lại",
  },
  {
    error: "ngung su dung chua qua 30 ngay",
    explain: "Thuê bao {Số TB} ngừng sử dụng chưa quá 30 ngày",
  },
  {
    error: "Read timed out, error.ccGw.remoteException",
    explain:
      "Quá thời gian phản hồi, người dùng kiểm tra lại trạng thái thuê bao và thực hiện lại",
  },
  {
    error: "Số Imsi Đã hết hiệu lực hoặc không tồn tại",
    explain:
      "Số IMSI/Serial Sim đã hết hiệu lực hoặc không tồn tại, vui lòng kiểm tra lại.",
  },
  {
    error: "ERR024: So 788615968 la so danh rieng cho cua hang 3DNA10006",
    explain:
      "Thuê bao {Số TB} là số dành riêng cho cửa hàng {Mã cửa hàng}, vui lòng kiểm tra lại",
  },
  {
    error:
      "java.lang.Exception: session=71100000016166124,transid=1702311086496,message=Wait message timeout,command=create_sub,status=-1;, error.ccGw.webserviceError",
    explain:
      "Quá thời gian phản hồi, người dùng kiểm tra lại trạng thái thuê bao và thực hiện lại",
  },
  {
    error:
      "E02|2262_MOBIFONE_KHCN_User da thuc hien 01 giao dich trong vong 1 phut",
    explain:
      "Tài khoản đấu nối của người dùng đã thực hiện 01 giao dịch trong vòng 1 phút. Vui lòng thực hiện lại sau 1 phút.",
  },
  {
    error:
      "Số 906240186 không được phép lock/release vì không phải số mới hoặc không phải số đã ngưng sử dụng!",
    explain:
      "Thuê bao {Số TB} không được phép lock/release vì không phải số mới hoặc không phải số đã ngưng sử dụng, vui lòng kiểm tra lại",
  },
  {
    error: "Tham số strAppObject có đầu vào không hợp lệ",
    explain:
      "Tham số đối tượng khách hàng có đầu vào không hợp lệ, vui lòng kiểm tra lại.",
  },
  {
    error: "Thoi gian truy cap khong hop le",
    explain:
      "Thời gian truy cập hệ thống không hợp lệ ({Thời gian}), vui lòng kiểm tra lại",
  },
  {
    error: "Thong tin xac thuc khong chinh xac!",
    explain:
      "Thông tin tài khoản đấu nối không chính xác, vui lòng kiểm tra lại",
  },
  {
    error: "tồn tại trên HLR",
    explain:
      "Thuê bao {Số TB} đã tồn tại trên HLR. Người dùng động bộ lại trên TC QLKH",
  },
  {
    error: "XuatKho",
    explain: "Xuất kho BHM eSim thành công",
  },
  {
    error:
      "E15|Thue bao khong phai M2M, tong dai khong duoc chon doi tuong cho thiet bi.",
    explain:
      "Thuê bao không phải M2M, người dùng không được chọn đối tượng Cho thiết bị, vui lòng kiểm tra lại",
  },
  {
    error: "Quốc tịch không hợp lệ",
    explain: "Quốc tịch không hợp lệ, vui lòng kiểm tra lại",
  },
  {
    error: "SIM/So 902111903 dang duoc su dung boi User khac",
    explain:
      "Thuê bao {Số TB} đang được sử dụng bởi Tài khoản đấu nối khác. Vui lòng kiểm tra lại",
  },
  {
    error:
      "User name hoac Mat khau nguoi su dung khong hop le!. Ban chi con 5 lan nhap sai password",
    explain:
      "Mật khẩu tài khoản đấu nối của người sử dụng không hợp lệ. Bạn chỉ còn {Số lần} lần nhập sai Mật khẩu.",
  },
  {
    error:
      "E04|2262_MOBIFONE_KHCN_CMND/HC 044069008478 qua 3 TB User khong duoc phep dang ky",
    explain: "Số giấy tờ {Số giấy tờ} quá 3 thuê bao, không được phép đăng ký",
  },
  {
    error: "Tham số strAppObject có đầu vào không hợp lệ",
    explain:
      "Tham số đối tượng khách hàng có đầu vào không hợp lệ, vui lòng kiểm tra lại",
  },
  {
    error: ", Đối soát không khớp với thông tin CSDL QG DC",
    explain: "Đối soát không khớp với thông tin CSDL QG DC",
  },
  {
    error:
      "Thuê bao 706006662 vừa thực hiện chặn/mở. Bạn vui lòng thực hiện sau 2 phút!",
    explain:
      "Thuê bao {Số TB} vừa thực hiện chặn/mở. Vui lòng thực hiện sau {Số phút} phút",
  },
  {
    error:
      "(R2.841.898) Không tìm thấy thông tin nhân viên trên hệ thống TCQLKH-KHDN tương ứng với use",
    explain:
      "Không tìm thấy thông tin nhân viên trên hệ thống TCQLKH-KHDN tương ứng với Tài khoản đấu nối đang thực hiện",
  },
  {
    error: "Bạn phải nhập trường RegType",
    explain: "Bạn phải nhập trường số điện thoại khi đấu thuê bao FC",
  },
  {
    error: "Tham số strAppObject có đầu vào không hợp lệ]",
    explain:
      "Tham số đối tượng khách hàng có đầu vào không hợp lệ, vui lòng kiểm tra lại",
  },
  {
    error: "Thiếu tham số nghiệp vụ đầu vào strReason]",
    explain:
      "Thiếu tham số nghiệp vụ đầu vào lý do tác động, vui lòng kiểm tra lại",
  },
  {
    error: "SIM/So 762904918 dang duoc su dung boi chuc nang khac",
    explain:
      "Thuê bao {Số TB} đang được sử dụng bởi một nghiệp vụ khác, vui lòng kiểm tra lại",
  },
  {
    error: "User đại lý không được phép thực hiện thao tác này",
    explain:
      "Tài khoản đấu nối của Đại lý không được phép thực hiện nghiệp vụ này.",
  },
  {
    error:
      "E15|Thue bao khong phai M2M, tong dai khong duoc chon doi tuong cho thiet bi",
    explain:
      "Thuê bao không phải M2M, người dùng không được chọn đối tượng Cho thiết bị, vui lòng kiểm tra lại",
  },
  {
    error: "Lỗi trong khi đổi sim Sim được đưa vào danh sách cắt hủy khỏi AUC",
    explain: "Sim được đưa vào danh sách cắt hủy khỏi AUC",
  },
  {
    error: "Thoi gian truy cap khong hop le (06:40:44)",
    explain:
      "Thời gian truy cập hệ thống không hợp lệ ({Thời gian}), vui lòng kiểm tra lại",
  },
  {
    error: "Tham số strIdIssueDate phải nhỏ hơn ngày hiện tại",
    explain:
      "Tham số ngày cấp phải nhỏ hơn ngày hiện tại, vui lòng kiểm tra lại",
  },
  {
    error: ", Bạn phải nhập trường strContactName",
    explain:
      "Bạn phải nhập trường dữ liệu thông tin liên hệ, vui lòng kiểm tra lại",
  },
  {
    error:
      "User name hoac Mat khau nguoi su dung khong hop le!. Ban chi con 4 lan nhap sai password",
    explain:
      "Mật khẩu tài khoản đấu nối của người sử dụng không hợp lệ. Bạn chỉ còn {Số lần} lần nhập sai Mật khẩu.",
  },
  {
    error:
      "Lỗi từ hệ thống: Thuê bao 931998145 đang Chặn 1C(KHYC) phải mở Bình thường Trước!",
    explain:
      "Thuê bao {Số TB} đang ở trạng thái {Tên trạng thái}. Vui lòng mở {Trạng thái} trước",
  },
  {
    error: "Không tồn tại thông tin số thuê bao 974217612",
    explain:
      "Không tồn tại thông tin số thuê bao {Số TB}, vui lòng kiểm tra lại",
  },
  {
    error: "ERR Khong ton tai thong tin Doanh Nghiep",
    explain: "Không tồn tại thông tin Doanh nghiệp, vui lòng kiểm tra lại",
  },
  {
    error:
      "[java.sql.SQLException: ORA-06502: PL/SQL: numeric or value error: character string buffer too small",
  },
  {
    error: 'ORA-06512: at "CUSMAN_API.API_KHDN_GET_CORPORATE", line 268',
  },
  {
    error: "ORA-06512: at line 4",
  },
  {
    error: "Response return from TCQLKH: E|ERR01 : Khong tim thay thue bao",
    explain: "Không tìm thấy thông tin thuê bao, vui lòng kiểm tra lại",
  },
  {
    error: "[502 Bad Gateway: [{",
  },
  {
    error:
      '"message":"An invalid response was received from the upstream server',
  },
  {
    error: "Mã Tỉnh/Thành, Quận/Huyện hoặc Phường/Xã không tồn tại",
    explain: "Mã Tỉnh/Thành, Quận/Huyện hoặc Phường/Xã không tồn tại",
  },
  {
    error:
      "E06|936231773|Z6544544: Cung giay to khac ten(ten dai dien) voi thue bao tra truoc: 936228974, Dey Shantanu",
    explain:
      "Cùng số giấy tờ khác tên (tên đại diện) với thuê bao trả trước {Số TB}, {Tên KH}. Vui lòng kiểm tra lại",
  },
  {
    error: "Số thuê bao 793487079 bị cấm thực hiện tác động này!",
    explain: "Thuê bao {Số TB} bị cấm thực hiện tác động này",
  },
  {
    error: "Ngày cấp CMT không nhỏ quá 15 năm",
    explain: "Ngày cấp CMT không nhỏ quá 15 năm",
  },
  {
    error: "sim không thuộc cửa hàng đã chọn",
    explain:
      "Sim không thuộc cửa hàng đã chọn {Mã cửa hàng}, vui lòng kiểm tra lại",
  },
  {
    error: "Bạn phải nhập trường strTel",
    explain: "Bạn phải nhập trường số điện thoại khi đấu thuê bao FC",
  },
  {
    error: "Lỗi không tìm thấy số liệu khi kết nối đến CSDL QG DC",
    explain: "Lỗi không tìm thấy số liệu khi kết nối đến CSDL QG DC",
  },
  {
    error:
      "Lỗi trong khi đổi sim Số IMSI và SERIAL đang được sử dụng trong hệ thống",
    explain:
      "Lỗi trong khi đổi sim: Số IMSI và Serial Sim đang được sử dụng trong hệ thống",
  },
  {
    error: "Mã nhân viên phát triển không tồn tại",
    explain: "Mã nhân viên phát triển không tồn tại, vui lòng kiểm tra lại",
  },
  {
    error: ", Bạn phải nhập trường strRegBussiness",
    explain: "Bạn phải nhập trường dữ liệu Mã Doanh nghiệp",
  },
  {
    error: ", ERR-003, Khong con eSim tren kho TCQLKH",
    explain: "Không còn eSim trên kho TCQLKH",
  },
  {
    error: "0666, Không tồn tại IMSI",
    explain: "Không tồn tại IMSI, vui lòng kiểm tra lại",
  },
  {
    error: "Tham số strAppObject có đầu vào không hợp lệ",
    explain:
      "Tham số đối tượng khách hàng có đầu vào không hợp lệ, vui lòng kiểm tra lại",
  },
  {
    error: "So ISDN 901515426 dang duoc gan chi dau tra sau.",
    explain: "Thuê bao {Số TB} đang được gán chỉ đấu trả sau",
  },
  {
    error: "Additional info: validateImsiIsdn",
    explain: "Vui lòng kiểm tra lại Serial Sim và số thuê bao",
  },
  {
    error: "ERR - ISDN: So 705836225 duoc phan cho trung tam 5.",
    explain: "Thuê bao {Số TB} được phân cho trung tâm {Mã trung tâm}",
  },
  {
    error: "Additional info: validateImsiIsdn, error.ccGw.webserviceError",
    explain: "Vui lòng kiểm tra lại Serial Sim và số thuê bao",
  },
  {
    error: ", Thuê bao không được thay đổi dịch vụ GPRS",
    explain: "Thuê bao không được hủy dịch vụ GPRS khi đấu mới",
  },
  {
    error:
      ", E04|2262_MOBIFONE_KHCN_CMND/HC 060302001183 qua 3 TB User khong duoc phep dang ky!",
    explain: "Số giấy tờ {Số giấy tờ} quá 3 thuê bao, không được phép đăng ký",
  },
  {
    error: "ERR - ISDN: So 795294438 duoc phan cho cua hang truc tuyen",
    explain: "Thuê bao {Số TB} được phân cho cửa hàng trực tuyến {Mã cửa hàng}",
  },
  {
    error: "Số Imsi Đã hết hiệu lực hoặc không tồn tạ",
    explain:
      "Số IMSI / Serial Sim đã hết hiệu lực hoặc không tồn tại, vui lòng kiểm tra lại.",
  },
  {
    error: "Số thuê bao 901701379 đang được gán cho doanh nghiệp có GPKD 139",
    explain: "Thuê bao {Số TB} đang được gán cho Doanh nghiệp có GPKD 139",
  },
  {
    error: "User không có quyền tác động số TCT",
    explain: "Tài khoản đấu nối không có quyền tác động số Tổng Công ty.",
  },
  {
    error: "So ISDN 936404736 ngung su dung chua qua 30 ngay.",
    explain: "Thuê bao {Số TB} ngừng sử dụng chưa quá 30 ngày",
  },
  {
    error: "Additional info: validateImsiIsdn",
    explain: "Vui lòng kiểm tra lại Serial Sim và số thuê bao",
  },
  {
    error:
      '"[BusinessError(super=com.mobifone.msaleservice.common.service.BusinessError@f5320111, errorCode=error.changeSimBhmEsim.simTypeNotValid, params=[Response Result: 0], errorMessage=null)]"',
    explain: "Loại sim của BHM esim ban đầu không phải esim",
  },
  {
    error:
      '"Lỗi kết nối khi thực hiện gửi lệnh tới CC-Gateway (readTimeOut). Chi tiết: [I/O error on POST request for &quot;http://10.38.29.90:80/msale-intergration-modules/api/ccGwWs/prepaidRegExForSupport&quot;: Read timed out; nested exception is java.net.SocketTimeoutException: Read timed out]"',
    explain:
      "Quá thời gian phản hồi, người dùng kiểm tra lại trạng thái thuê bao và thực hiện lại",
  },
];
const arrayPackage = [
  "D15",
  "D30",
  "MBF30",
  "D5",
  "D10",
  "D7",
  "D24",
  "MXH100",
  "MXH80",
  "KC90",
  "TK135",
  "PT70",
  "MF159",
  "MFY",
  "MFY200",
  "12MXH100",
  "12MXH80",
  "6MXH100",
  "6MXH80",
  "12TK135",
  "3TK135",
  "6TK135",
  "12PT70",
  "3PT70",
  "6PT70",
  "6MF159",
  "12MF159",
  "CD",
  "V12",
  "ED",
  "BD",
  "KF",
  "CT70",
  "CGDG",
  "V90",
  "MS70",
  "MCD85",
  "NCT85",
  "NCT70",
  "AG70",
  "ED70",
];

export {
  infoLink,
  companyLink,
  serviceLink,
  menuData,
  mostRead,
  newBlog,
  topSliders,
  menuCategory,
  searchData,
  questions1,
  errorMsale,
  arrayPackage,
};
