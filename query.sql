use user_records_db;
Drop table users;
Drop table wallet;

USE user_records_db;
CREATE TABLE user_IDtype_table (
    user_IDtype_id INT AUTO_INCREMENT PRIMARY KEY,
    user_IDtype_name VARCHAR(50) NOT NULL UNIQUE
);


CREATE TABLE users_table(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_phone VARCHAR(10) NOT NULL,
    user_IDtype INT NOT NULL,
    unique_id VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(60) NOT NULL,
    FOREIGN KEY (user_IDtype) REFERENCES user_IDtype_table(user_IDtype_id)
);


CREATE TABLE IF NOT EXISTS wallet_table(
  wallet_id INT PRIMARY KEY,
  wallet_amount DECIMAL(10, 2) DEFAULT 0,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users_table(user_id)
);

INSERT INTO user_idtype_table (user_IDtype_name) value("Driver's license");
INSERT INTO user_idtype_table (user_IDtype_name) value("Passport");
INSERT INTO user_idtype_table (user_IDtype_name) value("Social Insurance Number card");
INSERT INTO user_idtype_table (user_IDtype_name) value("Permanent resident card");
INSERT INTO user_idtype_table (user_IDtype_name) value("Certificate of Canadian citizenship");
INSERT INTO user_idtype_table (user_IDtype_name) value("Birth certificate");   
INSERT INTO user_idtype_table (user_IDtype_name) value("Health card");
INSERT INTO user_idtype_table (user_IDtype_name) value("Government identification card");

SELECT * FROM user_idtype_table;










