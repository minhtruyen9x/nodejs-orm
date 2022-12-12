-- Tạo database app_food
DROP DATABASE IF EXISTS app_food;
CREATE DATABASE app_food;

USE app_food;
-- Tạo table user
DROP TABLE IF EXISTS users;
CREATE TABLE users(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	full_name VARCHAR(100),
	email VARCHAR(100),
	password VARCHAR(100)
);

INSERT INTO users(full_name,email,password)
VALUES 
	("name 1","email 1","password 1"),
	("name 2","email 2","password 2"),
	("name 3","email 3","password 3"),
	("name 4","email 4","password 4"),
	("name 5","email 5","password 5"),
	("name 6","email 6","password 6"),
	("name 7","email 7","password 7");
INSERT INTO users(full_name,email,password)
VALUES 
	("name 8","email 8","password 8"),
	("name 0","email 0","password 0");

-- Tạo table restaurant
DROP TABLE IF EXISTS restaurant;
CREATE TABLE restaurant(
	res_id INT PRIMARY KEY AUTO_INCREMENT,
	res_name VARCHAR(100),
	Image VARCHAR(255),
	descr VARCHAR(255)
);

INSERT INTO restaurant(res_name, Image, descr)
VALUES 
	("restaurant 1", "image 1", "description 1"),
	("restaurant 2", "image 2", "description 2"),
	("restaurant 3", "image 3", "description 3"),
	("restaurant 4", "image 4", "description 4"),
	("restaurant 5", "image 5", "description 5"),
	("restaurant 6", "image 6", "description 6"),
	("restaurant 7", "image 7", "description 7");


