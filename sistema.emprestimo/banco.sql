CREATE TABLE equipamentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    condicao_uso VARCHAR(30) NOT NULL,
    disponivel BOOLEAN NOT NULL
);

INSERT INTO equipamentos (nome, categoria, condicao_uso, disponivel)
VALUES
('Notebook Lenovo', 'Notebook', 'Bom', TRUE),
('Notebook Dell', 'Notebook', 'Excelente', TRUE),
('Projetor Epson', 'Projetor', 'Bom', FALSE),
('Kit Arduino', 'Robótica', 'Excelente', TRUE),
('Kit LEGO Mindstorms', 'Robótica', 'Regular', TRUE);