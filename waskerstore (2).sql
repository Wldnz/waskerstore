-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 25 Feb 2025 pada 07.48
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `waskerstore`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `categorys`
--

CREATE TABLE `categorys` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `image_url` varchar(191) NOT NULL,
  `games_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `image_url`, `games_id`) VALUES
(1, 'Diamond', 'https://cdn.unipin.com/images/denom_group/ml-diamonds.png', 1),
(2, 'Twilight Pass', 'https://cdn.unipin.com/images/denom_group/ml-twilight.png', 1),
(3, 'Weekly Pass', 'https://cdn.unipin.com/images/denom_group/ml-weekly.png', 1),
(4, 'Diamond', 'https://cdn.unipin.com/images/default_denom/denom.png', 2),
(5, 'Valorant Points', 'https://cdn1.codashop.com/images/420_cb24d54b-97d5-48fe-a3d3-11d91371141d_b2a1734a945f6ba573385051a922d8b3_image/95ca0bd6c1e3b6589e63a173dede3ebf.png', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `publisher` varchar(191) NOT NULL,
  `tips` varchar(191) NOT NULL,
  `path` varchar(191) NOT NULL,
  `url` varchar(191) NOT NULL,
  `image_url` varchar(191) NOT NULL,
  `isNew` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `games`
--

INSERT INTO `games` (`id`, `name`, `publisher`, `tips`, `path`, `url`, `image_url`, `isNew`) VALUES
(1, 'Mobile Legends: Bang Bang', 'Moonton', 'Untuk menemukan ID Pengguna Anda, klik avatar Anda di pojok kiri atas layar dan buka tab Info Umum. ID Pengguna Anda akan ditampilkan di bawah Nama Panggilan Anda. Silakan masukkan ID Penggun', 'mobile-legends', 'https://www.mobilelegends.com/', 'https://cdn6.aptoide.com/imgs/9/d/2/9d250e67a2e1a55e8507511e24af05a7_icon.png', 0),
(2, 'Free Fire', 'Garena', 'Untuk menemukan ID Pengguna Anda, buka game Free Fire, klik profil di pojok kiri atas, dan salin ID yang tertera di bawah nama pengguna Anda.', 'free-fire', 'https://ff.garena.com/', 'https://cdn.unipin.com/images/icon_product_pages/1658817763-icon-200x200_icon%20ff.jpg', 0),
(3, 'Valorant', 'Riot Games', 'Untuk menemukan Riot ID Anda, buka klien Valorant, klik ikon profil, dan salin Riot ID Anda beserta tagar (mis. Username#1234).', 'valorant', 'https://playvalorant.com/', 'https://cdn.unipin.com/images/icon_product_pages/1657683755-icon-1656391130-icon-riot.jpg', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `price` double NOT NULL,
  `discount` double NOT NULL,
  `image_url` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `items`
--

INSERT INTO `items` (`id`, `category_id`, `name`, `description`, `price`, `discount`, `image_url`) VALUES
(1, 1, '3 Diamonds', 'no bonus', 1171, 9.5, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/10_MLBB_NewDemom.png'),
(2, 1, '5 Diamonds', 'no bonus', 2883, 30, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/10_MLBB_NewDemom.png'),
(3, 1, '12 Diamonds', '11 + 1 Bonus', 8108, 20, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/10_MLBB_NewDemom.png'),
(4, 1, '19 Diamonds', '17 + 2 Bonus', 9500, 30, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/10_MLBB_NewDemom.png'),
(5, 1, '28 Diamonds', '25 + 3 Bonus', 12500, 34, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/10_MLBB_NewDemom.png'),
(6, 1, '44 Diamonds', '40 + 4 Bonus', 14700, 15, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/10_MLBB_NewDemom.png'),
(7, 1, '59 Diamonds', '53 + 6 Bonus', 19000, 18, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/50_MLBB_NewDemom.png'),
(8, 1, '85 Diamonds', '77 + 8 Bonus', 27800, 15, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/50_MLBB_NewDemom.png'),
(9, 1, '170 Diamonds', '154 + 16 Bonus', 50500, 10, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/150x250_MLBB_NewDemom.png'),
(10, 1, '240 Diamonds', '217 + 23 Bonus', 70000, 13, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/150x250_MLBB_NewDemom.png'),
(11, 1, '296 Diamonds', '256 + 40 Bonus', 103000, 15, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/150x250_MLBB_NewDemom.png'),
(12, 1, '408 Diamonds', '367 + 41 Bonus', 127000, 15, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/150x250_MLBB_NewDemom.png'),
(13, 1, '568 Diamonds', '503 + 65 Bonus', 165000, 12, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/500_MLBB_NewDemom.png'),
(14, 1, '875 Diamonds', '774 + 101 Bonus', 260000, 5, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/500_MLBB_NewDemom.png'),
(15, 1, '2010 Diamonds', '1708 + 302 Bonus', 550000, 9, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/1500_MLBB_NewDemom.png'),
(16, 1, '4083 Diamonds', '4083 + 827 Bonus', 1190000, 10, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/2500_MLBB_NewDemom.png'),
(17, 2, 'Twilight Pass', '', 150000, 0, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/100x100/TwilightPass_MLBB.png'),
(18, 3, 'Weekly Diamond Pass', '', 30118, 8.9, 'https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/100x100/MLBB_Weekly_Diamond_Pass.png'),
(19, 4, '100 Diamonds', 'no bonus', 15000, 5, 'https://cdn.unipin.com/images/default_denom/denom.png'),
(20, 4, '310 Diamonds', 'no bonus', 45000, 10, 'https://cdn.unipin.com/images/default_denom/denom.png'),
(21, 5, '500 Points', 'no bonus', 50000, 5, 'https://cdn1.codashop.com/images/420_cb24d54b-97d5-48fe-a3d3-11d91371141d_b2a1734a945f6ba573385051a922d8b3_image/95ca0bd6c1e3b6589e63a173dede3ebf.png'),
(22, 5, '1000 Points', 'no bonus', 100000, 8, 'https://cdn1.codashop.com/images/420_cb24d54b-97d5-48fe-a3d3-11d91371141d_b2a1734a945f6ba573385051a922d8b3_image/95ca0bd6c1e3b6589e63a173dede3ebf.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` varchar(191) NOT NULL,
  `item_id` int(11) NOT NULL,
  `token` varchar(191) NOT NULL,
  `redirect_url` varchar(191) NOT NULL,
  `total_price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `item_id`, `token`, `redirect_url`, `total_price`) VALUES
('order-1739369999770000', 14, '5147a5c1-0948-4a0c-9a6c-347d7a3bd381', 'https://app.sandbox.midtrans.com/snap/v4/redirection/5147a5c1-0948-4a0c-9a6c-347d7a3bd381', 260000),
('order-1739371820387000', 19, '2e85be8a-7f9e-48ab-958d-f21352982b4b', 'https://app.sandbox.midtrans.com/snap/v4/redirection/2e85be8a-7f9e-48ab-958d-f21352982b4b', 15000),
('order-1739371928454000', 19, 'd202e3b4-5f5f-4502-b890-5f13b5d98814', 'https://app.sandbox.midtrans.com/snap/v4/redirection/d202e3b4-5f5f-4502-b890-5f13b5d98814', 15000),
('order-1739372328952000', 18, '22626e02-a21a-4743-96f0-6940647ada87', 'https://app.sandbox.midtrans.com/snap/v4/redirection/22626e02-a21a-4743-96f0-6940647ada87', 30118),
('order-1739381886052000', 20, '946331b6-d8e1-40b0-86b8-cf2d2f50ee2b', 'https://app.sandbox.midtrans.com/snap/v4/redirection/946331b6-d8e1-40b0-86b8-cf2d2f50ee2b', 45000),
('order-1739382204445000', 15, '40844322-a833-4ab3-9716-9d200dc1ab95', 'https://app.sandbox.midtrans.com/snap/v4/redirection/40844322-a833-4ab3-9716-9d200dc1ab95', 550000),
('order-1739382237950000', 15, '9060896b-e123-4217-a8a7-d68f76e3beb7', 'https://app.sandbox.midtrans.com/snap/v4/redirection/9060896b-e123-4217-a8a7-d68f76e3beb7', 550000),
('order-1739382293467000', 3, '8a20d1bc-9387-493e-a6dd-b8633921c348', 'https://app.sandbox.midtrans.com/snap/v4/redirection/8a20d1bc-9387-493e-a6dd-b8633921c348', 8108),
('order-1739382351167000', 1, '884e700f-33cb-4383-a6cd-7536be6fae24', 'https://app.sandbox.midtrans.com/snap/v4/redirection/884e700f-33cb-4383-a6cd-7536be6fae24', 1171);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` varchar(191) NOT NULL,
  `id_user` int(11) NOT NULL,
  `order_id` varchar(191) NOT NULL,
  `status` varchar(191) NOT NULL,
  `time` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `id_user`, `order_id`, `status`, `time`) VALUES
