# Bt08 – TravellingApp (Ứng dụng khám phá động vật)

## 1. Mục tiêu

Tổ chức ứng dụng có nhiều khu vực chức năng và kết hợp các kiểu điều hướng. Xây dựng ứng dụng React Native với các màn hình chính, màn hình phụ, danh sách dữ liệu, thông tin chi tiết và chức năng yêu thích.

Ứng dụng TravellingApp được xây dựng với chủ đề khám phá thế giới động vật, giúp người dùng tìm hiểu hình ảnh, đặc điểm, môi trường sống, thức ăn và những thông tin thú vị về các loài động vật.

## 2. Link ứng dụng Expo

- **Tên ứng dụng:** TravellingApp
- **Link Expo Snack:https://snack.expo.dev/@anhquan123/travellingapp
- **Nền tảng:** React Native – Expo Snack

## 3. Các chức năng chính

- Trang chủ hiển thị banner nổi bật và danh sách động vật.
- Hiển thị 9 loài động vật.
- Tìm kiếm động vật theo tên.
- Phân loại động vật ăn thịt, ăn cỏ và ăn tạp.
- Xem thông tin chi tiết từng động vật.
- Thêm hoặc xóa động vật khỏi danh sách yêu thích.
- Hiển thị thông tin cá nhân.
- Điều hướng giữa các màn hình bằng Tab Navigation.
- Sử dụng Drawer Navigation để truy cập Giới thiệu, Cài đặt và Liên hệ.
- Sử dụng Stack Navigation để mở màn hình chi tiết động vật.

## 4. Cấu trúc thư mục

```text
Bt08/
│
├── App.js
├── Readme.md
│
└── components/
    ├── TravelHeader.js
    ├── CategoryList.js
    ├── DestinationCard.js
    ├── FavoriteCard.js
    ├── ProfileInfo.js
    ├── HomeScreen.js
    ├── FavoriteScreen.js
    ├── ProfileScreen.js
    ├── DetailScreen.js
    ├── AboutScreen.js
    ├── SettingsScreen.js
    └── ContactScreen.js
```


## 5. Các màn hình của ứng dụng

### 5.1 Trang chủ

Trang chủ hiển thị banner, thanh tìm kiếm, danh mục động vật và danh sách các loài động vật. Người dùng có thể tìm kiếm, lọc danh mục, thêm yêu thích hoặc mở trang chi tiết.

<img width="403" height="761" alt="image" src="https://github.com/user-attachments/assets/cda2e959-7a8f-41bf-b99c-0e0dacbb908f" />


### 5.2 Trang yêu thích

Hiển thị danh sách động vật mà người dùng đã thêm vào yêu thích. Người dùng có thể xem lại hoặc xóa các động vật khỏi danh sách.


<img width="425" height="603" alt="image" src="https://github.com/user-attachments/assets/51efd5a3-7702-4253-bde5-48a02bce1440" />


### 5.3 Trang cá nhân

Hiển thị thông tin cá nhân của sinh viên và giao diện giới thiệu người sử dụng ứng dụng.


<img width="427" height="635" alt="image" src="https://github.com/user-attachments/assets/409dabc3-aee2-4bdc-842b-e98d2db94146" />


### 5.4 Trang chi tiết động vật

Khi nhấn vào một động vật tại trang chủ, ứng dụng sẽ mở màn hình chi tiết. Màn hình cung cấp các thông tin như hình ảnh, giới thiệu, môi trường sống, thức ăn, chiều cao, cân nặng, tuổi thọ, tập tính và những sự thật thú vị.


<img width="425" height="766" alt="image" src="https://github.com/user-attachments/assets/ce453e49-c65b-437e-ba76-28dcc46185db" />


### 5.5 Trang giới thiệu

Giới thiệu mục đích, nội dung và các chức năng của ứng dụng TravellingApp.

<img width="422" height="618" alt="image" src="https://github.com/user-attachments/assets/df3dfb90-beeb-4053-a5ae-489d4afb55e7" />


### 5.6 Trang cài đặt

Hiển thị khu vực cài đặt của ứng dụng.

<img width="425" height="447" alt="image" src="https://github.com/user-attachments/assets/b501d2ec-24d0-474c-8707-88ad74d46ab6" />



### 5.7 Trang liên hệ

Hiển thị thông tin liên hệ và hỗ trợ người dùng tìm hiểu thông tin về ứng dụng.

<img width="421" height="432" alt="image" src="https://github.com/user-attachments/assets/a6b4c2ff-0518-4797-ac3d-88a290e6413c" />

## 6. Hệ thống điều hướng

### Tab Navigation

Sử dụng Bottom Tab Navigation để chuyển đổi giữa 3 màn hình chính:

- Trang chủ
- Yêu thích
- Cá nhân

**Hình ảnh Tab Navigation:**

![Tab Navigation](images/TabNavigation.png)

### Drawer Navigation

Sử dụng Drawer Navigation để truy cập các chức năng:

- Giới thiệu
- Cài đặt
- Liên hệ

**Hình ảnh Drawer Navigation:**

![Drawer Navigation](images/DrawerNavigation.png)

### Stack Navigation

Sử dụng Stack Navigation để chuyển từ danh sách động vật sang màn hình chi tiết của từng động vật.

**Hình ảnh Stack Navigation:**

![Stack Navigation](images/StackNavigation.png)

## 7. Kỹ thuật sử dụng

- **Tab Navigation:** Điều hướng giữa Trang chủ, Yêu thích và Cá nhân.
- **Drawer Navigation:** Điều hướng đến Giới thiệu, Cài đặt và Liên hệ.
- **Stack Navigation:** Mở màn hình chi tiết động vật.
- **FlatList:** Hiển thị danh sách động vật và danh sách yêu thích.
- **Flexbox:** Bố trí, sắp xếp và căn chỉnh các thành phần giao diện.
- **Component:** Chia ứng dụng thành các thành phần độc lập, dễ quản lý và tái sử dụng.
- **Props:** Truyền dữ liệu giữa các Component.
- **useState:** Quản lý trạng thái danh mục, tìm kiếm và danh sách yêu thích.

## 8. Kết quả đạt được

Hoàn thành ứng dụng TravellingApp với nhiều khu vực chức năng và hệ thống điều hướng kết hợp Tab Navigation, Drawer Navigation và Stack Navigation.

Ứng dụng có thể hiển thị danh sách động vật, tìm kiếm, phân loại, xem thông tin chi tiết, quản lý yêu thích và hiển thị thông tin cá nhân.

Thông qua bài tập, em củng cố kiến thức về React Native, xây dựng Component, truyền Props, quản lý State, sử dụng FlatList, Flexbox và triển khai các phương thức điều hướng trong ứng dụng di động.


