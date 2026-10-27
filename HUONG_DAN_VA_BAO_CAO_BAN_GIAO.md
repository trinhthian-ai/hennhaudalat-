# HƯỚNG DẪN SỬ DỤNG, QUẢN TRỊ & BÁO CÁO BÀN GIAO DỰ ÁN
## Website: HẸN NHAU GIỮA ĐÀ LẠT
- **Slogan:** *Mỗi góc cà phê, một cuộc hẹn đáng nhớ.*
- **Chủ dự án:** **Trịnh Thị An – An Nhiên AI (7 An AI)**
- **Ngày kiểm chứng & bàn giao:** 28/10/2026

---

## PHẦN A. CẤU TRÚC THƯ MỤC DỰ ÁN (CHUẨN GITHUB PAGES)

Gói mã nguồn (`hen-nhau-giua-da-lat-github-pages.zip`) được tổ chức rõ ràng, sử dụng toàn bộ đường dẫn tương đối để chị có thể đưa thẳng lên **GitHub Pages** hoặc chạy trên bất kỳ máy tính nào:

```text
hen-nhau-giua-da-lat/
├── index.html                        # Trang giao diện chính (đầy đủ 8 mục điều hướng & 4 hộp thoại chức năng)
├── css/
│   └── style.css                     # Thiết kế giao diện bảng màu Đà Lạt sương sớm & tối ưu điện thoại
├── js/
│   └── app.js                        # Bộ xử lý tìm kiếm, bộ lọc 12 nhóm, bản đồ, đồng hồ, lưu yêu thích
├── data/
│   ├── cafes.json                    # Dữ liệu 33 quán cà phê thực tế đã xác minh + 1 mẫu kỹ thuật DỮ LIỆU MINH HỌA
│   ├── itineraries.json              # Dữ liệu 3 lịch trình khám phá Đà Lạt (Nửa ngày, 1 ngày, 2 ngày)
│   └── websites.json                 # Dữ liệu danh sách các website khác của 7 An
├── images/
│   ├── trinh-thi-an-working.jpg      # Ảnh chân dung thật chị Trịnh Thị An (khu vực giới thiệu Trang chủ)
│   ├── trinh-thi-an-portrait.jpg     # Ảnh chân dung thật chị Trịnh Thị An (khu vực Góc của 7 An)
│   └── dalat-hero-ai.jpg             # Ảnh bìa cảm xúc Đà Lạt (đã gắn nhãn minh bạch Ảnh minh họa tạo bằng AI)
└── HUONG_DAN_VA_BAO_CAO_BAN_GIAO.md  # Tài liệu hướng dẫn chi tiết và báo cáo kiểm thử này
```

---

## PHẦN B. HƯỚNG DẪN CHI TIẾT BẰNG TIẾNG VIỆT (11 THAO TÁC QUẢN TRỊ)

### 1. Cách xem website
- **Cách 1 (Xem ngay trên trình duyệt tại đây):** Mở tệp `hen-nhau-giua-da-lat.html` hiển thị trực tiếp trong khung Canvas để trải nghiệm ngay mọi nút bấm, tìm kiếm, lọc, bản đồ và lưu yêu thích.
- **Cách 2 (Xem từ gói mã nguồn ZIP trên máy tính):** Giải nén tệp `hen-nhau-giua-da-lat-github-pages.zip`, nháy đúp vào `index.html` (nhờ cơ chế dữ liệu dự phòng đồng bộ trong `js/app.js`, website vẫn hiển thị đầy đủ 33 quán ngay cả khi mở trực tiếp). Tuy nhiên, để tệp đọc trực tiếp từ `data/cafes.json` khi chị chỉnh sửa, hãy chạy qua máy chủ cục bộ theo mục 8 bên dưới.

