-- Active: 1660136004595@@127.0.0.1@3306@pixar

USE pixar;

SELECT
    m.title,
    b.domestic_sales,
    b.international_sales
FROM movies AS m
    INNER JOIN box_office AS b ON b.movie_id = m.id;

SELECT
    m.title,
    b.international_sales + b.domestic_sales
FROM movies AS m
    INNER JOIN box_office AS b ON b.movie_id = m.id
WHERE
    b.international_sales > domestic_sales;

SELECT m.title, b.rating
FROM movies AS m
    INNER JOIN box_office AS b ON b.movie_id = m.id
ORDER BY b.rating DESC;

SELECT t.name, m.title
FROM theater AS t
    LEFT JOIN movies AS m ON t.id = m.theater_id
ORDER BY t.id;

SELECT
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM theater t
    RIGHT JOIN movies m ON t.id = m.theater_id
ORDER BY t.name;