('16617f96-b746-4e04-9412-7e965408a335', 1, 'order-1739382351167000', 'success', '2025-02-13 00:45:56'),
('446235f9-7f23-4605-88c1-c4254f751a51', 1, 'order-1739369999770000', 'success', '2025-02-12 21:20:04'),
('5dfd8ace-d44a-4fe2-a040-c102968d928d', 1, 'order-1739372328952000', 'success', '2025-02-12 21:58:53'),
('9141c93d-7fc6-45ff-a977-12a607f67d10', 1, 'order-1739371820387000', 'success', '2025-02-12 21:50:26'),
('c4e890fe-75fc-4f36-b77f-7e4066923317', 1, 'order-1739371928454000', 'success', '2025-02-12 21:52:13'),
('function getTime() { [native code] }order-1739381886052000', 1, 'order-1739381886052000', 'pending', '2025-02-12T17:38:06.077Z'),
('function getTime() { [native code] }order-1739382293467000', 1, 'order-1739382293467000', 'pending', '2025-02-12T17:44:51.678Z');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `credits` double NOT NULL,
  `points` int(11) NOT NULL,
  `role` varchar(191) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `nama`, `email`, `password`, `credits`, `points`, `role`) VALUES
(1, 'wildan', 'wildanofficial32@gmail.com', 'af6b3aa8c3fcd651674359f500814679', 0, 90, 'user');

