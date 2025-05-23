-- SELECT all
-- SELECT * FROM cars;

-- Selecting columns
-- SELECT brand, model, price FROM cars;
-- SELECT brand, model, condition, year FROM cars;

-- WHERE clause
-- SELECT brand, model, color, price FROM cars
--     WHERE color = 'black';

-- SELECT brand, model, condition, price FROM cars
--     WHERE condition = 0;

-- Numerical filtering
-- SELECT brand, model, condition, price FROM cars
--     WHERE condition > 3
-- SELECT brand, model, condition, price FROM cars
--     WHERE price < 50000;

-- Not equal
-- SELECT brand, model, year, price FROM cars
--     WHERE year != 1965; -- <> 1965
-- SELECT brand, model, year, price, color FROM cars
--     WHERE color <> 'yellow';

-- NOT and LIKE
-- WILDCARDS
-- % any number of any character, eg '%green%'
-- _ one of any character, eg '_-Type'

-- SELECT brand, model, color, year FROM cars
    -- WHERE color LIKE '%green%';
-- SELECT brand, model, color, year FROM cars
--     WHERE color NOT LIKE '%green%';
-- SELECT brand, model, color, year, price FROM cars
--     WHERE model LIKE 'DB_';

-- AND
-- SELECT brand, model, color, year FROM cars
--     WHERE color NOT LIKE '%green%'
--     AND model LIKE 'DB_'
--     AND year > 1964;
-- SELECT brand, model, color, year, condition, price FROM cars
--     WHERE year < 1970
--     AND condition >= 3;
-- SELECT brand, model, year, condition, price FROM cars
--     WHERE condition > 3
--     AND year < 1970
--     AND price <= 100000

-- BETWEEN
-- SELECT brand, model, year, price FROM cars
--     WHERE year BETWEEN 1980 AND 1989;
-- SELECT brand, model, condition, color, price FROM cars
--     WHERE price BETWEEN 20000 AND 60000
--     AND condition BETWEEN 1 AND 3
--     AND color LIKE '%red%';

-- OR
-- SELECT brand, model, condition, price FROM cars
--     WHERE (price < 250000
--     OR brand = 'Porsche')
--     AND condition > 3;
-- SELECT brand, model, color, year, price, sold FROM cars
--     WHERE (color LIKE '%red%'
--     OR year BETWEEN 1960 AND 1969)
--     AND sold IS false;

-- IN operator
-- SELECT brand, model, price, sold FROM cars
--     WHERE brand IN('Ford', 'Chevrolet', 'Ferrari')
--     AND sold IS FALSE;
-- SELECT brand, model, year, condition FROM cars
--     WHERE condition >= 3
--     AND year IN(1961, 1963, 1965, 1967, 1969)
--     AND sold IS FALSE;
-- SELECT brand, model, price, sold FROM cars
-- 	WHERE (
-- 		brand NOT IN ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
-- 		OR price < 50000
-- 	) AND sold IS FALSE;

-- Challenges 1
/*
	Select brand, model, and color from cars
		where the color is 'red'
		and the brand is not 'Ferrari'
		and the car has not been sold
*/

-- SELECT brand, model, color FROM cars
--     WHERE color LIKE '%red%'
--     AND brand != 'Ferrari'
--     AND sold IS FALSE;

/*
	Select brand, model, and color from cars
		where the color is not red, blue, or white
		and the brand is none of: Aston Martin, Bentley or Jaguar
		and sold is false
*/
-- SELECT brand, model, color FROM cars
--     WHERE color NOT IN('red', 'blue', 'white')
--     AND brand NOT IN('Aston Martin', 'Bentley', 'Jaguar')
--     AND sold IS FALSE;
/*
	Select brand, model, year, sold from cars
		where the brand is 'Dodge' and year is in the 60s
		or the brand is either 'Ford' or 'Triumph' and the car is from the 70s
		only select cars where sold is not true
*/
-- SELECT brand, model, year, sold FROM cars
--   WHERE ((brand = 'Dodge' AND year BETWEEN 1960 AND 1969)
--   OR (brand IN ('Ford', 'Triumph') AND year BETWEEN 1970 AND 1979))
--   AND SOLD IS NOT TRUE;

-- ORDER BY
/*
	Select the brand, model, condition and price from cars
		order the table by condition in descending order
		and by price in ascending order
*/
-- SELECT brand, model, condition, price, sold FROM cars
--     WHERE sold IS FALSE AND condition != 5
--     ORDER BY condition DESC, price ASC;

