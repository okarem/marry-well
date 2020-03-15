BEGIN;

DROP TABLE IF EXISTS users;

create table users (
	userId SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
    hashedPassword Varchar(200) NOT NULL
);

insert into users (name,hashedPassword) values ('Gigi','$2b$10$MqmIfcE/pRl309z3dwAMxeBkU4CDAzRW29pj.ea6lHgeBjAYfDILC');
insert into users (name,hashedPassword) values ('Lala','$2b$10$MqmIfcE/pRl309z3dwAMxeBkU4CDAzRW29pj.ea6lHgeBjAYfDILC');
insert into users (name,hashedPassword) values ('Dodo','$2b$10$MqmIfcE/pRl309z3dwAMxeBkU4CDAzRW29pj.ea6lHgeBjAYfDILC');
insert into users (name,hashedPassword) values ('Bebo','$2b$10$1RSFfD8atLf8Frp1rkDixO5pHyjRQC03foVPdVFwz66ejEo2yQ9l6');
insert into users (name,hashedPassword) values ('Zizo','$2b$10$1RSFfD8atLf8Frp1rkDixO5pHyjRQC03foVPdVFwz66ejEo2yQ9l6');
insert into users (name,hashedPassword) values ('Soso','$2b$10$1RSFfD8atLf8Frp1rkDixO5pHyjRQC03foVPdVFwz66ejEo2yQ9l6');
insert into users (name,hashedPassword) values ('Tinki','$2b$10$1RSFfD8atLf8Frp1rkDixO5pHyjRQC03foVPdVFwz66ejEo2yQ9l6');

DROP TABLE IF EXISTS items;

create table items (
	itemId SERIAL PRIMARY KEY,
    userId INT NOT NULL,
	itemDesc VARCHAR(200) NOT NULL,
    itemCategory Varchar(50) NOT NULL DEFAULT 'other',
    FOREIGN KEY (userId) REFERENCES users(userId)
);

insert into items (userId, itemDesc, itemCategory) values (1, N'قهوة', N'مشروب');
insert into items (userId, itemDesc, itemCategory) values (1, N'مياه معدنيه', N'مشروب');
insert into items (userId, itemDesc, itemCategory) values (1, N'تول', N'زينة');
insert into items (userId, itemDesc, itemCategory) values (1, 'cups', 'dinning');
insert into items (userId, itemDesc, itemCategory) values (1, 'plates', 'dinning');
insert into items (userId, itemDesc, itemCategory) values (1, 'water', 'drinks');
insert into items (userId, itemDesc, itemCategory) values (1, 'soft drink', 'drinks');
insert into items (userId, itemDesc, itemCategory) values (1, 'tissue', 'dinning');

DROP TABLE IF EXISTS guests;

create table guests (
	guestId SERIAL PRIMARY KEY,
    userId INT NOT NULL,
	name VARCHAR(100) NOT NULL,
	city VARCHAR(50) NOT NULL,
	gender VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId)
);

insert into guests (userId, name, city,gender,status) values (1, 'Ron', 'Haifa','Male','single');
insert into guests (userId, name, city,gender,status) values (1, 'Dani', 'Haifa','Male','married');
insert into guests (userId, name, city,gender,status) values (1, 'Lala', 'Haifa','Female','single');
insert into guests (userId, name, city,gender,status) values (1, 'Cia', 'TLV','Female','married');
insert into guests (userId, name, city,gender,status) values (1, 'koka', 'TLV','Female','single');
insert into guests (userId, name, city,gender,status) values (1, 'Boba', 'TLV','Male','engaged');
insert into guests (userId, name, city,gender,status) values (1, 'Sami', 'Nazareth','Male','married');



COMMIT;