### 2. Cách thay ảnh chân dung của Trịnh Thị An (Chỉ bằng 1 thao tác)
- Chị chuẩn bị bức ảnh mới muốn thay thế.
- Đổi tên bức ảnh mới thành:
  - `trinh-thi-an-working.jpg` (nếu muốn thay ảnh ở khung giới thiệu trên **Trang chủ**).
  - `trinh-thi-an-portrait.jpg` (nếu muốn thay ảnh ở mục **Góc của 7 An**).
- Chép đè vào thư mục `images/`. Khung ảnh đã được lập trình tự động co giãn giữ nguyên tỷ lệ gương mặt (`height: auto`, không bao giờ kéo giãn hay làm biến dạng khuôn mặt).

### 3. Cách thay hoặc bổ sung ảnh thực tế cho từng quán cà phê
1. Chép ảnh chụp thực tế của quán (ví dụ: `tui-mo-to-thuc-te.jpg`) vào thư mục `images/`.
2. Mở tệp `data/cafes.json` bằng Notepad, VS Code hoặc trình soạn thảo văn bản bất kỳ.
3. Tìm đến quán tương ứng (ví dụ `"id": "tui-mo-to"`) và sửa 2 dòng:
   ```json
   "imageStatus": "Ảnh thực tế do Trịnh Thị An chụp",
   "imageUrl": "images/tui-mo-to-thuc-te.jpg",
   ```
4. Lưu tệp lại — website sẽ tự động chuyển từ *"Khung giữ chỗ"* sang hiển thị bức ảnh thật của chị.

### 4. Cách thêm hoặc sửa một quán cà phê
Mở tệp `data/cafes.json`. Ở cuối tệp đã có sẵn mục mẫu kỹ thuật `"id": "demo-mau-ky-thuat"`. Khi muốn thêm một quán mới đã kiểm chứng, chị chỉ cần sao chép khối mẫu dưới đây và điền thông tin thực tế:

```json
{
  "id": "ma-dinh-danh-quan-moi",
  "name": "Tên Chính Thức Của Quán",
  "address": "Số nhà, tên đường, Phường/Xã, TP. Đà Lạt, Lâm Đồng",
  "area": "Tên khu vực (Ví dụ: Hồ Xuân Hương - Trung tâm)",
  "lat": 11.9428,
  "lng": 108.4368,
  "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=...",
  "officialUrl": "https://...",
  "operatingStatus": "Đang hoạt động",
  "verificationStatus": "Đã xác minh",
  "openingHours": "07:00 – 21:30 (Thứ Hai – Chủ Nhật)",
  "priceRange": "45.000đ – 80.000đ",
  "priceSegment": "50.000đ – 100.000đ",
  "categories": ["rung-thong", "yen-tinh", "hen-ho"],
  "styles": ["Nhà gỗ rừng thông", "Mộc mạc"],
  "scenery": ["Đồi thông", "Hoàng hôn"],
  "audiences": ["Cặp đôi", "Gia đình"],
  "verifiedAmenities": ["Bãi đỗ xe miễn phí", "Wifi miễn phí"],
  "highlights": "Mô tả ngắn trung thực về không gian và điểm đặc trưng của quán.",
  "drinkHighlights": "Các món đồ uống tiêu biểu có căn cứ từ thực đơn.",
  "photoSpotsVerified": "Các góc chụp ảnh có thật tại quán.",
  "photoSpotsCreative": "Gợi ý sáng tạo: Ý tưởng góc chụp hoặc thời điểm.",
  "bestTime": "07:30 – 10:00 sáng hoặc 16:00 – 17:30 chiều.",
  "outfitSuggestion": "Gợi ý sáng tạo: Trang phục phù hợp.",
  "pros": "Điểm thuận lợi của quán.",
  "notes": "Những điều khách cần lưu ý (đường dốc, tiền mặt, giờ nghỉ...).",
  "nearbyVerified": "Các địa điểm gần đó đã kiểm tra.",
  "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế)",
  "imageUrl": "",
  "source": "Google Maps & Trang chính thức của quán",
  "lastVerified": "28/10/2026"
}
```
*(Danh sách mã `categories` hợp lệ: `ngam-ho`, `san-may`, `binh-minh`, `hoang-hon`, `rung-thong`, `da-lat-xua`, `vuon-hoa`, `kien-truc`, `gia-dinh`, `hen-ho`, `check-in`, `yen-tinh`).*

