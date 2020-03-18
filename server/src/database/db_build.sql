BEGIN;

DROP TABLE IF EXISTS users CASCADE;

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
    itemCategory INTEGER DEFAULT 0,

    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
);

insert into items (userId, itemDesc, itemCategory) values (1, N'قهوة', 1);
insert into items (userId, itemDesc, itemCategory) values (1, N'مياه معدنيه',2);
insert into items (userId, itemDesc, itemCategory) values (2, N'تول', 1);
insert into items (userId, itemDesc, itemCategory) values (2, 'cups', 2);
insert into items (userId, itemDesc, itemCategory) values (1, 'plates', 1);
insert into items (userId, itemDesc, itemCategory) values (3, 'water', 2);
insert into items (userId, itemDesc, itemCategory) values (3, 'soft drink', 1);
insert into items (userId, itemDesc, itemCategory) values (1, 'tissue', 2);

DROP TABLE IF EXISTS guests;

create table guests (
	guestId SERIAL PRIMARY KEY,
    userId INT NOT NULL,
	name VARCHAR(100) NOT NULL,
	city VARCHAR(50) NOT NULL,
	gender VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
);

insert into guests (userId, name, city,gender,status) values (1, 'Ron', 'Haifa','1','2');
insert into guests (userId, name, city,gender,status) values (1, 'Dani', 'Haifa','1','1');
insert into guests (userId, name, city,gender,status) values (1, 'Lala', 'Haifa','2','2');
insert into guests (userId, name, city,gender,status) values (1, 'Cia', 'TLV','2','1');
insert into guests (userId, name, city,gender,status) values (1, 'koka', 'TLV','2','3');
insert into guests (userId, name, city,gender,status) values (1, 'Boba', 'TLV','1','3');
insert into guests (userId, name, city,gender,status) values (1, 'Sami', 'Nazareth','1','1');


 
DROP TABLE IF EXISTS budget;

create table budget (
	budgetId SERIAL PRIMARY KEY,
	userId INT NOT NULL,
	item VARCHAR(100) NOT NULL,
    quantity int NOT NULL,
	price DOUBLE PRECISION,
	category INTEGER DEFAULT 0,
	FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
);

insert into budget (userId,item,quantity,price,category) values ('2','CocaCola',4,3.5,1);
insert into budget (userId,item,quantity,price,category) values ('2','7UP',6,100,2);
insert into budget (userId,item,quantity,price,category) values ('2','water',8,100,3);
insert into budget (userId,item,quantity,price,category) values ('2','soda',11,125.5,4);


COMMIT;