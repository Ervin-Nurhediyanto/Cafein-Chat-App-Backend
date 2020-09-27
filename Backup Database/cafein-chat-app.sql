-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Sep 2020 pada 02.17
-- Versi server: 10.4.10-MariaDB
-- Versi PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cafein-chat-app`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `idContact` int(11) NOT NULL,
  `idSender` int(11) NOT NULL,
  `chat` varchar(256) NOT NULL,
  `imageChat` varchar(256) NOT NULL,
  `lat` varchar(256) NOT NULL,
  `lng` varchar(256) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `chats`
--

INSERT INTO `chats` (`id`, `idContact`, `idSender`, `chat`, `imageChat`, `lat`, `lng`, `time`) VALUES
(16, 6, 7, 'Ervin', '', '', '', '2020-09-23 18:57:03'),
(17, 6, 1, 'ya pak jokowi', '', '', '', '2020-09-23 18:57:45'),
(18, 6, 7, 'sebutkan 10 nama ikan', '', '', '', '2020-09-23 19:05:57'),
(19, 6, 1, 'Ikan Tongkol, Ikan Cakalang, Ikan Tuna, Ikan Teri, Ikan Kakap, Ikan Kembung, Ikan Makarel, Ikan Baronang, Ikan Tenggiri, Ikan Belanak', '', '', '', '2020-09-23 19:08:23'),
(20, 6, 7, 'yaudah ambil sepedanya', '', '', '', '2020-09-23 19:09:16'),
(21, 6, 1, 'alhamdulillah dapat sepeda, terimakasih pak jokowi', '', '', '', '2020-09-23 19:10:14'),
(22, 3, 4, 'oppa', '', '', '', '2020-09-23 19:26:23'),
(26, 3, 1, 'nani ?', '', '', '', '2020-09-23 19:46:43'),
(27, 3, 4, 'where are you ?', '', '', '', '2020-09-23 19:46:48');

-- --------------------------------------------------------

--
-- Struktur dari tabel `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFriend` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `contacts`
--

INSERT INTO `contacts` (`id`, `idUser`, `idFriend`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 1, 4),
(4, 1, 5),
(5, 1, 6),
(6, 1, 7),
(7, 2, 3),
(8, 2, 4),
(14, 7, 2),
(19, 1, 9),
(20, 1, 8);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `image` varchar(256) NOT NULL,
  `userName` varchar(256) NOT NULL,
  `phoneNumber` varchar(64) NOT NULL,
  `bio` varchar(256) NOT NULL,
  `status` varchar(64) NOT NULL,
  `timeOnline` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `lat` varchar(256) NOT NULL,
  `lng` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`, `userName`, `phoneNumber`, `bio`, `status`, `timeOnline`, `lat`, `lng`) VALUES
(1, 'Ervin Nurhediyanto', 'cafeinai311@gmail.com', '$2a$10$R7.7EEAailwO7ktck4EAHOs3N0rGfTikLP3tvHXgLJ0LM/LiKzOlW', 'http://localhost:4000/uploads/1600886978200-Cafeinai.jpg', 'Cafein', '082xxxxxxxxx', 'Fullstack Web Developer', 'online', '2020-09-23 19:30:51', '', ''),
(2, 'Cafein', 'cafeinai689@gmail.com', '$2a$10$vMTnhyJZl639BnrUPFvpvu76/q3Cx0GqsGImKZgDWuv4K0TCijN16', 'http://localhost:4000/uploads/1600887014429-cafein.jpg', 'Cafeinai', '', 'Backend Developer', 'offline', '2020-09-23 18:51:50', '-6.200000', '106.816666'),
(3, 'Bae Suzy', 'suzy@gmail.com', '$2a$10$vMTnhyJZl639BnrUPFvpvu76/q3Cx0GqsGImKZgDWuv4K0TCijN16', 'http://localhost:4000/uploads/1600887138591-bae-suzy.jpg', 'BaeSuzy', '089XXXXXXXXX', 'South Korean actress and singer', 'offline', '2020-09-23 18:52:42', '-7.161367', '113.482498'),
(4, 'Nayeon', 'nayeon@gmail.com', '$2a$10$vMTnhyJZl639BnrUPFvpvu76/q3Cx0GqsGImKZgDWuv4K0TCijN16', 'http://localhost:4000/uploads/1600887191024-im-nayeon.jpg', 'nayeon', '082xxxxxxxxx', 'South Korean singer', 'online', '2020-09-23 19:29:59', '5.548290', '95.323753'),
(5, 'Yuigahama', 'yui@gmail.com', '$2a$10$0b6UEpRBNnGjzX/SQO3mBOVK7lo1SnvLA.rc.h81KiCW/8r/Cp.XK', 'http://localhost:4000/uploads/1600887230646-yui.jpg', 'yui', '089xxx999xxx', 'student in Class 2F of Sōbu High School and the first official customer of the Service Club.', 'offline', '2020-09-23 18:54:17', '-3.654703', '128.190643'),
(6, 'Rem', 'rem@gmail.com', '$2a$10$VHGfcORNbANPBKsswdy9Yuc5gvPscrnNA9rNhbIGRnEJCbPVPTa/6', 'http://localhost:4000/uploads/1600887291071-rem.jpg', 'rem', '087xxxxxxxxx', 'twin maids who worked for Roswaal L Mathers', 'offline', '2020-09-23 18:55:01', '-7.550676', '110.828316'),
(7, 'Jokowi', 'jokowi@gmail.com', '$2a$10$R7.7EEAailwO7ktck4EAHOs3N0rGfTikLP3tvHXgLJ0LM/LiKzOlW', 'http://localhost:4000/uploads/1600887393854-jokowi.jpg', 'jokowi', '', 'Presiden RI', 'offline', '2020-09-23 19:29:51', '-6.200000', '106.816666'),
(8, 'Tzuyu', 'tzuyu@gmail.com', '$2a$10$DTaOBMFpiHNAFjBDEHmG2O78FXNGHLPyEU1Yp8UP.eojHLfrmBlQW', 'http://localhost:4000/uploads/1600887521911-tzuyu.jpg', 'tzuyu', '098xxxxx', 'Twice member', 'offline', '2020-09-23 18:58:54', '', ''),
(9, 'Jihyo', 'jihyo@gmail.com', '$2a$10$UPpn6Ko7tH0J3AXQiWbCW.0W4i482in59UmbAIiORXcLuJ29HdCIa', 'http://localhost:4000/uploads/1600887578202-jihyo.jpg', 'jihyo', '', 'Twice member', 'offline', '2020-09-23 18:59:54', '', ''),
(10, 'Asuna', 'asuna@gmail.com', '$2a$10$3YY02dzkX3XSHUZHTcF7Uu1k4eZfKqXPmaWlwzeVLk.FBXFR7A92G', 'http://localhost:4000/uploads/1600887630897-asuna.jpg', 'asuna', '', 'SAO player', 'offline', '2020-09-23 19:04:21', '', '');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