-- Tạo table rate_res
DROP TABLE IF EXISTS rate_res;
CREATE TABLE rate_res(
	user_id INT,
	res_id INT,
	amount INT,
	date_rate DATE,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

INSERT INTO rate_res(user_id, res_id, amount, date_rate)
VALUES 
	(1, 1, 2, "2022-03-12"),
	(2, 3, 1, "2022-03-20"),
	(3, 5, 2, "2022-04-15"),
	(3, 2, 3, "2022-04-30"),
	(3, 4, 1, "2022-05-25"),
	(5, 3, 2, "2022-06-10"),
	(6, 7, 2, "2022-03-08"),
	(6, 2, 1, "2022-05-21"),
	(7, 6, 3, "2022-06-18"),
	(4, 1, 1, "2022-04-08");


-- Tạo table like_res
DROP TABLE IF EXISTS like_res;
CREATE TABLE like_res(
	user_id INT,
	res_id INT,
	date_like DATE,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

INSERT INTO like_res(user_id, res_id, date_like)
VALUES 
	(1, 1, "2022-03-15"),
	(2, 3, "2022-03-22"),
	(3, 5, "2022-04-18"),
	(3, 2, "2022-05-02"),
	(3, 4, "2022-05-29"),
	(5, 3, "2022-06-20"),
	(6, 7, "2022-03-14"),
	(6, 2, "2022-05-22"),
	(7, 6, "2022-06-18"),
	(4, 1, "2022-04-10");

-- Tạo table food_type
DROP TABLE IF EXISTS food_type;
CREATE TABLE food_type(
	type_id INT PRIMARY KEY AUTO_INCREMENT,
	type_name VARCHAR(100)
);

INSERT INTO food_type(type_name)
VALUES 
	("food type 1"),
	("food type 2"),
	("food type 3"),
	("food type 4");


-- Tạo table foods
DROP TABLE IF EXISTS foods;
CREATE TABLE foods(
	food_id INT PRIMARY KEY AUTO_INCREMENT,
	food_name  VARCHAR(255),
	image VARCHAR(255),
	price FLOAT,
	descr VARCHAR(255),
	type_id INT,
	FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

INSERT INTO foods(food_name, image, price, descr, type_id)
VALUES 
	("food name 1", "image 1", 1000, "food description 1", 2),
	("food name 2", "image 2", 3000, "food description 2", 3),
	("food name 3", "image 3", 2000, "food description 3", 1),
	("food name 4", "image 4", 4000, "food description 4", 4);



-- Tạo table order
DROP TABLE IF EXISTS orders;
CREATE TABLE orders(
	user_id INT,
	food_id INT,
	amount INT,
	code VARCHAR(100),
	arr_sub_id VARCHAR(100),
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (food_id) REFERENCES foods(food_id)
);

INSERT INTO orders(user_id, food_id, amount, code, arr_sub_id)
VALUES 
	(1, 3, 2, "order code 1", "arr_sub_id 1"),
	(1, 2, 1, "order code 2", "arr_sub_id 2"),
	(1, 3, 2, "order code 3", "arr_sub_id 3"),
	(3, 4, 1, "order code 4", "arr_sub_id 4"),
	(4, 1, 8, "order code 5", "arr_sub_id 5"),
	(5, 2, 2, "order code 6", "arr_sub_id 6"),
	(5, 3, 2, "order code 7", "arr_sub_id 7"),
	(6, 1, 1, "order code 8", "arr_sub_id 8"),
	(8, 1, 4, "order code 9", "arr_sub_id 9"),
	(7, 3, 2, "order code 10", "arr_sub_id 10"),
	(3, 2, 5, "order code 11", "arr_sub_id 11");




-- Tạo table sub_food
DROP TABLE IF EXISTS sub_food;
CREATE TABLE sub_food(
	sub_id INT PRIMARY KEY AUTO_INCREMENT,
	sub_name VARCHAR(255),
	sub_price FLOAT,
	food_id INT,
	FOREIGN KEY (food_id) REFERENCES foods(food_id)
);

INSERT INTO sub_food(sub_name, sub_price, food_id)
VALUES 
	("food subname 1", 2500, 2),
	("food subname 2", 1500, 3),
	("food subname 3", 4500, 3),
	("food subname 4", 3500, 2),
	("food subname 5", 2500, 4),
	("food subname 6", 1500, 3),
	("food subname 7", 4500, 3),
	("food subname 8", 3500, 1);


-- Phần query SELECT
-- Tìm 5 người đã like nhà hàng nhiều nhất
SELECT users.full_name AS name , COUNT(like_res.res_id) AS total_like FROM users
LEFT JOIN like_res
ON users.user_id = like_res.user_id
GROUP BY users.user_id
ORDER BY total_like DESC
LIMIT 5;

-- Tìm 2 nhà hàng có lượt like nhiều nhất.
SELECT restaurant.res_name as name, COUNT(like_res.res_id) as total_like FROM restaurant
LEFT JOIN like_res
ON restaurant.res_id = like_res.res_id
GROUP BY restaurant.res_id
ORDER BY total_like DESC
LIMIT 2;

-- Tìm người đã đặt hàng nhiều nhất(số lần đặt nhiều nhất).
SELECT users.full_name FROM users
WHERE users.user_id = ( 
	SELECT orders.user_id FROM orders
	GROUP BY user_id
	ORDER BY COUNT(orders.food_id) DESC
	LIMIT 1
);

-- query sắp xếp số lần đăt hàng của mỗi người
SELECT orders.user_id ,COUNT(orders.food_id) AS total_orders FROM orders
GROUP BY user_id
ORDER BY COUNT(orders.food_id) DESC;

-- Tìm người đã đặt hàng với số lượng đặt hàng nhiều nhất.
SELECT users.full_name FROM users
WHERE users.user_id = ( 
	SELECT orders.user_id FROM orders
	GROUP BY user_id
	ORDER BY SUM(orders.amount) DESC
	LIMIT 1
);

-- query sắp xếp số lượng đặt hàng của mỗi người
SELECT orders.user_id ,SUM(orders.amount) AS total_orders_amount FROM orders
GROUP BY user_id
ORDER BY SUM(orders.amount) DESC;

-- Tìm người dùng không hoạt động trong hệ thống(không đặt hàng, không like, không đánh giá nhà hàng).
SELECT * FROM users
LEFT JOIN like_res
ON users.user_id = like_res.user_id
LEFT JOIN rate_res
ON users.user_id = rate_res.user_id
LEFT JOIN orders
ON users.user_id = orders.user_id
WHERE rate_res.user_id IS NULL 
AND like_res.user_id IS NULL 
AND orders.user_id IS NULL;

-- Tính trung bình sub_food của một food.
SELECT foods.food_name, AVG(sub_food.sub_price) as average_sub_food_price FROM foods
LEFT JOIN sub_food
ON foods.food_id = sub_food.food_id
GROUP BY foods.food_id;