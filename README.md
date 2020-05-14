# rn-intro-guide-screen-example
## Install
npm i react-native-swiper

Có thể ko dùng Icon của native base, dùng icon vecter cũng được
Nhưng chú ý các các bộ Icon (AntDesign, FontAwsome...) có link vào assets của Android, project.pbxproj của iOS chưa. Nếu chưa thì react-native link

Chú ý các thông số trong style, không fix cứng, hãy dùng các hàm scale để không bị vỡ trên những màn hình device khác nhau.

## Các prop trong Swiper
Trong example này đã custom các nút Next, Pre, Skip. Nếu ko dùng thì remove và dùng mặc định của lib Swiper