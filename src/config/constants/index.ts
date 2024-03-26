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
  {
    code: "D15",
    price: 15000,
    cycle: 3,
    revenueOld: 6818,
    revenue: 3409.090909090909,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "7 GB/7 ngày ",
    CVQT: 0,
    permission: 0,
    subcriber: "Từ 1/10/2021: Thuê bao trả trước, trả sau của MobiFone.",
    typeCycle: "Ngày",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn D15 gửi 999",
    cancelSubcriber: "Soạn HUY D15 gửi 999",
    cancelAutoSubriber: "Soạn KGH D15 gửi 999",
  },
  {
    code: "D30",
    price: 30000,
    cycle: 7,
    revenueOld: 9818,
    revenue: 6818.181818181818,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "30 GB data / 07 ngày",
    CVQT: 0,
    permission: 0,
    subcriber: "Từ 1/10/2021: Thuê bao trả trước, trả sau của MobiFone.",
    typeCycle: "Ngày",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn D30 gửi 999",
    cancelSubcriber: "Soạn HUY D30 gửi 999",
    cancelAutoSubriber: "Soạn KGH D30 gửi 999",
  },
  {
    code: "MBF30",
    price: 30000,
    cycle: 7,
    revenueOld: 8182,
    revenue: 6818.181818181818,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1GB/ngày",
    CVQT: 0,
    permission: 0,
    subcriber: "Không đăng ký đồng thời gói MAXx, D5, D7, D10 và gói MBF30",
    typeCycle: "Ngày",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn MBF30 gửi 789",
    cancelSubcriber: "Soạn HUY MBF30 gửi 789",
    cancelAutoSubriber: "Soạn KGH MBF30 gửi 789",
  },
  {
    code: "D5",
    price: 5000,
    cycle: 1,
    revenueOld: 0,
    revenue: 1136.3636363636363,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "8 GB/ngày",
    CVQT: 0,
    permission: 0,
    subcriber: "Từ 1/10/2021: Thuê bao trả trước, trả sau của MobiFone.",
    typeCycle: "Ngày",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn D5 gửi 999",
    cancelSubcriber: "Soạn HUY D5 gửi 999",
    cancelAutoSubriber: "Soạn KGH D5 gửi 999",
  },
  {
    code: "D10",
    price: 10000,
    cycle: 1,
    revenueOld: 0,
    revenue: 2272.7272727272725,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1.2 GB/ngày",
    CVQT: 0,
    permission: 0,
    subcriber: " Thuê bao trả trước, trả sau của MobiFone.",
    typeCycle: "Ngày",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn D10 gửi 999",
    cancelSubcriber: "Soạn HUY D10 gửi 999",
    cancelAutoSubriber: "Soạn KGH D10 gửi 999",
  },
  {
    code: "D7",
    price: 7000,
    cycle: 1,
    revenueOld: 0,
    revenue: 1590.9090909090908,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "24 GB/ngày",
    CVQT: 0,
    permission: 0,
    subcriber: " Thuê bao trả trước, trả sau của MobiFone.",
    typeCycle: "Ngày",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn D7 gửi 999",
    cancelSubcriber: "Soạn HUY D7 gửi 999",
    cancelAutoSubriber: "Soạn KGH D7 gửi 999",
  },
  {
    code: "D24",
    price: 20000,
    cycle: 1,
    revenueOld: 0,
    revenue: 4545.454545454545,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: "Miễn phí truy cập Facebook (*), YouTube, TikTok",
    subcriber: " Thuê bao trả trước, trả sau của MobiFone.",
    typeCycle: "Ngày",
    typeSubcriber: "HTS",
    autoSubcriber: "không",
    methodSubcriber: "Soạn D24 gửi 999",
    cancelSubcriber: "Soạn HUY D24 gửi 999",
    cancelAutoSubriber: "Soạn KGH D24 gửi 999",
  },
  {
    code: "MXH100",
    price: 100000,
    cycle: 30,
    revenueOld: 32727,
    revenue: 22727.272727272724,
    type: "TBTT",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: "Miễn phí truy cập youtube",
    subcriber:
      "Thuê bao MobiFone trả trước phát triển mới từ 01/6/2023. Hoặc, - Thuê bao MobiFone trả trước kích hoạt trước 01/6/2023 có ARPU bình quân tháng n-1, n-2, n-3 < giá gói cước. ",
    typeCycle: "Đơn kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn MXH100 gửi 789",
    cancelSubcriber: "Soạn HUY MXH100 gửi 789",
    cancelAutoSubriber: "Soạn KGH MXH100 gửi 789",
  },
  {
    code: "MXH80",
    price: 80000,
    cycle: 30,
    revenueOld: 26182,
    revenue: 18181.81818181818,
    type: "TBTT",
    sms: 0,
    inAudio: "Miễn phí dưới 10 phút (Tối đa 1.000 phút /tháng)\r\n",
    outAudio: "30 phút",
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: 0,
    subcriber:
      "Thuê bao MobiFone trả trước phát triển mới từ 01/6/2023. Hoặc, - Thuê bao MobiFone trả trước kích hoạt trước 01/6/2023 có ARPU bình quân tháng n-1, n-2, n-3 < giá gói cước. ",
    typeCycle: "Đơn kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn MXH80 gửi 789",
    cancelSubcriber: "Soạn HUY MXH80 gửi 789",
    cancelAutoSubriber: "Soạn KGH MXH80 gửi 789",
  },
  {
    code: "KC90",
    price: 90000,
    cycle: 30,
    revenueOld: 29455,
    revenue: 20454.545454545452,
    type: "TBTT ",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "7GB/ 1 ngày",
    CVQT: 0,
    permission: 0,
    subcriber:
      "TB trả trước MobiFone, không bao gồm các thuê bao M2M, FC, MVNO và Saymee.\r\nThời gian kích hoạt trước 31/12/2022.",
    typeCycle: "Đơn kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn KC90 gửi 789",
    cancelSubcriber: "Soạn HUY KC90 gửi 789",
    cancelAutoSubriber: "Soạn KGH KC90 gửi 789",
  },
  {
    code: "TK135",
    price: 135000,
    cycle: 30,
    revenueOld: 44182,
    revenue: 30681.81818181818,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: 0,
    subcriber:
      "TBTT PTM từ 01/07/2023;\r\nTBTT, TBTS PTM trước 01/07/2023 có arpu < giá gói;\r\nTB MNP đến và M2M;\r\nThêm gói cước vào công cụ hỗ trợ đăng ký TB MNP đi;",
    typeCycle: "Đơn kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn DK TK135 gửi 789",
    cancelSubcriber: "Soạn HUY TK135 gửi 789",
    cancelAutoSubriber: "Soạn KGH TK135 gửi 789",
  },
  {
    code: "PT70",
    price: 70000,
    cycle: 30,
    revenueOld: 22909,
    revenue: 15909.090909090908,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: "Miễn phí cuộc gọi nội mạng dưới 10 phút (tối đa 1.500 phút)\r\n",
    outAudio: "200 phút liên mạng",
    Data: "6 GB/ngày",
    CVQT: 0,
    permission: "Miễn phí truy cập Facebook, YouTube ",
    subcriber:
      "Triển khai cho thuê bao hoà mạng mới, thuê bao đang hoạt động thuộc danh sách quy định",
    typeCycle: "Đơn kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn PT70 gửi 789",
    cancelSubcriber: "Soạn HUY PT70 gửi 789",
    cancelAutoSubriber: "Soạn KGH PT70 gửi 789",
  },
  {
    code: "MF159",
    price: 159000,
    cycle: 31,
    revenueOld: 52036,
    revenue: 36136.36363636363,
    type: "TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "200 GB",
    CVQT: 0,
    permission: "Miễn phí truy cập Facebook, YouTube cho thuê bao trưởng nhóm",
    subcriber:
      "Thuê bao trả sau MobiF (cá nhân, doanh nghiệp) phát triển mới từ ngày 01/6/2023.\r\nThuê bao trả sau MobiF (cá nhân, doanh nghiệp) có ARPU bình quân tháng n1, n-2, n-3 < giá gói MobiF mới: Danh sách các TBTS đủ điều kiện đăng ký tra cứu tại KMTT.\r\nThuê bao MobiFone trả trước có ARPU bình quân tháng n-1, n-2, n-3 < giá gói cước, chuyển sang trả sau MobiF (áp dụng từ 25/7/2023): Tra cứu tại KMTT\r\nThuê bao MNP đi (áp dụng từ 25/7/2023)",
    typeCycle: "Đơn kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
  },
  {
    code: "MFY",
    price: 200000,
    cycle: 30,
    revenueOld: 54545,
    revenue: 45454.54545454545,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: " 500 phút",
    outAudio: "250 phút",
    Data: "100 GB",
    CVQT: 0,
    permission: "Miễn phí truy cập Facebook, YouTube cho thuê bao trưởng nhóm",
    subcriber:
      "Các thuê bao đại diện hộ gia đình/nhóm (thuê bao trưởng nhóm) đáp ứng điều kiện dưới đây:\r\nThuê bao trả trước, trả sau phát triển mới từ 01/6/2023. Hoặc,\r\nThuê bao trả trước, trả sau hiện hữu đang không sử dụng gói cước ≥ 200.000 đồng/tháng.",
    typeCycle: "Đơn kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "DK MFY gửi 999",
    cancelSubcriber: "HUY MFYC gửi 999",
    cancelAutoSubriber: "KGH MFYC gửi 999",
  },
  {
    code: "MFY200",
    price: 200000,
    cycle: 30,
    revenueOld: 54545,
    revenue: 45454.54545454545,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: "Miễn phí truy cập Facebook (*), YouTube, TikTok",
    subcriber:
      "Các thuê bao đại diện hộ gia đình/nhóm (thuê bao trưởng nhóm) đáp ứng điều kiện dưới đây:\r\nThuê bao trả trước, trả sau phát triển mới từ 01/6/2023. Hoặc,\r\nThuê bao trả trước, trả sau hiện hữu đang không sử dụng gói cước ≥ 200.000 đồng/tháng.",
    typeCycle: "Đơn kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "DK MFY200 gửi 999",
    cancelSubcriber: "HUY MFY200C gửi 999",
    cancelAutoSubriber: "KGH MFY200C gửi 999",
  },
  {
    code: "12MXH100",
    price: 1200000,
    cycle: 360,
    revenueOld: 392727,
    revenue: 272727.2727272727,
    type: "TBTT",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: "Miễn phí truy cập youtube",
    subcriber:
      "Thuê bao MobiFone trả trước phát triển mới từ 01/6/2023. Hoặc, - Thuê bao MobiFone trả trước kích hoạt trước 01/6/2023 có ARPU bình quân tháng n-1, n-2, n-3 < giá gói cước. ",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn 12MXH100 gửi 789",
    cancelSubcriber: "Soạn HUY 12MXH100 gửi 789",
    cancelAutoSubriber: "Soạn KGH 12MXH100 gửi 789",
  },
  {
    code: "12MXH80",
    price: 960000,
    cycle: 360,
    revenueOld: 314182,
    revenue: 218181.81818181818,
    type: "TBTT",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: "Miễn phí truy cập Facebook (*), YouTube, TikTok",
    subcriber:
      "Thuê bao MobiFone trả trước phát triển mới từ 01/6/2023. Hoặc, - Thuê bao MobiFone trả trước kích hoạt trước 01/6/2023 có ARPU bình quân tháng n-1, n-2, n-3 < giá gói cước. ",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn 12MXH80 gửi 789",
    cancelSubcriber: "Soạn HUY 12MXH80 gửi 789",
    cancelAutoSubriber: "Soạn KGH 12MXH80 gửi 789",
  },
  {
    code: "6MXH100",
    price: 600000,
    cycle: 180,
    revenueOld: 196364,
    revenue: 136363.63636363635,
    type: "TBTT",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: "Miễn phí truy cập youtube",
    subcriber:
      "Thuê bao MobiFone trả trước phát triển mới từ 01/6/2023. Hoặc, - Thuê bao MobiFone trả trước kích hoạt trước 01/6/2023 có ARPU bình quân tháng n-1, n-2, n-3 < giá gói cước. ",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn 6MXH100 gửi 789",
    cancelSubcriber: "Soạn HUY 6MXH100 gửi 789",
    cancelAutoSubriber: "Soạn KGH 6MXH100 gửi 789",
  },
  {
    code: "6MXH80",
    price: 480000,
    cycle: 180,
    revenueOld: 157091,
    revenue: 109090.90909090909,
    type: "TBTT",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "9GB/ 1 ngày",
    CVQT: 0,
    permission: 0,
    subcriber:
      "Thuê bao MobiFone trả trước phát triển mới từ 01/6/2023. Hoặc, - Thuê bao MobiFone trả trước kích hoạt trước 01/6/2023 có ARPU bình quân tháng n-1, n-2, n-3 < giá gói cước. ",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn 6MXH80 gửi 789",
    cancelSubcriber: "Soạn HUY 6MXH80 gửi 789",
    cancelAutoSubriber: "Soạn KGH 6MXH80 gửi 789",
  },
  {
    code: "12TK135",
    price: 1620000,
    cycle: 360,
    revenueOld: 530182,
    revenue: 368181.8181818182,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "7GB/ 1 ngày",
    CVQT: 0,
    permission: 0,
    subcriber:
      "TBTT PTM từ 01/07/2023;\r\nTBTT, TBTS PTM trước 01/07/2023 có arpu < giá gói;\r\nTB MNP đến và M2M;\r\nThêm gói cước vào công cụ hỗ trợ đăng ký TB MNP đi;",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn DK 12TK135 gửi 789",
    cancelSubcriber: "Soạn HUY 12TK135 gửi 789",
    cancelAutoSubriber: "Soạn KGH 12TK135 gửi 789",
  },
  {
    code: "3TK135",
    price: 405000,
    cycle: 90,
    revenueOld: 132545,
    revenue: 92045.45454545454,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "8Gb/ngày",
    CVQT: 0,
    permission: 0,
    subcriber:
      "TBTT PTM từ 01/07/2023;\r\nTBTT, TBTS PTM trước 01/07/2023 có arpu < giá gói;\r\nTB MNP đến và M2M;\r\nThêm gói cước vào công cụ hỗ trợ đăng ký TB MNP đi;",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn DK 3TK135 gửi 789",
    cancelSubcriber: "Soạn HUY 3TK135 gửi 789",
    cancelAutoSubriber: "Soạn KGH 3TK135 gửi 789",
  },
  {
    code: "6TK135",
    price: 810000,
    cycle: 180,
    revenueOld: 265091,
    revenue: 184090.9090909091,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: 0,
    subcriber:
      "TBTT PTM từ 01/07/2023;\r\nTBTT, TBTS PTM trước 01/07/2023 có arpu < giá gói;\r\nTB MNP đến và M2M;\r\nThêm gói cước vào công cụ hỗ trợ đăng ký TB MNP đi;",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn DK 6TK135 gửi 789",
    cancelSubcriber: "Soạn HUY 6TK135 gửi 789",
    cancelAutoSubriber: "Soạn KGH 6TK135 gửi 789",
  },
  {
    code: "12PT70",
    price: 840000,
    cycle: 360,
    revenueOld: 274909,
    revenue: 190909.09090909088,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: 0,
    subcriber:
      "Triển khai cho thuê bao hoà mạng mới, thuê bao đang hoạt động thuộc danh sách quy định",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn 12PT70 gửi 789",
    cancelSubcriber: "Soạn HUY 12PT70 gửi 789",
    cancelAutoSubriber: "Soạn KGH 12PT70 gửi 789",
  },
  {
    code: "3PT70",
    price: 210000,
    cycle: 90,
    revenueOld: 68727,
    revenue: 47727.27272727272,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: 0,
    subcriber:
      "Triển khai cho thuê bao hoà mạng mới, thuê bao đang hoạt động thuộc danh sách quy định",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn 3PT70 gửi 789",
    cancelSubcriber: "Soạn HUY 3PT70 gửi 789",
    cancelAutoSubriber: "Soạn KGH 3PT70 gửi 789",
  },
  {
    code: "6PT70",
    price: 420000,
    cycle: 180,
    revenueOld: 137455,
    revenue: 95454.54545454544,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: "Miễn phí cuộc gọi nội mạng dưới 10 phút (tối đa 1.500 phút)\r\n",
    outAudio: "200 phút ",
    Data: "6 GB/ngày",
    CVQT: 0,
    permission: "Miễn phí truy cập Facebook, YouTube ",
    subcriber:
      "Triển khai cho thuê bao hoà mạng mới, thuê bao đang hoạt động thuộc danh sách quy định",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
    methodSubcriber: "Soạn 6PT70 gửi 789",
    cancelSubcriber: "Soạn HUY 6PT70 gửi 789",
    cancelAutoSubriber: "Soạn KGH 6PT70 gửi 789",
  },
  {
    code: "6MF159",
    price: 954000,
    cycle: 186,
    revenueOld: 312218,
    revenue: 216818.1818181818,
    type: "TBTS",
    sms: 0,
    inAudio: "Miễn phí cuộc gọi nội mạng dưới 10 phút (tối đa 1.500 phút)\r\n",
    outAudio: "200 phút ",
    Data: "6 GB/ngày",
    CVQT: 0,
    permission: "Miễn phí truy cập Facebook, YouTube ",
    subcriber:
      "Thuê bao trả sau MobiF (cá nhân, doanh nghiệp) phát triển mới từ ngày 01/6/2023.\r\nThuê bao trả sau MobiF (cá nhân, doanh nghiệp) có ARPU bình quân tháng n1, n-2, n-3 < giá gói MobiF mới: Danh sách các TBTS đủ điều kiện đăng ký tra cứu tại KMTT.\r\nThuê bao MobiFone trả trước có ARPU bình quân tháng n-1, n-2, n-3 < giá gói cước, chuyển sang trả sau MobiF (áp dụng từ 25/7/2023): Tra cứu tại KMTT\r\nThuê bao MNP đi (áp dụng từ 25/7/2023)",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
  },
  {
    code: "12MF159",
    price: 1908000,
    cycle: 372,
    revenueOld: 860073,
    revenue: 433636.3636363636,
    type: "TBTS",
    sms: " Miễn phí nhắn tin nội mạng",
    inAudio: "10phút (trong nước, không roaming)\r\n",
    outAudio: "05 phút/ngày ",
    Data: "8Gb/ngày",
    CVQT: 0,
    permission:
      "Sử dụng 01 tài khoản miễn phí để xem phim, kênh truyền hình trong nước và mộtsố kênh truyền hình quốc tế của dịch vụ truyền hình ClipTV tại https://cliptv.vn hoặc ứng dụng ClipTV (trên 2 thiết bị đồng thời)",
    subcriber:
      "Thuê bao trả sau MobiF (cá nhân, doanh nghiệp) phát triển mới từ ngày 01/6/2023.\r\nThuê bao trả sau MobiF (cá nhân, doanh nghiệp) có ARPU bình quân tháng n1, n-2, n-3 < giá gói MobiF mới: Danh sách các TBTS đủ điều kiện đăng ký tra cứu tại KMTT.\r\nThuê bao MobiFone trả trước có ARPU bình quân tháng n-1, n-2, n-3 < giá gói cước, chuyển sang trả sau MobiF (áp dụng từ 25/7/2023): Tra cứu tại KMTT\r\nThuê bao MNP đi (áp dụng từ 25/7/2023)",
    typeCycle: "Dài kì",
    typeSubcriber: "HTS",
    autoSubcriber: "Có",
  },
  {
    code: "CD",
    price: 10000,
    cycle: 1,
    revenueOld: 4545,
    revenue: 2272.7272727272725,
    type: "TBTT",
    sms: " Miễn phí nhắn tin nội mạng",
    inAudio: "10phút (trong nước, không roaming)\r\n",
    outAudio: "05 phút/ngày ",
    Data: "8Gb/ngày",
    CVQT: 0,
    permission:
      "miễn phí  01 tài khoản xem gói VieON FAMILY tại https://vieon.vn/app",
    subcriber:
      "Thuê bao MobiFone phát triển mới: Kích hoạt từ 01/01/2023.\r\nThuê bao MobiFone hiện hữu có APRU 03 tháng gần nhất (N-1, N-2, N-3)",
    typeCycle: "Ngày",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "ON CD gửi 9084",
    cancelSubcriber: "HUY CD gửi 999",
    cancelAutoSubriber: "KGH CD gửi 999",
  },
  {
    code: "V12",
    price: 12000,
    cycle: 1,
    revenueOld: 3927,
    revenue: 2727.272727272727,
    type: "TBTT",
    sms: " Miễn phí nhắn tin nội mạng",
    inAudio: "10phút (trong nước, không roaming)\r\n",
    outAudio: "05 phút/ngày ",
    Data: "8Gb/ngày",
    CVQT: 0,
    permission:
      "Miễn phí 01 tài khoản ôn luyện tiếng Anh TOEIC nâng cao trên mobiEdu.",
    subcriber: "Thuê bao MobiFone phát triển mới: Kích hoạt từ 01/01/2023.",
    typeCycle: "Ngày",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "ON V12 gửi 9084",
    cancelSubcriber: "HUY V12 gửi 999",
    cancelAutoSubriber: "KGH V12 gửi 999",
  },
  {
    code: "ED",
    price: 10000,
    cycle: 1,
    revenueOld: 4545,
    revenue: 2272.7272727272725,
    type: "TBTT",
    sms: " Miễn phí nhắn tin nội mạng",
    inAudio: "10phút (trong nước, không roaming)\r\n",
    outAudio: "05 phút/ngày ",
    Data: "8Gb/ngày",
    CVQT: 0,
    permission:
      "Khách hàng được sử dụng toàn bộ tính năng dịch vụ và 05 phút kết nối trực tiếp với chuyêngia trên ứng dụng mobiAgri",
    subcriber: " Thuê bao trả trước, trả sau của MobiFone.",
    typeCycle: "Ngày",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "ON ED gửi 9084",
    cancelSubcriber: "HUY ED gửi 999",
    cancelAutoSubriber: "KGH ED gửi 999",
  },
  {
    code: "BD",
    price: 10000,
    cycle: 1,
    revenueOld: 4545,
    revenue: 2272.7272727272725,
    type: "TBTT",
    sms: " Miễn phí nhắn tin nội mạng",
    inAudio: "10phút (trong nước, không roaming)\r\n",
    outAudio: "05 phút/ngày ",
    Data: "8Gb/ngày",
    CVQT: 0,
    permission:
      "Khách hàng được xem không giới hạn nội dung sau: chuyên trang Phim (http://phim.mobion.vn)",
    subcriber: " Thuê bao trả trước, trả sau của MobiFone.",
    typeCycle: "Ngày",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "ON BD gửi 9084",
    cancelSubcriber: "HUY BD gửi 999",
    cancelAutoSubriber: "KGH BD gửi 999",
  },
  {
    code: "KF",
    price: 10000,
    cycle: 1,
    revenueOld: 4545,
    revenue: 2272.7272727272725,
    type: "TBTT",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1GB/ ngày",
    CVQT: 0,
    permission:
      "Miễn phí data truy cập Ứng dụng ClipTV và Cliptv.vn; 01 tài khoản xem phim, VOD, kênh truyền hình trong nước (bao gồm chùm kênh VTVCab) trên ClipTV, đăng nhập và xem cùng lúc trên 2 thiết bị đồng thời.",
    subcriber:
      "Đối tượng khách hàng Tất cả TBTT, TS mạng MobiFone đang hoạt động 2 chiều và đủ tài khoản đăng ký gói cước thuộc các đối tượng sau:\r\nThuê bao MobiFone phát triển mới: Kích hoạt từ 01/01/2023.\r\nThuê bao MobiFone hiện hữu có APRU 03 tháng gần nhất (N-1, N-2, N-3) <300.000 đồng/tháng, không bao gồm tập thuê bao sử dụng gói D10 trong 30 ngày gần nhất.\r\nTra cứu đối tượng: Selfcare 999, Selfcare FO",
    typeCycle: "Ngày",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "ON KF gửi 9084",
    cancelSubcriber: "HUY KF gửi 999",
    cancelAutoSubriber: "KGH KF gửi 999",
  },
  {
    code: "CT70",
    price: 70000,
    cycle: 30,
    revenueOld: 22909,
    revenue: 15909.090909090908,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1GB/ngày",
    CVQT: 0,
    permission:
      "Một tài khoản được sử dụng các nội dung trong gói dịch vụ, thời gian chơi tối đa 5 tiếng trong một tháng",
    subcriber:
      "TB MobiFone trả trước, trả sau đang hoạt động hai chiều và đủ tài khoản đăng ký gói cước thuộc các đối tượng sau:\r\nTB MobiFone phát triển mới: Kích hoạt từ 01/01/2023.\r\nHoặc TB MobiFone hiện hữu có ARPU 03 tháng gần nhất (N-1, N-2, N-3) nhỏ hơn hoặc bằng giá gói cước/tháng (ví dụ giá gói là 70.000đồng/tháng thì tập thuê bao hiện hữu có ARPU 03 tháng gần nhất<=70.000đồng).",
    typeCycle: "Đơn kì",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "DK CT70 GỬI 999",
    cancelSubcriber: "HUY CT70 GỬI 999",
    cancelAutoSubriber: "KGH CT70 GỬI 999",
  },
  {
    code: "CGDG",
    price: 99000,
    cycle: 30,
    revenueOld: 32400,
    revenue: 22500,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission:
      "Miễn phí data truy cập dịch vụ VieOn; 01 tài khoản xem gói VieON VIP (+3 kênh K+Life, K+Kids, K+Cine) đăng nhập 5 thiết bị và xem đồng thời 2 thiết bị",
    subcriber: "Thuê bao MobiFone phát triển mới: Kích hoạt từ 01/01/2023.",
    typeCycle: "Đơn kì",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "DK CGDG GỬI 999",
    cancelSubcriber: "HUY CGDG GỬI 999",
    cancelAutoSubriber: "KGH CGDG GỬI 999",
  },
  {
    code: "V90",
    price: 90000,
    cycle: 30,
    revenueOld: 32182,
    revenue: 20454.545454545452,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: "Miễn phí data sử dụng dịch vụ MEET qua app/web",
    subcriber:
      "Tất cả thuê bao trả trước/trả sau mạng MobiFone đang hoạt động 2 chiều và đủ tài khoản đăng ký gói cước.",
    typeCycle: "Đơn kì",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "DK V90 GỬI 999",
    cancelSubcriber: "HUY V90 GỬI 999",
    cancelAutoSubriber: "KGH V90 GỬI 999",
  },
  {
    code: "MS70",
    price: 70000,
    cycle: 30,
    revenueOld: 22909,
    revenue: 15909.090909090908,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: " 50GB lưu trữ trên ứng dụng MobiCloud",
    subcriber:
      "Tất cả các thuê bao MobiFone trả trước, trả sau đang hoạt động hai chiều; không bao gồm các profile: ASIMZ, ASIMZ2, ASIMQT, MCM, SAYME, VNSKY, MGTEL, TTGTEL.",
    typeCycle: "Đơn kì",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "DK MS70 GỬI 999",
    cancelSubcriber: "HUY MS70 GỬI 999",
    cancelAutoSubriber: "KGH MS70 GỬI 999",
  },
  {
    code: "MCD85",
    price: 85000,
    cycle: 30,
    revenueOld: 27818,
    revenue: 19318.181818181816,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission:
      "Miễn phí data truy cập dịch vụ Nền tảng âm nhạc Nhạc Của Tui.Tài khoản VIP NhacCuaTui",
    subcriber:
      "Tất cả thuê bao trả trước/trả sau mạng MobiFone đang hoạt động 2 chiều và đủ tài khoản đăng ký gói cước.",
    typeCycle: "Đơn kì",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "DK MCD85 GỬI 999",
    cancelSubcriber: "HUY MCD85 GỬI 999",
    cancelAutoSubriber: "KGH MCD85 GỬI 999",
  },
  {
    code: "NCT85",
    price: 85000,
    cycle: 30,
    revenueOld: 29776,
    revenue: 19318.181818181816,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1GB/ngày ",
    CVQT: 0,
    permission:
      "Miễn phí data truy cập dịch vụ Nền tảng âm nhạc NhacCuaTui. \r\n- Tài khoản VIP NhacCuaTui.\r\n- Quyền lợi nội dung POPS: 10 sao + miễn phí 01 chương truyện tính phí bất kỳ trên https://pops.vn/trong thời hạn sửdụng gói.\r\n",
    subcriber: " Thuê bao trả trước, trả sau của MobiFone.",
    typeCycle: "Đơn kì",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "DK NCT85 GỬI 999",
    cancelSubcriber: "HUY NCT85 GỬI 999",
    cancelAutoSubriber: "KGH NCT85 GỬI 999",
  },
  {
    code: "NCT70",
    price: 70000,
    cycle: 30,
    revenueOld: 22909,
    revenue: 15909.090909090908,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission: "Một tài khoản dịch vụ mobiAgri",
    subcriber:
      "Tất cả thuê bao trả trước/trả sau mạng MobiFone đang hoạt động 2 chiều và đủ tài khoản đăng ký gói cước thuộc các đối tượng sau:\r\nThuê bao MobiFone phát triển mới: Kích hoạt từ 01/01/2023.\r\nHoặc thuê bao MobiFone hiện hữu có ARPU 03 tháng gần nhất (N-1, N-2, N-3)<= giá gói cước/tháng (VD: giá gói là 70.000 đồng/tháng thì tập thuê bao hiện hữu có ARPU 03 gần nhất <= 70.000 đồng).>> tra cứu trên selfcare FO",
    typeCycle: "Đơn kì",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "DK NCT70 GỬI 999",
    cancelSubcriber: "HUY NCT70 GỬI 999",
    cancelAutoSubriber: "KGH NCT70 GỬI 999",
  },
  {
    code: "AG70",
    price: 70000,
    cycle: 30,
    revenueOld: 22909,
    revenue: 15909.090909090908,
    type: "TBTT/TBTS",
    sms: 0,
    inAudio: 0,
    outAudio: 0,
    Data: "1 GB/ngày",
    CVQT: 0,
    permission:
      "01 tài khoản Ôn tập dịch vụ mobiEdu (gói cơ bản, chỉ được chọn 1 khối lớp)",
    subcriber: "Thuê bao MobiFone phát triển mới: kích hoạt từ 01/01/2023.",
    typeCycle: "Đơn kì",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "DK AG70 GỬI 999",
    cancelSubcriber: "HUY AG70 GỬI 999",
    cancelAutoSubriber: "KGH AG70 GỬI 999",
  },
  {
    code: "ED70",
    price: 70000,
    cycle: 30,
    revenueOld: 22909,
    revenue: 15909.090909090908,
    type: "TBTT/TBTS",
    subcriber:
      "Thuê bao MobiFone/Saymee phát triển mới: Kích hoạt từ 01/01/2023.\r\n\r\nHoặc thuê bao MobiFone hiện hữu có APRU 03 tháng gần nhất (N-1, N-2, N-3) <= giá gói cước (ví dụ giá gói là 70.000 đồng thì tập thuê bao hiện hữu có ARPU 03 gần nhất <= 70.000đ).\r\n\r\nThời gian áp dụng: Từ 18/08/2023",
    typeCycle: "Đơn kì",
    typeSubcriber: "Platform",
    autoSubcriber: "Có",
    methodSubcriber: "DK ED70 GỬI 999",
    cancelSubcriber: "HUY ED70 GỬI 999",
    cancelAutoSubriber: "KGH ED70 GỬI 999",
  },
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
