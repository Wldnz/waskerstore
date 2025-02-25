-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `credits` DOUBLE NOT NULL,
    `points` INTEGER NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Games` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `publisher` VARCHAR(191) NOT NULL,
    `tips` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `isNew` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `games_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `discount` DOUBLE NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `id` VARCHAR(191) NOT NULL,
    `item_id` INTEGER NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `redirect_url` VARCHAR(191) NOT NULL,
    `total_price` DOUBLE NOT NULL,

    UNIQUE INDEX `Orders_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transactions` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` INTEGER NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Transactions_id_key`(`id`),
    UNIQUE INDEX `Transactions_order_id_key`(`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Categorys` ADD CONSTRAINT `Categorys_games_id_fkey` FOREIGN KEY (`games_id`) REFERENCES `Games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Items` ADD CONSTRAINT `Items_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Categorys`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `Items`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