-- LIMIT
/*
	Select the brand, model, color and price from cars
		where the color is a shade of 'red'
		and sold is false
		order by price
		limit the results to 5
*/
-- SELECT brand, model, color, price FROM cars
--     WHERE color LIKE '%red%' AND sold IS FALSE
--     ORDER BY price
--     LIMIT 5;

-- COUNT and SUM
/*
	Sum the price of cars
		where sold is true
	Use the alias total_earnings in your output
*/
-- SELECT SUM(price) AS total_earnings FROM cars
--     WHERE sold IS TRUE;
/*
	Use the AVG aggregate function to find the average price
		where the brand is Bentley
*/
-- SELECT FLOOR(AVG(price)) as avg_bentley_price FROM cars
--     WHERE brand = 'Bentley';

-- MAX, MIN, AVG
/*
	Select the average, minimum and maximum price from cars
		where sold is true
	Round the average up to the nearest whole number
		and use 'avg' as the alias for that result
*/
-- SELECT CEIL(AVG(price)) as avg,
--     MIN(price),
--     MAX(price)
-- FROM cars
-- WHERE sold IS TRUE;

-- GROUP BY
/*
	Select the condition, and a count of the condition from cars
		group by the condition column
*/
-- SELECT condition, COUNT(condition) FROM cars
--     GROUP BY condition
/*
	Select:
		* the brand
		* a count of the brand
		* and an average of the price for each brand
		* round the average down to the nearest number
		* alias the average as 'AVG' in your output
	From cars where
		the car has not been sold
	Group the table by brand.
*/
-- SELECT brand, COUNT(brand), FLOOR(AVG(price)) AS AVG FROM cars
--     WHERE sold IS FALSE
--     GROUP BY brand;

-- HAVING
/*
	Select:
		* year
		* a count of cars from that year, aliased as car_count
		* the maximum price
		* the minimum price
	from the table cars
		where the car has been sold
	group by year
		only show years where more than one car has been sold from that year
	order the result by car_count
*/
-- SELECT year, COUNT(year) AS car_count, MAX(price), MIN(price) FROM cars
--     WHERE sold IS TRUE
--     GROUP BY year
--     HAVING COUNT(year) > 1
--     ORDER BY car_count


-- Challenges 2
/*
	Select brand, model, and year from cars
		only show the oldest 5 cars in the database
		show cars which haven't been sold
*/
-- SELECT brand, model, year FROM cars
--     WHERE sold IS FALSE
--     ORDER BY year ASC
--     LIMIT 5;
/*
	Select color and count how many cars have each color
		find cars which have not been sold
		order by count in descending order
		only show results where the count is greater than 2
*/
-- SELECT color, COUNT(color) FROM cars
--     WHERE sold IS FALSE
--     GROUP BY color
--     HAVING COUNT(color)>2
--     ORDER BY count DESC

-- Manipulating data
-- INSERT INTO
/*
	Insert these two cars to the cars table:
		1. Brand: Chevrolet, model: Bel Air, year: 1955,
			retail_price: 50000, color: purple, condition 5, sold: false
		2. Brand: Porsche, model: 944 Turbo, year: 1986,
			retail_price: 48000, color: white, condition: 4, sold: false
*/
-- INSERT INTO cars (brand, model, year, price, color, condition, sold)
--     VALUES ('Chevrolet', 'Bel Air', 1955, 50000, 'purple', 5, false),
--     ('Porsche', '944 Turbo', 1986, 48000, 'white', 4, false);
-- UPDATE
-- UPDATE cars SET
-- 	sold = TRUE
-- WHERE brand = 'Ford'
-- 	AND model = 'Escort RS2000';
/*
	Update the record for the Aston Martin DB4 with ID 14
		set the condition to 5
		and the price to 465000
*/
-- UPDATE cars SET
--     condition = 5, price = 465000
-- WHERE id=14;
/*
	Set the condition to 1
		and the price to $10,000
	where the car's brand is Porsche
		and sold is false
*/
-- UPDATE cars SET
--     condition = 1, price = 10000
-- WHERE brand = 'Porsche';
-- DELETE
/*
	Delete from the cars table, any record where
		condition is 0
*/
-- DELETE FROM cars
--     WHERE condition = 0;
/*
	Delete any record from the cars table where sold is TRUE
*/
-- DELETE FROM cars
--     WHERE sold IS TRUE;  
