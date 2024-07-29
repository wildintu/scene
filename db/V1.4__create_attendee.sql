CREATE TABLE IF NOT EXISTS attendee (
  id SERIAL PRIMARY KEY NOT NULL,
  event_id int,
  email VARCHAR,
  encrypted_password VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  date_of_birth VARCHAR,
  phone VARCHAR,
  address VARCHAR,
  city VARCHAR,
  state VARCHAR,
  zip int,
  club VARCHAR,
  created_at timestamp default current_timestamp NOT NULL
);