### 5. Cách thêm hoặc cập nhật "Các Website Khác Của 7 An"
Mở tệp `data/websites.json`. Khi chị có đường dẫn chính thức của website nào, hãy điền vào trường `"url"`:
```json
{
  "id": "web-7an-1",
  "title": "Tên Website Chính Thức Của Chị",
  "category": "Đà Lạt & Văn hóa",
  "description": "Mô tả ngắn gọn về nội dung website.",
  "url": "https://ten-mien-cua-chi.github.io/",
  "status": "Đang hoạt động",
  "imageStatus": "Đã cập nhật"
}
```
Ngay khi trường `"url"` bắt đầu bằng `http` hoặc `https`, nút **“Truy cập website ↗”** trên thẻ đó sẽ tự động bật sáng và bấm được thật.

### 6. Cách sửa thông tin liên hệ
Mở tệp `index.html`, tìm đến khu vực `id="lien-he"` (Mục 8: Thông tin liên hệ chính thức). Tại đây chị có thể chỉnh sửa số điện thoại `tel:0834133344`, liên kết Zalo `https://zalo.me/0834133344`, đường dẫn Facebook hoặc YouTube.

### 7. Cách bổ sung hoặc chỉnh sửa Lịch trình khám phá
Mở tệp `data/itineraries.json`. Mỗi lịch trình gồm danh sách `"stops"` (các điểm dừng theo thứ tự, gắn với `"cafeId"` và `"googleMapsUrl"`). Chị có thể thêm chặng dừng mới hoặc điều chỉnh khung giờ tham khảo dễ dàng.

### 8. Cách chạy thử trên máy tính (Local Server)
Trình duyệt hiện đại thường chặn lệnh `fetch("data/cafes.json")` khi mở tệp HTML trực tiếp qua giao thức `file:///`. Để kiểm tra khi chỉnh sửa tệp JSON trên máy tính:
- **Cách dùng VS Code:** Cài tiện ích mở rộng **Live Server**, bấm chuột phải vào `index.html` → chọn **Open with Live Server**.
- **Cách dùng Python (có sẵn trên máy tính):** Mở Terminal / Command Prompt tại thư mục dự án và chạy:
  ```bash
  python -m http.server 8080
  ```
  Sau đó mở trình duyệt truy cập `http://localhost:8080`.
- *(Lưu ý: Nếu chị chỉnh sửa `data/cafes.json` mà muốn bản mở trực tiếp không cần server cũng cập nhật theo, hãy đồng bộ mảng dữ liệu đó vào biến `FALLBACK_CAFES` ở đầu tệp `js/app.js`, hoặc chỉ cần đưa lên GitHub Pages là `fetch` sẽ tự động đọc trực tiếp từ `data/cafes.json`).*

### 9. Cách đưa website lên GitHub Pages (Miễn phí 100%)
1. Đăng nhập vào tài khoản GitHub của chị, bấm **New repository**.
2. Đặt tên kho lưu trữ (ví dụ: `hen-nhau-giua-da-lat`), chọn **Public** rồi bấm **Create repository**.
3. Bấm **uploading an existing file**, kéo toàn bộ các tệp và thư mục bên trong gói giải nén (`index.html`, `css/`, `js/`, `data/`, `images/`) thả vào và bấm **Commit changes**.
4. Vào mục **Settings** của kho lưu trữ → chọn **Pages** ở cột bên trái.
5. Tại mục **Branch**, chọn nhánh `main` (hoặc `master`), thư mục `/(root)` rồi bấm **Save**.
6. Chờ khoảng 1–2 phút, GitHub sẽ cấp cho chị đường dẫn chính thức dạng: `https://<ten-tai-khoan>.github.io/hen-nhau-giua-da-lat/`.

