-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Sep 2020 pada 05.45
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
  `chat` varchar(256) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFriend` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `chats`
--

INSERT INTO `chats` (`id`, `chat`, `idUser`, `idFriend`) VALUES
(1, 'Halloo', 1, 2),
(2, 'ya Halloo', 2, 1);

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
(10, 5, 6);

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
(1, 'Ervin Nurhediyanto', 'cafeinai311@gmail.com', '$2a$10$Vm1cejgHgXN834NxIdomGuNem6raXSHLc366t9U5WQxcoOscglyLO', 'http://localhost:4000/uploads/1600448608311-foto_headshot.jpg', 'Cafein', '082xxxxxxxxx', 'Fullstack Web Developer', 'online', '2020-09-21 16:42:29', '', ''),
(2, 'Cafein', 'cafeinai689@gmail.com', '$2a$10$vMTnhyJZl639BnrUPFvpvu76/q3Cx0GqsGImKZgDWuv4K0TCijN16', 'http://localhost:4000/uploads/1600354029959-cafein.jpg', 'Cafeinai', '', 'Backend Developer', 'offline', '2020-09-21 09:15:57', '-6.200000', '106.816666'),
(3, 'Bae Suzy', 'suzy@gmail.com', '$2a$10$vMTnhyJZl639BnrUPFvpvu76/q3Cx0GqsGImKZgDWuv4K0TCijN16', 'http://localhost:4000/uploads/1600616758011-bae-suzy.jpg', 'BaeSuzy', '089XXXXXXXXX', 'South Korean actress and singer', 'online', '2020-09-21 16:43:22', '-7.161367', '113.482498'),
(4, 'Nayeon', 'nayeon@gmail.com', '$2a$10$vMTnhyJZl639BnrUPFvpvu76/q3Cx0GqsGImKZgDWuv4K0TCijN16', 'http://localhost:4000/uploads/1600616775058-im-nayeon.jpg', 'nayeon', '082xxxxxxxxx', 'South Korean singer', 'offline', '2020-09-21 16:42:53', '5.548290', '95.323753'),
(5, 'Yuigahama', 'yui@gmail.com', '$2a$10$0b6UEpRBNnGjzX/SQO3mBOVK7lo1SnvLA.rc.h81KiCW/8r/Cp.XK', 'http://localhost:4000/uploads/1600616784984-yui.jpg', 'yui', '089xxx999xxx', 'student in Class 2F of Sōbu High School and the first official customer of the Service Club.', 'offline', '2020-09-21 16:43:29', '-3.654703', '128.190643'),
(6, 'Rem', 'rem@gmail.com', '$2a$10$VHGfcORNbANPBKsswdy9Yuc5gvPscrnNA9rNhbIGRnEJCbPVPTa/6', 'http://localhost:4000/uploads/1600616795524-rem.jpg', 'rem', '087xxxxxxxxx', 'twin maids who worked for Roswaal L Mathers', 'online', '2020-09-21 16:43:37', '', ''),
(7, 'Solo Player', 'solo@gmail.com', '$2a$10$Kbi395fLdsa3EXya1jaSsOnhR7YQjUd5NO2ML0p2A6HtHm5QIykBO', '', '', '', '', '', '2020-09-21 03:50:06', '', ''),
(8, 'Yololo', 'yolo@gmail.com', '$2a$10$DTaOBMFpiHNAFjBDEHmG2O78FXNGHLPyEU1Yp8UP.eojHLfrmBlQW', 'http://localhost:4000/uploads/1600677304575-im-nayeon.jpg', 'yol', '098xxxxx', 'tes yolo', 'online', '2020-09-21 08:35:04', '', '');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
