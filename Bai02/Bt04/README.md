1. Giới thiệu ứng dụng

Ứng dụng Sổ tay công thức nấu ăn được xây dựng bằng React Native, giúp người dùng xem danh sách các món ăn, tìm hiểu nguyên liệu cần chuẩn bị và các bước chế biến từng món.

Ứng dụng sử dụng Stack Navigation để chuyển đổi giữa các màn hình.

2. Các màn hình của ứng dụng

2.1. HomeScreen – Trang chủ

Hiển thị tên ứng dụng Recipe Book.

Hiển thị lời chào và giới thiệu về sổ tay công thức nấu ăn.

Có nút Xem danh sách món ăn để chuyển sang màn hình danh sách.

2.2. ListScreen – Danh sách món ăn

Hiển thị danh sách các món ăn bằng FlatList.

Mỗi món ăn có tên, biểu tượng và thời gian chế biến.

Khi nhấn vào một món ăn, ứng dụng chuyển sang màn hình chi tiết của món đó.

Các món ăn gồm:

Cơm chiên trứng.

Mì xào rau củ.

Salad rau củ.

Nước ép cam.

Canh rau củ.

2.3. DetailScreen – Chi tiết món ăn

Hiển thị tên món ăn và thời gian chế biến.

Hiển thị danh sách nguyên liệu cần chuẩn bị.

Trình bày các bước chế biến chi tiết.

Có nút quay lại màn hình danh sách món ăn.

Có thể cuộn màn hình để xem toàn bộ nội dung.

3. Công nghệ và thành phần sử dụng

React Native: Xây dựng giao diện ứng dụng.

Expo Snack: Chạy và kiểm tra ứng dụng.

React Navigation: Điều hướng giữa các màn hình.

Stack Navigation: Chuyển đổi giữa HomeScreen, ListScreen và DetailScreen.

FlatList: Hiển thị danh sách món ăn.

TouchableOpacity: Tạo các nút bấm và mục có thể nhấn.

ScrollView: Cho phép cuộn nội dung chi tiết.

navigation.navigate(): Chuyển sang màn hình khác.

navigation.goBack(): Quay lại màn hình trước.

4. Cấu trúc chương trình

Bt04/
│
├── App.js
│
└── components/
    ├── HomeScreen.js
    ├── ListScreen.js
    └── DetailScreen.js

5. Link ứng dụng Expo

Tên bài nộp: MultiScreenApp

Link Expo Snack: https://snack.expo.dev/@anhquan2006/multiscreenapp

6. Hình ảnh kết quả thực hiện

Hình 1: Giao diện HomeScreen

<img width="385" height="726" alt="image" src="https://github.com/user-attachments/assets/404f63a0-d6bd-4737-877e-480f1ba90464" />


Hình 2: Giao diện ListScreen

<img width="375" height="781" alt="image" src="https://github.com/user-attachments/assets/c01c97a5-f3bc-410a-9719-37aef9e298f7" />


Hình 3: Giao diện DetailScreen

<img width="380" height="804" alt="image" src="https://github.com/user-attachments/assets/9089f065-56d3-4cb9-ab5f-de1d0e06184f" />


Hình 4: Chức năng điều hướng

<img width="341" height="437" alt="image" src="https://github.com/user-attachments/assets/cff15e1e-f591-420c-869d-24b89eebab12" />

Sau khi bấm nút Quay lại danh sách món ăn sẽ hiện danh sách món ăn như ban đầu
<img width="372" height="682" alt="image" src="https://github.com/user-attachments/assets/354aed02-d227-4628-a3fe-4ad1e64dc20c" />



7. Kết quả đạt được

Xây dựng thành công ứng dụng gồm 3 màn hình HomeScreen, ListScreen và DetailScreen.

Sử dụng Stack Navigation để điều hướng giữa các màn hình.

Chọn món ăn trong danh sách để xem thông tin chi tiết.

Hiển thị nguyên liệu và các bước chế biến của từng món ăn.

Thực hiện được chức năng quay lại màn hình trước.
