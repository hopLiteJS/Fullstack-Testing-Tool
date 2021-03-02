-- CREATE table credential(id serial primary key, username varchar not null unique, password varchar not null)
-- ^ - Schema


-- INSERT into credential(username, password) values ('reuben123','password123')
-- ^ - Create


-- SELECT username, password FROM credential WHERE username = 'karin' AND password = 'password123'
-- ^Read 


-- 