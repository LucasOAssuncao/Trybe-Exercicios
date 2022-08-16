CREATE TABLE animais(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
especie VARCHAR(100) NOT NULL,
sexo VARCHAR(100) NOT NULL,
idade INT NOT NULL,
localizacao VARCHAR(100) NOT NULL
);

CREATE TABLE gerente(
gerente_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL
);

CREATE TABLE cuidador(
cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
gerente_id INT NOT NULL,
FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE animal_cuidador(
animal_id INT,
cuidador_id INT,
PRIMARY KEY(animal_id, cuidador_id),
FOREIGN KEY (animal_id) REFERENCES animais (id),
FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);