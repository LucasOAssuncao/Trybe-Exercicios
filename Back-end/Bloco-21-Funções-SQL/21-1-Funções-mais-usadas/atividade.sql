-- Active: 1660136004595@@127.0.0.1@3306@hr
SELECT MAX(salary) FROM employees;

SELECT MAX(salary) - MIN(salary) FROM employees;

SELECT job_id, AVG(salary) FROM employees
GROUP BY job_id
ORDER BY AVG(salary) DESC;

SELECT SUM(salary) FROM employees;

SELECT MAX(salary), MIN(salary), SUM(salary), AVG(salary) FROM employees;

SELECT COUNT(job_id) FROM employees
WHERE job_id LIKE "IT_PROG";

SELECT job_id, SUM(salary) FROM employees
GROUP BY job_id;

SELECT job_id, SUM(salary) FROM employees
WHERE job_id = "IT_PROG"
GROUP BY job_id;

SELECT job_id, AVG(salary) FROM employees
WHERE job_id <> "IT_PROG"
GROUP BY job_id
ORDER BY AVG(salary) DESC;


SELECT department_id, AVG(salary), COUNT(*) FROM employees
GROUP BY department_id
HAVING COUNT(*) > 10;

UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SELECT * FROM employees
WHERE CHAR_LENGTH(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) FROM employees;

SELECT employee_id, first_name, DAY(hire_date) FROM employees;

SELECT employee_id, first_name, MONTH(hire_date)
FROM employees;

SELECT UCASE(CONCAT(first_name,' ',last_name)) FROM employees;

SELECT last_name, hire_date FROM employees
WHERE YEAR(hire_date) = 1987 AND MONTH(hire_date) = 7; 


SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) 'dias trabalhados' FROM employees;

