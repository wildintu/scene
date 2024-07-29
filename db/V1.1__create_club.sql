CREATE TABLE IF NOT EXISTS club (
    id SERIAL PRIMARY KEY NOT NULL,
    club_id int,
    email VARCHAR,
    encrypted_password VARCHAR,
    name VARCHAR,
    phone VARCHAR,
    address VARCHAR,
    city VARCHAR,
    state VARCHAR,
    zip INT,
    website VARCHAR
);