CREATE TABLE IF NOT EXISTS "user" (
    id BIGSERIAL CONSTRAINT pk_user PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    cellphone VARCHAR(50) NOT NULL,
    coordinate POINT NOT NULL
) -- Tabela de User