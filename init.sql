DROP DATABASE IF EXISTS taxdb;
CREATE DATABASE taxdb;
\c taxdb;
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username text,
    password text
);