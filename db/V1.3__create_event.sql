CREATE TABLE IF NOT EXISTS event (
  id SERIAL PRIMARY KEY NOT NULL,
  club_id int,
  venue_id int,
  title VARCHAR,
  event_date VARCHAR,
  description VARCHAR,
  cost VARCHAR,
  start_at timestamp NULL,
  end_at timestamp NULL
);