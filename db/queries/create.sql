CREATE DATABASE IF NOT EXISTS `i1this` DEFAULT character SET utf8;

USE `i1this`;

DROP TABLE IF EXISTS users, user_types, categories, products, proposals,
product_in_category, user_oned_product, user_accepted_proposal,
user_watches_category, category_parents_category, logs; 

