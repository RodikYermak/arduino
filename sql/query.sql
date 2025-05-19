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

/*
	Select the brand, model, condition and price from cars
		order the table by condition in descending order
		and by price in ascending order
*/
-- SELECT brand, model, condition, price, sold FROM cars
--     WHERE sold IS FALSE AND condition != 5
--     ORDER BY condition DESC, price ASC;
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






-- ORDER BY
-- LIMIT
-- COUNT and SUM
-- MAX, MIN, AVG
-- GROUP BY
-- HAVING
-- Challenges 2
-- Manipulating data
-- INSERT INTO
-- UPDATE
-- DELETE