### 10. Cách kiểm tra website trên điện thoại
- Sau khi đưa lên GitHub Pages, chị mở đường dẫn trên điện thoại (iPhone / Android) để kiểm tra menu thu gọn, thanh tìm kiếm, nút gọi điện trực tiếp (`0834 133 344`) và nút mở ứng dụng Zalo / Google Maps.
- Trên máy tính, chị có thể bấm phím `F12` (Chrome DevTools) → bấm biểu tượng Điện thoại (**Toggle device toolbar** `Ctrl + Shift + M`) để xem giao diện trên các kích thước màn hình iPhone SE, iPhone 14 Pro Max, iPad.

### 11. Cách kết nối và kiểm tra dịch vụ Thống kê truy cập (Phần 8)
Vì website HTML tĩnh không thể tự đếm tổng lượt truy cập giữa nhiều thiết bị nếu không có máy chủ, giải pháp an toàn, miễn phí và tôn trọng quyền riêng tư nhất cho GitHub Pages là **GoatCounter**:
1. Truy cập `https://www.goatcounter.com` và đăng ký tài khoản miễn phí (Free for non-commercial use).
2. Chọn mã trang (ví dụ: `hennhaugiuadalat` → địa chỉ thống kê sẽ là `https://hennhaugiuadalat.goatcounter.com`).
3. Vào mục **Settings** trên trang quản trị GoatCounter → đánh dấu tích vào ô **"Allow adding visitor counts on your website"** → bấm **Save**.
4. Chèn đoạn mã script đếm lượt truy cập của GoatCounter vào ngay trước thẻ `</body>` trong `index.html`:
   ```html
   <script data-goatcounter="https://hennhaugiuadalat.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
   ```
5. Mở tệp `js/app.js`, tìm đến khối `VISITOR_STATS_CONFIG` ở đầu tệp và cập nhật:
   ```javascript
   const VISITOR_STATS_CONFIG = {
     enabled: true,
     providerName: "GoatCounter",
     endpointUrl: "https://hennhaugiuadalat.goatcounter.com/counter/TOTAL.json",
     supportsUniqueVisitors: false,
     supportsRealtimeOnline: false
   };
   ```
   *(Lưu ý: Phương thức này hoàn toàn công khai, không cần đưa bất kỳ mật khẩu hay khóa bí mật API Key nào vào mã nguồn).*

---

## PHẦN C. BÁO CÁO NGẮN KẾT QUẢ THỰC HIỆN & KIỂM CHỨNG (PHẦN 21 & 22)

### 1. Những chức năng đã hoàn thành và hoạt động thật 100%
- Giao diện hoàn chỉnh theo đúng bảng màu Đà Lạt sương sớm (`#F5F1E8`, `#29483D`, `#755443`, `#C49A5A`, `#262A27`, `#DCE4DF`), hỗ trợ giảm chuyển động (`prefers-reduced-motion`) và điều hướng bàn phím.
- Menu điều hướng 8 mục hoạt động mượt trên cả máy tính và menu thu gọn trên điện thoại.
- Tích hợp trang trọng **2 bức ảnh chân dung thật của chị Trịnh Thị An** tại Trang chủ và khu vực *Góc của 7 An* (giữ nguyên tỷ lệ gương mặt, không biến dạng).
- Đồng hồ thời gian hiện hành tự động cập nhật từng giây theo đúng múi giờ Việt Nam (`Asia/Ho_Chi_Minh`) bằng tiếng Việt.
- Thanh tìm kiếm từ khóa, Lối vào nhanh (10 nhóm trên Trang chủ) và Bộ lọc đa chiều (12 nhóm khám phá, 15 cụm khu vực, phân khúc giá, trạng thái xác minh, lọc quán yêu thích).
- Hồ sơ chi tiết thống nhất **19 trường thông tin** cho từng quán, phân biệt rõ *Góc chụp có bằng chứng thực tế* và *Gợi ý sáng tạo*, nút *Chỉ đường Google Maps* hoạt động thật với dữ liệu đã xác minh và tự động khóa lại đối với thẻ mẫu kỹ thuật chưa có tọa độ.
- Bản đồ cà phê Đà Lạt tương tác (Leaflet + OpenStreetMap) ghim 33 vị trí thực tế kèm danh sách tọa độ và liên kết mở Google Maps riêng biệt.
- Chức năng Lưu và Bỏ lưu quán yêu thích bằng `localStorage` kèm thông báo rõ giới hạn lưu trữ trên trình duyệt thiết bị.
- Các nút liên hệ gọi điện (`tel:0834133344`), Zalo (`https://zalo.me/0834133344`), Facebook (`https://www.facebook.com/trinhthi.an.5`) và YouTube (`https://youtube.com/@annhienaimusictta?si=5pXWSG77iLaLYkJh`) chính xác tuyệt đối.

