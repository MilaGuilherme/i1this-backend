DROP TABLE IF EXISTS users, user_types, categories, products, proposals,
product_in_category, user_oned_product, user_accepted_proposal,
user_watches_category, category_parents_category, logs; 


CREATE TABLE `users`
  (
     `id`         INT NOT NULL auto_increment PRIMARY KEY,
     `name`       VARCHAR(255) NOT NULL,
     `password`   VARCHAR(255) NOT NULL,
     `email`      VARCHAR(255) NOT NULL,
     `type_id`    INT DEFAULT 3,
     `created_at` TIMESTAMP,
     `updated_at` TIMESTAMP,
     `active`     BOOLEAN DEFAULT true NOT NULL,
  );

CREATE TABLE `user_types`
  (
     `id`          INT NOT NULL auto_increment PRIMARY KEY,
     `name`        VARCHAR(255) NOT NULL,
     `permissions` TEXT
  );

CREATE TABLE `categories`
  (
     `id`   INT NOT NULL auto_increment PRIMARY KEY,
     `name` VARCHAR(255) NOT NULL
  );

CREATE TABLE `products`
  (
     `id`          INT NOT NULL auto_increment PRIMARY KEY,
     `name`        VARCHAR(255) NOT NULL,
     `created_by`  INT NOT NULL,
     `created_at`  TIMESTAMP,
     `updated_at`  TIMESTAMP,
     `price`       DECIMAL(8, 2) NOT NULL,
     `description` TEXT NOT NULL,
     `photos`      TEXT NOT NULL,
     `ones`        INT NOT NULL,
     `active`      BOOLEAN
  );

CREATE TABLE `proposals`
  (
     `id`               INT NOT NULL auto_increment PRIMARY KEY,
     `product_id`       INT NOT NULL,
     `created_by`       INT NOT NULL,
     `created_at`       TIMESTAMP,
     `updated_at`       TIMESTAMP,
     `price`            DECIMAL(8, 2) NOT NULL,
     `links`            TEXT,
     `photos`           TEXT NOT NULL,
     `minimun_quantity` INT,
     `requires_intent`  BOOLEAN,
     `active`           BOOLEAN
  );

CREATE TABLE `product_in_category`
  (
     `id`          INT NOT NULL auto_increment PRIMARY KEY,
     `product_id`  INT NOT NULL,
     `category_id` INT NOT NULL
  );

CREATE TABLE `user_oned_product`
  (
     `id`           INT NOT NULL auto_increment PRIMARY KEY,
     `product_id`   INT NOT NULL,
     `user_id`      INT NOT NULL,
     `notification` BOOLEAN DEFAULT '0',
     `oned_at`      TIMESTAMP
  );

CREATE TABLE `user_accepted_proposal`
  (
     `id`            INT NOT NULL auto_increment PRIMARY KEY,
     `proposal_id`   INT NOT NULL,
     `user_id`       INT NOT NULL,
     `buying_intent` BOOLEAN DEFAULT '0',
     `accepted_at`   TIMESTAMP
  );

CREATE TABLE `user_watches_category`
  (
     `id`          INT NOT NULL auto_increment PRIMARY KEY,
     `user_id`     INT NOT NULL,
     `category_id` INT NOT NULL,
     `watched_at`  TIMESTAMP
  );

CREATE TABLE `category_parents_category`
  (
     `id`        INT NOT NULL auto_increment PRIMARY KEY,
     `parent_id` INT NOT NULL,
     `child_id`  INT NOT NULL
  );

CREATE TABLE `logs`
  (
     `id`              INT NOT NULL auto_increment PRIMARY KEY,
     `modified_table`  VARCHAR(255) NOT NULL,
     `modification`    VARCHAR(255) NOT NULL,
     `modified_id`     INT,
     `modified_by`     INT NOT NULL,
     `modified_at`     TIMESTAMP NOT NULL,
     `old_value`       VARCHAR(255),
     `new_value`       VARCHAR(255) NOT NULL
  );

ALTER TABLE `category_parents_category`
  ADD CONSTRAINT `category_parents_category_parent_id_foreign` FOREIGN KEY (
  `parent_id`) REFERENCES `categories` (`id`);

ALTER TABLE `category_parents_category`
  ADD CONSTRAINT `category_parents_category_child_id_foreign` FOREIGN KEY (
  `child_id`) REFERENCES `categories` (`id`);

ALTER TABLE `logs`
  ADD CONSTRAINT `logs_modified_by_foreign` FOREIGN KEY (`modified_by`)
  REFERENCES `users` (`id`); 
ALTER TABLE `products`
  ADD CONSTRAINT `products_created_by_foreign` FOREIGN KEY (`created_by`)
  REFERENCES `users` (`id`);
  
ALTER TABLE `proposals`
  ADD CONSTRAINT `proposals_product_id_foreign` FOREIGN KEY (`product_id`)
  REFERENCES `products` (`id`);

ALTER TABLE `proposals`
  ADD CONSTRAINT `proposals_created_by_foreign` FOREIGN KEY (`created_by`)
  REFERENCES `users` (`id`);

ALTER TABLE `product_in_category`
  ADD CONSTRAINT `product_in_category_product_id_foreign` FOREIGN KEY (
  `product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_in_category`
  ADD CONSTRAINT `product_in_category_category_id_foreign` FOREIGN KEY (
  `category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `user_oned_product`
  ADD CONSTRAINT `user_oned_product_product_id_foreign` FOREIGN KEY (
  `product_id`) REFERENCES `products` (`id`);

ALTER TABLE `user_oned_product`
  ADD CONSTRAINT `user_oned_product_user_id_foreign` FOREIGN KEY (`user_id`)
  REFERENCES `users` (`id`);

ALTER TABLE `user_accepted_proposal`
  ADD CONSTRAINT `user_accepted_proposal_proposal_id_foreign` FOREIGN KEY (
  `proposal_id`) REFERENCES `proposals` (`id`);

ALTER TABLE `user_accepted_proposal`
  ADD CONSTRAINT `user_accepted_proposal_user_id_foreign` FOREIGN KEY (`user_id`
  ) REFERENCES `users` (`id`);
  ALTER TABLE `user_watches_category`
  ADD CONSTRAINT `user_watches_category_user_id_foreign` FOREIGN KEY (`user_id`)
  REFERENCES `users` (`id`);

ALTER TABLE `user_watches_category`
  ADD CONSTRAINT `user_watches_category_category_id_foreign` FOREIGN KEY (
  `category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `users`
  ADD UNIQUE `users_email_unique`(`email`);

ALTER TABLE `users`
  ADD CONSTRAINT `users_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES
  `user_types` (`id`);