### Exercicio 1
a. Exclui a coluna salário.
b. Muda gender para sex;
c. Volta para gender.

### Exercicio 2

a. UPDATE Actor SET name = "Tom Cruise", birth_date = "2020-02-10"
WHERE id = "003";

b. UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c. UPDATE Actor
SET 
		name = "Moacyr Franco",
		birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";

### Exercicio 3

a. DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b. DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;

### Exercicio 4

a. SELECT MAX(salary) FROM Actor;
b. SELECT MIN(salary) FROM Actor WHERE gender = "female";
c. SELECT COUNT(*) FROM Actor WHERE gender = "female";
d. SELECT SUM(salary) FROM Actor;

### Exercicio 5

a. Retorna a quantidade de pessoas do sexo feminino.
b. SELECT id, name FROM Actor
ORDER BY name DESC;
c. SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
e. SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### Exercicio 6

a. ALTER TABLE Movie ADD playing_limit_date DATE;
b. ALTER TABLE Movie ADD playing_limit_date DATE;
c. UPDATE Movie SET playing_limit_date = "2020-12-31"
WHERE id = "001";
d. DELETE FROM Movie WHERE id = "001";

