DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    entry_id serial PRIMARY KEY,
    author VARCHAR,
    title VARCHAR,
    body VARCHAR
);