### 2. Nội dung đã được kiểm chứng & Nguồn đã thực sự truy cập
- **Tổng số quán đã khảo sát và đối chiếu:** Đã rà soát hơn 40 địa điểm qua công cụ dữ liệu **Google Maps Places** và **Google Search** vào ngày **28/10/2026**.
- **Số quán thực tế đủ điều kiện đưa vào website giai đoạn 1:** **33 quán đang hoạt động** (kèm 1 bản ghi mẫu kỹ thuật gắn nhãn `DỮ LIỆU MINH HỌA` để phục vụ hướng dẫn thêm mới).
- **Các quán đã phát hiện đóng cửa và loại trừ khỏi danh sách gợi ý:**
  1. *Thanh Thủy Blue Water Restaurant* (02 Nguyễn Thái Học, bờ Hồ Xuân Hương) – Đã đóng cửa.
  2. *Tiệm Cà Phê Tháng Ba* (23 Yên Thế) – Đã đóng cửa vĩnh viễn.
  3. *Woodstock Coffee Đà Lạt* (80 Bùi Thị Xuân) – Đã đóng cửa vĩnh viễn.
- **Các nguồn đã thực sự truy cập trong môi trường công cụ:** Hệ thống cơ sở dữ liệu địa điểm Google Maps (Place ID, địa chỉ, tọa độ, giờ mở cửa, mức giá, tiện ích, đánh giá thực tế của du khách đến tháng 10/2026) và kết quả tìm kiếm Google Search công khai. Không tự tuyên bố đã truy cập trực tiếp bên trong các nền tảng yêu cầu đăng nhập nếu công cụ không truy cập trực tiếp.

### 3. Nội dung đang chờ chủ dự án bổ sung
- **Ảnh chụp thực tế của từng quán:** Hiện đang sử dụng *Khung giữ chỗ thẩm mỹ* (ghi rõ trạng thái chờ bổ sung ảnh thực tế có bản quyền) để tuân thủ nghiêm ngặt nguyên tắc không tự ý lấy ảnh công khai trên mạng khi chưa rõ bản quyền và không dùng ảnh AI giả làm ảnh thật của quán.
- ** khoảng 17 quán tiếp theo để đạt mốc 50 quán:** Sẽ được chị Trịnh Thị An bổ sung dần vào `data/cafes.json` khi có thông tin kiểm chứng thực tế.
- **Danh sách tên miền cụ thể trong mục "Website của 7 An":** Hiện đang hiển thị thẻ giữ chỗ *"Tên website – đang cập nhật"* và *"Đường dẫn – chờ bổ sung"* (nút bấm ở trạng thái khóa minh bạch cho đến khi chị điền link vào `data/websites.json`).

