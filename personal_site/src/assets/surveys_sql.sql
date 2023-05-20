CREATE TABLE `surveys` (
  `Handle` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Country` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Gender` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Barbarian` tinyint(1) DEFAULT 0,
  `Bard` tinyint(1) DEFAULT 0,
  `Cleric` tinyint(1) DEFAULT 0,
  `Druid` tinyint(1) DEFAULT 0,
  `Fighter` tinyint(1) DEFAULT 0,
  `Paladin` tinyint(1) DEFAULT 0,
  `Monk` tinyint(1) DEFAULT 0,
  `Ranger` tinyint(1) DEFAULT 0,
  `Rogue` tinyint(1) DEFAULT 0,
  `Sorcerer` tinyint(1) DEFAULT 0,
  `Wizard` tinyint(1) DEFAULT 0,
  `Warlock` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `surveys`
  ADD UNIQUE KEY `Handle` (`Handle`);
COMMIT;


