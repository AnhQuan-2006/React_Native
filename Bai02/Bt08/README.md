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

## 5. Các Component sử dụng

### 5.1 TravelHeader

Component hiển thị banner ở đầu trang chủ, giới thiệu chủ đề khám phá thế giới động vật, tạo điểm nhấn cho giao diện ứng dụng.

**Hình ảnh giao diện TravelHeader:**

![TravelHeader](images/TravelHeader.png)

**Code TravelHeader.js:**

```jsx
// Chèn code component TravelHeader.js tại đây
```

### 5.2 CategoryList

Component hiển thị danh sách danh mục động vật. Người dùng có thể chọn Tất cả, Động vật ăn thịt, Động vật ăn cỏ hoặc Động vật ăn tạp để lọc danh sách.

**Hình ảnh giao diện CategoryList:**

![CategoryList](images/CategoryList.png)

**Code CategoryList.js:**

```jsx
// Chèn code component CategoryList.js tại đây
```

### 5.3 DestinationCard

Component hiển thị từng động vật dưới dạng thẻ, bao gồm hình ảnh, tên, danh mục và chức năng yêu thích. Người dùng có thể nhấn vào thẻ để xem thông tin chi tiết.

**Hình ảnh giao diện DestinationCard:**

![DestinationCard](images/DestinationCard.png)

**Code DestinationCard.js:**

```jsx
// Chèn code component DestinationCard.js tại đây
```

### 5.4 FavoriteCard

Component hiển thị các động vật đã được thêm vào danh sách yêu thích, hỗ trợ người dùng quản lý và xem lại các động vật yêu thích.

**Hình ảnh giao diện FavoriteCard:**

![FavoriteCard](images/FavoriteCard.png)

**Code FavoriteCard.js:**

```jsx
// Chèn code component FavoriteCard.js tại đây
```

### 5.5 ProfileInfo

Component hiển thị thông tin cá nhân của sinh viên bao gồm họ và tên, lớp và các thông tin giới thiệu.

**Hình ảnh giao diện ProfileInfo:**

![ProfileInfo](images/ProfileInfo.png)

**Code ProfileInfo.js:**

```jsx
// Chèn code component ProfileInfo.js tại đây
```

## 6. Các màn hình của ứng dụng

### 6.1 Trang chủ

Trang chủ hiển thị banner, thanh tìm kiếm, danh mục động vật và danh sách các loài động vật. Người dùng có thể tìm kiếm, lọc danh mục, thêm yêu thích hoặc mở trang chi tiết.

**Hình ảnh giao diện Trang chủ:**

![Trang chủ](images/HomeScreen.png)

### 6.2 Trang yêu thích

Hiển thị danh sách động vật mà người dùng đã thêm vào yêu thích. Người dùng có thể xem lại hoặc xóa các động vật khỏi danh sách.

**Hình ảnh giao diện Trang yêu thích:**

![Trang yêu thích](images/FavoriteScreen.png)

### 6.3 Trang cá nhân

Hiển thị thông tin cá nhân của sinh viên và giao diện giới thiệu người sử dụng ứng dụng.

**Hình ảnh giao diện Trang cá nhân:**

![Trang cá nhân](images/ProfileScreen.png)

### 6.4 Trang chi tiết động vật

Khi nhấn vào một động vật tại trang chủ, ứng dụng sẽ mở màn hình chi tiết. Màn hình cung cấp các thông tin như hình ảnh, giới thiệu, môi trường sống, thức ăn, chiều cao, cân nặng, tuổi thọ, tập tính và những sự thật thú vị.

**Hình ảnh giao diện Trang chi tiết:**

![Trang chi tiết](images/DetailScreen.png)

### 6.5 Trang giới thiệu

Giới thiệu mục đích, nội dung và các chức năng của ứng dụng TravellingApp.

**Hình ảnh giao diện Giới thiệu:**

![Trang giới thiệu](images/AboutScreen.png)

### 6.6 Trang cài đặt

Hiển thị khu vực cài đặt của ứng dụng.

**Hình ảnh giao diện Cài đặt:**

![Trang cài đặt](images/SettingsScreen.png)

### 6.7 Trang liên hệ

Hiển thị thông tin liên hệ và hỗ trợ người dùng tìm hiểu thông tin về ứng dụng.

**Hình ảnh giao diện Liên hệ:**

![Trang liên hệ](images/ContactScreen.png)

## 7. Hệ thống điều hướng

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

## 8. Kỹ thuật sử dụng

- **Tab Navigation:** Điều hướng giữa Trang chủ, Yêu thích và Cá nhân.
- **Drawer Navigation:** Điều hướng đến Giới thiệu, Cài đặt và Liên hệ.
- **Stack Navigation:** Mở màn hình chi tiết động vật.
- **FlatList:** Hiển thị danh sách động vật và danh sách yêu thích.
- **Flexbox:** Bố trí, sắp xếp và căn chỉnh các thành phần giao diện.
- **Component:** Chia ứng dụng thành các thành phần độc lập, dễ quản lý và tái sử dụng.
- **Props:** Truyền dữ liệu giữa các Component.
- **useState:** Quản lý trạng thái danh mục, tìm kiếm và danh sách yêu thích.

## 9. Kết quả đạt được

Hoàn thành ứng dụng TravellingApp với nhiều khu vực chức năng và hệ thống điều hướng kết hợp Tab Navigation, Drawer Navigation và Stack Navigation.

Ứng dụng có thể hiển thị danh sách động vật, tìm kiếm, phân loại, xem thông tin chi tiết, quản lý yêu thích và hiển thị thông tin cá nhân.

Thông qua bài tập, em củng cố kiến thức về React Native, xây dựng Component, truyền Props, quản lý State, sử dụng FlatList, Flexbox và triển khai các phương thức điều hướng trong ứng dụng di động.


