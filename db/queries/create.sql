create schema if not exists `i1this` default character set utf8;

use i1this;

drop table if exists users, user_types, categories, products, proposals, product_in_category, user_oned_product, user_accepted_proposal, user_watches_category, category_parents_category, logs;

create table users(
    id int not null auto_increment primary key,
    name varchar(255) not null,
    email varchar(255) unique not null,
    type_id int,
    created_at datetime not null,
    active boolean default true,
        foreign key (type_id) references user_types(id)
);

create table user_types(
    id int not null auto_increment primary key,
    name varchar(255) not null
);

create table categories(
    id int not null auto_increment primary key,
    name varchar(255) not null
);

create table products(
    id int not null auto_increment primary key,
    name varchar(255) not null,
    created_by int not null,
    created_at datetime not null,
    price decimal not null,
    description varchar(255) not null,
    photos varchar(255) not null,
    ones int default 0,
    active boolean default 1,
        foreign key (created_by) references users(id)
);

create table proposals(
    id int not null auto_increment primary key,
    product_id int not null,
    created_by int not null,
    created_at datetime not null,
    price decimal not null,
    link varchar(255),
    minimun_quantity int,
    requires_intent boolean,
        foreign key (created_by) references users(id),
        foreign key (product_id) references products(id)

);

create table product_in_category(
    id int not null auto_increment primary key,
    product_id int not null,
    category_id int not null,
        foreign key (product_id) references products(id),
        foreign key (category_id) references categories(id)
);

create table user_oned_product(
    id int not null auto_increment primary key,
    product_id int not null,
    user_id int not null,
    notification boolean default false,
    oned_at datetime not null,
        foreign key (product_id) references products(id),
        foreign key (user_id) references users(id)
);

create table user_accepted_proposal(
    id int not null auto_increment primary key,
    proposal_id int not null,
    user_id int not null,
    buying_intent boolean default false,
        foreign key (user_id) references users(id),
        foreign key (proposal_id) references proposals(id)

);

create table user_watches_category(
    id int not null auto_increment primary key,
    user_id int not null,
    category_id int not null,
        foreign key (user_id) references users(id),
        foreign key (category_id) references categories(id)

);

create table category_parents_category(
    id int not null auto_increment primary key,
    parent_id int not null,
    child_id int not null,
        foreign key (parent_id) references categories(id),
        foreign key (child_id) references categories(id)

);

create table logs(
    id int not null auto_increment primary key,
    modified_table varchar(255) not null,
    modified_column varchar(255) not null,
    modified_by int not null,
    modified_at datetime not null,
    old_value varchar(255),
    new_value varchar(255),
        foreign key (modified_by) references users(id)
);