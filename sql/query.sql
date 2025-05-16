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




-- Challenges 1
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
