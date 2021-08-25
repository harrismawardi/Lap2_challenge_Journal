DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    author_name VARCHAR,
    title VARCHAR,
    story VARCHAR
);