CREATE TABLE IF NOT EXISTS venue (
  id SERIAL PRIMARY KEY NOT NULL,
  venue_id int, 
  name VARCHAR,
  phone VARCHAR,
  email VARCHAR,
  address VARCHAR,
  city VARCHAR,
  state VARCHAR,
  zip INT,
  website VARCHAR,
  description VARCHAR
);