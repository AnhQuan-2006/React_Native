Link ứng dụng expo snack: https://snack.expo.dev/@anhquan123/bookingapp
1. Giới thiệu

FoodBooking là ứng dụng đặt món ăn và đặt bàn nhà hàng được xây dựng bằng React Native trên nền tảng Expo Snack. Ứng dụng giúp khách hàng xem thực đơn, lựa chọn món ăn, xem chi tiết món, chọn số lượng, đặt bàn và xác nhận thông tin đặt bàn.

Ứng dụng được thiết kế với giao diện đơn giản, dễ sử dụng, sử dụng màu xanh lá nhạt và trắng, tạo cảm giác thân thiện và phù hợp với chủ đề nhà hàng.

2. Mục tiêu

Xây dựng ứng dụng React Native gồm nhiều màn hình.

Hiển thị danh sách món ăn với hình ảnh, tên, mô tả và giá tiền.

Cho phép người dùng xem chi tiết và lựa chọn món ăn.

Chọn ngày, giờ đến nhà hàng và số lượng khách.

Nhập tên khách hàng bằng TextInput.

Hiển thị thông tin đặt bàn trước khi xác nhận.

Sử dụng Stack Navigation để chuyển đổi giữa các màn hình.

3. Công nghệ sử dụng

React Native

Expo Snack

React Navigation

Stack Navigation

useState

TextInput

Pressable

Props

4. Cấu trúc ứng dụng

App.js: Quản lý điều hướng giữa các màn hình.

HomeScreen.js: Hiển thị banner nhà hàng và danh sách món ăn.

ServiceDetailScreen.js: Hiển thị thông tin chi tiết món ăn và chọn số lượng.

BookingScreen.js: Chọn ngày, giờ, số người và nhập tên khách hàng.

ConfirmationScreen.js: Hiển thị thông tin đặt bàn sau khi xác nhận.

5. Các component

ServiceCard: Hiển thị thẻ món ăn gồm hình ảnh, tên, mô tả và giá.

DateSelector: Cho phép người dùng lựa chọn ngày đến nhà hàng.

TimeSlot: Hiển thị các khung giờ để khách hàng lựa chọn.

BookingSummary: Tổng hợp thông tin món ăn, số lượng, ngày, giờ, tên khách hàng, số người và tổng tiền.

6. Chức năng ứng dụng

Xem danh sách các món ăn tại nhà hàng.

Xem thông tin chi tiết món ăn.

Tăng hoặc giảm số lượng món ăn.

Chọn ngày đến nhà hàng.

Chọn giờ đặt bàn.

Nhập tên khách hàng.

Nhập số người đến ăn.

Xem thông tin đặt bàn và tổng tiền.

Xác nhận đặt bàn.

Quay lại màn hình trước để thay đổi thông tin.

8. Hình ảnh giao diện

8.1. Màn hình trang chủ – HomeScreen

<img width="597" height="712" alt="image" src="https://github.com/user-attachments/assets/fc57c63e-a0b0-4483-a85f-2728ea4cf11e" />


Hiển thị banner giới thiệu nhà hàng và danh sách các món ăn. Mỗi món ăn có hình ảnh, tên món, mô tả và giá tiền. Người dùng có thể nhấn vào món ăn để xem thông tin chi tiết.

8.2. Màn hình chi tiết món ăn – ServiceDetailScreen

<img width="617" height="656" alt="image" src="https://github.com/user-attachments/assets/a7a75cb1-2588-4696-b3c5-e90e0a8f0b7f" />


Hiển thị hình ảnh, tên, mô tả, giá món ăn và chức năng tăng giảm số lượng. Người dùng có thể lựa chọn món ăn và chuyển sang màn hình đặt bàn.

8.3. Màn hình đặt bàn – BookingScreen

<img width="617" height="807" alt="image" src="https://github.com/user-attachments/assets/3c0c4434-b2ee-4836-96d0-cbe6a406f472" />


Cho phép người dùng chọn ngày, giờ đến nhà hàng, nhập tên khách hàng và số người. Thông tin đặt bàn và tổng tiền được hiển thị trong phần tóm tắt trước khi xác nhận.

8.4. Màn hình xác nhận – ConfirmationScreen

<img width="593" height="507" alt="image" src="https://github.com/user-attachments/assets/08a8b099-826e-4900-bff8-35b33d3211fe" />


Hiển thị thông tin đặt bàn sau khi xác nhận, bao gồm tên khách hàng, số người, ngày giờ đến nhà hàng, món ăn, số lượng và tổng tiền.

9. Kết quả đạt được

Sau khi hoàn thành, ứng dụng FoodBooking xây dựng được quy trình đặt món và đặt bàn nhà hàng mô phỏng. Người dùng có thể thực hiện các thao tác từ xem thực đơn, lựa chọn món ăn, nhập thông tin đặt bàn đến xác nhận lịch hẹn.

Ứng dụng sử dụng Stack Navigation để chuyển đổi giữa các màn hình, Props để truyền dữ liệu giữa các component và useState để cập nhật thông tin khi người dùng thao tác.