### 4. Tình trạng kết nối Thống kê truy cập & Các kiểm thử
- **Tình trạng thống kê truy cập:** Đang hiển thị đúng trạng thái **“Thống kê truy cập: Chưa kết nối”** (không hiển thị số 0 giả hay số ngẫu nhiên). Đã lập trình sẵn hàm kết nối trong `js/app.js` để chị kích hoạt theo hướng dẫn ở Phần B.11.
- **Những kiểm thử đã thực hiện trong môi trường hiện tại:**
  - Kiểm thử tự động cấu trúc HTML, cú pháp JavaScript, liên kết nội bộ, ID phần tử, sự kiện nút bấm và khả năng tương thích hộp cát bằng công cụ kiểm định `check_web_app.py`.
  - Kiểm thử logic lọc 12 danh mục, tìm kiếm tiếng Việt, đóng/mở Modal 19 mục, lưu/xóa `localStorage` và định dạng đồng hồ múi giờ `Asia/Ho_Chi_Minh`.
- **Những kiểm thử chưa thể thực hiện trong môi trường máy ảo ngoại tuyến (Vui lòng tự kiểm tra trên thiết bị thật):**
  - *“Chưa kiểm thử trong môi trường hiện tại”* đối với: Thao tác bấm gọi điện thực tế qua sóng di động (`tel:0834133344`), chuyển hướng mở ứng dụng Zalo trên điện thoại thật, và kết nối mạng trực tiếp tới máy chủ GoatCounter sau khi chị đăng ký tài khoản.

---

## PHẦN D. ĐỀ XUẤT PHƯƠNG ÁN NÂNG CẤP KHI QUẢN LÝ HÀNG CHỤC / HÀNG TRĂM QUÁN (PHẦN 22.6)

Website HTML/CSS/JS tĩnh hiện tại rất nhanh, an toàn và miễn phí hoàn toàn trên GitHub Pages, nhưng **không có trang quản trị (Admin CMS) tích hợp sẵn** — mọi thao tác thêm/sửa quán hiện thực hiện qua tệp dữ liệu `data/cafes.json`.

Nếu trong tương lai chị muốn quản lý 50–200 quán cà phê bằng giao diện biểu mẫu trực quan (nhập chữ, tải ảnh lên bằng chuột ngay trên trình duyệt mà không cần chạm vào tệp JSON), chị có thể cân nhắc **3 phương án triển khai bổ sung** sau:

1. **Phương án 1 – Decap CMS (trước đây là Netlify CMS) hoặc Sveltia CMS kết nối thẳng với GitHub Pages (Chi phí: Miễn phí):**
   - Giữ nguyên toàn bộ website tĩnh hiện tại trên GitHub Pages nhưng gắn thêm một thư mục `/admin` kết nối tài khoản GitHub của chị. Khi đăng nhập vào `/admin`, chị sẽ có giao diện nhập thông tin quán và tải ảnh lên, hệ thống tự động lưu thành tệp JSON/Markdown trong kho GitHub.
2. **Phương án 2 – Kết nối Google Sheets làm cơ sở dữ liệu quản trị (Chi phí: Miễn phí):**
   - Chị quản lý danh sách 50+ quán trên một bảng tính Google Sheets quen thuộc; website sẽ đọc dữ liệu đã xuất bản từ Google Sheets.
3. **Phương án 3 – Chuyển đổi sang WordPress (Custom Post Types + Advanced Custom Fields) (Chi phí: Cần thuê Hosting & Tên miền):**
   - Phù hợp khi dự án mở rộng thành cổng thông tin du lịch lớn có nhiều biên tập viên cùng đăng bài, quản lý thư viện hàng ngàn bức ảnh và tối ưu SEO chuyên sâu theo từng đường dẫn riêng cho mỗi quán.
   - *Lưu ý:* Đây là công việc triển khai bổ sung trên môi trường máy chủ mới khi chị có nhu cầu nâng cấp trong giai đoạn tiếp theo.
