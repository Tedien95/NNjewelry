# Đá — Trang sức đá quý theo yêu cầu

Website giới thiệu và nhận đặt hàng trang sức đá quý tuỳ chỉnh. Thuần HTML/CSS/JS, không cần build tool, không cần backend để chạy demo.

## Cấu trúc thư mục

```
da-trang-suc-web/
├── index.html      # Nội dung & cấu trúc trang
├── css/
│   └── style.css   # Toàn bộ giao diện, màu sắc, layout
├── js/
│   └── script.js   # Danh sách đá, tương tác chọn đá, form
└── README.md
```

## Chạy thử ở máy local

Không cần cài gì thêm — mở thẳng `index.html` bằng trình duyệt là xem được.

Nếu muốn chạy qua local server (khuyên dùng khi chỉnh sửa để tránh lỗi cache):

```bash
# Python có sẵn trên hầu hết máy
python3 -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Đưa lên GitHub Pages (miễn phí, không cần server riêng)

1. Tạo repository mới trên GitHub, ví dụ tên `da-trang-suc-web`.
2. Đẩy toàn bộ nội dung thư mục này lên repo:
   ```bash
   git init
   git add .
   git commit -m "Khởi tạo website trang sức đá quý"
   git branch -M main
   git remote add origin https://github.com/<ten-user>/da-trang-suc-web.git
   git push -u origin main
   ```
3. Vào repo trên GitHub → **Settings** → **Pages**.
4. Ở mục **Branch**, chọn `main` và thư mục `/ (root)` → **Save**.
5. Sau 1–2 phút, trang sẽ có tại: `https://<ten-user>.github.io/da-trang-suc-web/`

## Tuỳ chỉnh giao diện

### Đổi màu sắc
Mở `css/style.css`, sửa các biến ở đầu file (áp dụng cho toàn trang):
```css
:root{
  --bone:#F6F4EF;      /* màu nền chính */
  --ink:#1D1B18;       /* màu chữ chính */
  --jade:#4B6358;      /* màu nhấn (nút, tiêu đề phụ) */
  --jade-soft:#7C9488; /* màu nhấn nhạt hơn */
  --line:#D9D3C6;      /* màu viền, đường kẻ */
}
```

### Đổi font chữ
Font hiện tại là `Fraunces` (tiêu đề) và `Inter` (nội dung), tải từ Google Fonts trong `index.html` (thẻ `<link>` ở đầu file). Muốn đổi font: thay link Google Fonts và sửa `font-family` tương ứng trong `css/style.css`.

### Sửa nội dung chữ, sản phẩm, quy trình
Toàn bộ nằm trực tiếp trong `index.html`, tìm theo từng `<section>`:
- `#quy-trinh` — 4 bước quy trình đặt hàng
- `#chon-da` — khu vực chọn đá tương tác
- `#san-pham` — lưới sản phẩm mẫu
- `#dat-hang` — form đặt hàng

### Sửa danh sách các loại đá (khu vực tương tác)
Mở `js/script.js`, sửa mảng `stones` — mỗi đá có tên, màu (gradient), ý nghĩa, và các thẻ mô tả (tags).

### Nối form đặt hàng với nơi nhận đơn thật
Hiện form chỉ hiện thông báo xác nhận, chưa gửi dữ liệu đi đâu (xem hàm xử lý `submit` cuối `js/script.js`). Để nhận đơn thật, có vài lựa chọn phổ biến, không cần tự dựng backend:
- **Formspree** hoặc **Getform**: dán action URL vào thẻ `<form>`, nhận đơn qua email.
- **Google Form** nhúng hoặc gọi qua Google Apps Script.
- Tự dựng backend riêng (Node.js, Firebase...) nếu cần lưu đơn vào database.

## Ghi chú
- Hình ảnh "viên đá" hiện là minh hoạ bằng CSS gradient — nên thay bằng ảnh chụp sản phẩm thật khi có, để tăng độ tin cậy.
- Trang đã có sẵn chế độ responsive cho di động và tôn trọng cài đặt "giảm hiệu ứng chuyển động" (prefers-reduced-motion) của trình duyệt.
