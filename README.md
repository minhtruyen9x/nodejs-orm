- Viết các API theo các chức năng như sau với database db_food
  + Xử lý like nhà hàng (like, unlike, lấy danh sách like theo nhà hàng và
user)
  + Xử lý đánh giá nhà hàng (thêm đánh giá, lấy danh sách đánh theo
nhà hàng và user)
  + User đặt món (thêm order)
  
- route:
  - Like Route
    + **GET localhost:4000/api/v1/likes** :           lấy danh sách tất cả lượt like(cùng cả thông tin của user đã like và restaurant được like)
    
    + **POST localhost:4000/api/v1/likes** :          tạo lượt like
    
    + **DELETE localhost:4000/api/v1/likes/:id** :    Xóa Lượt like
  
  - Rate Route
    + **GET localhost:4000/api/v1/rates** :           lấy danh sách tất cả lượt rate(cùng cả thông tin của user đã rate và restaurant được rate)
    
    + **POST localhost:4000/api/v1/rates** :          tạo lượt like
  
  - Order Route
    + **POST localhost:4000/api/v1/orders** :         tạo order food
  
  - User Route
    + **GET localhost:4000/api/v1/users** :           lấy danh sách người dùng (bao hàm luôn số lượt like nhà hàng, nhưng không có chi tiết đã like nhà hàng nào, chỉ có id nhà hàng)
    
    + **GET localhost:4000/api/v1/users/:id** :       lấy chi tiết người dùng  (bao hàm luôn số lượt like và cả thông tin nhà hàng được like)
  
  - Restaurant Route
    + **GET localhost:4000/api/v1/restaurants** :     lấy danh sách nhà hàng (bao hàm luôn số lượt like, nhưng không có chi tiết người, chỉ có id user)
    
    + **GET localhost:4000/api/v1/restaurants/:id** : lấy chi tiết nhà hàng  (bao hàm luôn số lượt like và cả thông tin người đã like)