-- --------------------------------------------------------

--
-- Struktur dari tabel `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('31b6222e-dc2d-466e-9759-caf8b5d5d2e0', '275757caf82ef42220e1a1dc6e617d7993ea57edc550d1c6ad9bf30596dad1bc', '2025-02-12 14:15:55.536', '20250212054554_init', NULL, NULL, '2025-02-12 14:15:55.340', 1),
('8ad5be69-1bb2-4bb7-b277-2880ad79eb55', '74f6a9ce7fe95ffbfc3054821be687ec0ab9ca3f0e018423889d7d86853f3b7d', '2025-02-12 14:15:55.744', '20250212133312_add', NULL, NULL, '2025-02-12 14:15:55.537', 1),
('aa149e10-97d6-49ce-9a5c-82e5d07a186e', 'a642c548d3b07778e378180431ae645a71ac24d1600424a4ab97527ff903ecb1', '2025-02-12 14:15:56.565', '20250212141556_change', NULL, NULL, '2025-02-12 14:15:56.529', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Categorys_games_id_fkey` (`games_id`);

--
-- Indeks untuk tabel `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Items_category_id_fkey` (`category_id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD UNIQUE KEY `Orders_id_key` (`id`),
  ADD KEY `Orders_item_id_fkey` (`item_id`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD UNIQUE KEY `Transactions_id_key` (`id`),
  ADD UNIQUE KEY `Transactions_order_id_key` (`order_id`),
  ADD KEY `Transactions_id_user_fkey` (`id_user`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indeks untuk tabel `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `categorys`
--
ALTER TABLE `categorys`
  ADD CONSTRAINT `Categorys_games_id_fkey` FOREIGN KEY (`games_id`) REFERENCES `games` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `Items_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categorys` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `Orders_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `Transactions_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Transactions_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
