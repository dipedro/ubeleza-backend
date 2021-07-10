-- MySQL dump 10.13  Distrib 5.7.34, for Linux (x86_64)
--
-- Host: localhost    Database: ubeleza
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `address_type` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `lati` decimal(9,6) NOT NULL,
  `long` decimal(9,6) NOT NULL,
  `range` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adonis_schema`
--

DROP TABLE IF EXISTS `adonis_schema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adonis_schema` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adonis_schema`
--

LOCK TABLES `adonis_schema` WRITE;
/*!40000 ALTER TABLE `adonis_schema` DISABLE KEYS */;
INSERT INTO `adonis_schema` VALUES (8,'1503250034279_user',1,'2021-04-26 22:18:48'),(9,'1503250034280_token',1,'2021-04-26 22:18:49'),(10,'1613411168725_create_permission_schema',1,'2021-04-26 22:18:49'),(11,'1613411168735_create_role_schema',1,'2021-04-26 22:18:49'),(12,'1613411168738_create_permission_role_schema',1,'2021-04-26 22:18:50'),(13,'1613411168741_create_permission_user_schema',1,'2021-04-26 22:18:51'),(14,'1613411168744_create_role_user_schema',1,'2021-04-26 22:18:51'),(15,'1613418145440_user_schema',2,'2021-04-26 22:30:11'),(16,'1615839087605_customer_schema',2,'2021-04-26 22:30:12'),(17,'1615839112558_employee_schema',2,'2021-04-26 22:30:12'),(18,'1615839120541_partner_schema',2,'2021-04-26 22:30:12'),(19,'1615923049578_image_schema',2,'2021-04-26 22:30:12'),(20,'1615923184103_user_image_fk_schema',2,'2021-04-26 22:30:13'),(21,'1615924403880_service_type_schema',2,'2021-04-26 22:30:13'),(22,'1616114325860_chat_message_schema',2,'2021-04-26 22:30:13'),(23,'1616114337888_coupon_schema',2,'2021-04-26 22:30:14'),(24,'1616114364943_partner_customer_schema',2,'2021-04-26 22:30:14'),(25,'1616114373952_address_schema',2,'2021-04-26 22:30:14'),(26,'1616114386918_partner_service_schema',2,'2021-04-26 22:30:15'),(27,'1616114464862_transport_method_schema',2,'2021-04-26 22:30:15'),(28,'1616114470433_payment_method_schema',2,'2021-04-26 22:30:15'),(29,'1616114475673_bank_schema',2,'2021-04-26 22:30:15'),(30,'1616114475674_bank_account_schema',2,'2021-04-26 22:30:16'),(31,'1616114503131_notification_schema',2,'2021-04-26 22:30:16'),(32,'1616114511210_rating_schema',2,'2021-04-26 22:30:17'),(33,'1616114525661_comment_schema',2,'2021-04-26 22:30:17'),(34,'1616114545427_available_certificate_schema',2,'2021-04-26 22:30:17'),(35,'1616114555479_partner_certificate_schema',2,'2021-04-26 22:30:18'),(36,'1616114572153_benefit_club_schema',2,'2021-04-26 22:30:18'),(37,'1616114584022_service_request_schema',2,'2021-04-26 22:30:19'),(38,'1616115179565_customer_address_schema',2,'2021-04-26 22:30:20'),(39,'1616115187911_partner_address_schema',2,'2021-04-26 22:30:21'),(40,'1616115196659_employee_address_schema',2,'2021-04-26 22:30:21'),(41,'1616115751589_credit_movimentation_schema',2,'2021-04-26 22:30:22'),(42,'1616426543968_alter_users_add_mobile_verification_code_schema',2,'2021-04-26 22:30:22'),(43,'1616532073824_alter_users_remove_password_column_schema',2,'2021-04-26 22:30:22'),(44,'1616693141033_alter_partners_rename_name_column_schema',2,'2021-04-26 22:30:23'),(45,'1616693374703_alter_partners_add_public_name_column_schema',2,'2021-04-26 22:30:24'),(46,'1616965477832_alter_partners_add_approved_column_schema',2,'2021-04-26 22:30:24'),(47,'1617054027893_alter_partners_rename_document_column_schema',2,'2021-04-26 22:30:25'),(48,'1617060659168_create_partner_service_type_schema',2,'2021-04-26 22:30:25'),(49,'1617198171519_alter_partners_rename_and_change_type_approved_column_schema',2,'2021-04-26 22:30:26'),(50,'1617210327716_alter_partner_certificate_add_title_column_schema',2,'2021-04-26 22:30:26'),(51,'1617210356426_alter_available_certificates_add_emissor_column_schema',2,'2021-04-26 22:30:26'),(52,'1617234180538_alter_users_add_password_column_schema',2,'2021-04-26 22:30:26'),(53,'1617234180539_alter_partner_certificate_rename_path_column',2,'2021-04-26 22:30:27'),(54,'1617234180540_alter_address_latlon_columns',2,'2021-04-26 22:30:27'),(55,'1617234180541_alter_partner_services_add_partner_id_column_schema',2,'2021-04-26 22:30:28'),(56,'1618338927169_alter_service_request_foreign_service_id_schema',2,'2021-04-26 22:30:29'),(57,'1618498644328_alter_address_add_range_schema',2,'2021-04-26 22:30:29'),(58,'1618528944535_alter_service_request_foreign_service_id_schema',2,'2021-04-26 22:30:30'),(59,'1619548342092_alter_bank_accounts_schema',3,'2021-04-27 18:35:06'),(60,'1619550399887_drop_coupon_schema',4,'2021-04-27 19:07:57'),(61,'1619579640923_alter_partner_services_schema',5,'2021-04-28 03:19:33'),(62,'1619581816168_alter_bank_schema',6,'2021-04-28 05:26:00'),(63,'1619585232031_alter_coupons_schema',7,'2021-04-28 05:35:41'),(64,'1619588263593_alter_coupons_schema',8,'2021-04-28 06:06:39'),(65,'1619826697646_image_partner_schema',9,'2021-04-30 23:59:54');
/*!40000 ALTER TABLE `adonis_schema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `available_certificates`
--

DROP TABLE IF EXISTS `available_certificates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `available_certificates` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `emissor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `available_certificates`
--

LOCK TABLES `available_certificates` WRITE;
/*!40000 ALTER TABLE `available_certificates` DISABLE KEYS */;
/*!40000 ALTER TABLE `available_certificates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bank_accounts`
--

DROP TABLE IF EXISTS `bank_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bank_accounts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `bank_id` int(10) unsigned DEFAULT NULL,
  `agency_number` int(11) DEFAULT NULL,
  `agency_digit` int(11) DEFAULT NULL,
  `acc_number` int(11) DEFAULT NULL,
  `acc_digit` int(11) DEFAULT NULL,
  `acc_type` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `fullname` varchar(254) NOT NULL,
  `document` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `bank_accounts_user_id_foreign` (`user_id`),
  KEY `bank_accounts_bank_id_foreign` (`bank_id`),
  CONSTRAINT `bank_accounts_bank_id_foreign` FOREIGN KEY (`bank_id`) REFERENCES `banks` (`id`) ON DELETE CASCADE,
  CONSTRAINT `bank_accounts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank_accounts`
--

LOCK TABLES `bank_accounts` WRITE;
/*!40000 ALTER TABLE `bank_accounts` DISABLE KEYS */;
INSERT INTO `bank_accounts` VALUES (1,2,1,1,NULL,1245781,1,'corrente','2021-04-28 05:05:37','2021-04-28 05:05:37','Rafael Minossi','12726947719'),(2,2,1,1,NULL,1245781,1,'corrente','2021-04-28 05:06:25','2021-04-28 05:06:25','Rafael Minossill','12726947719');
/*!40000 ALTER TABLE `bank_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banks`
--

DROP TABLE IF EXISTS `banks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `image_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `banks_code_unique` (`code`),
  KEY `banks_image_id_foreign` (`image_id`),
  CONSTRAINT `banks_image_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banks`
--

LOCK TABLES `banks` WRITE;
/*!40000 ALTER TABLE `banks` DISABLE KEYS */;
INSERT INTO `banks` VALUES (1,260,'Nubank',NULL,NULL,1);
/*!40000 ALTER TABLE `banks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `benefit_clubs`
--

DROP TABLE IF EXISTS `benefit_clubs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `benefit_clubs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `link` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `benefit_clubs`
--

LOCK TABLES `benefit_clubs` WRITE;
/*!40000 ALTER TABLE `benefit_clubs` DISABLE KEYS */;
/*!40000 ALTER TABLE `benefit_clubs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_messages`
--

DROP TABLE IF EXISTS `chat_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chat_messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `from` int(10) unsigned DEFAULT NULL,
  `to` int(10) unsigned DEFAULT NULL,
  `message` text,
  `readed` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `chat_messages_from_foreign` (`from`),
  KEY `chat_messages_to_foreign` (`to`),
  CONSTRAINT `chat_messages_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `chat_messages_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_messages`
--

LOCK TABLES `chat_messages` WRITE;
/*!40000 ALTER TABLE `chat_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `from` int(10) unsigned DEFAULT NULL,
  `to` int(10) unsigned DEFAULT NULL,
  `type` enum('to_partner','to_customer') DEFAULT NULL,
  `comment` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_from_foreign` (`from`),
  KEY `comments_to_foreign` (`to`),
  CONSTRAINT `comments_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupons`
--

DROP TABLE IF EXISTS `coupons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coupons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `off` double(10,2) DEFAULT NULL,
  `type` enum('general','category','service') DEFAULT NULL,
  `origin` enum('partner','system') DEFAULT NULL,
  `status` enum('active','paused') DEFAULT NULL,
  `partner_id` int(10) unsigned DEFAULT NULL,
  `service_type_id` int(10) unsigned DEFAULT NULL,
  `partner_service_id` int(10) unsigned DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `expire_at` date DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `coupons_code_unique` (`code`),
  KEY `coupons_partner_id_foreign` (`partner_id`),
  KEY `coupons_service_type_id_foreign` (`service_type_id`),
  KEY `coupons_partner_service_id_foreign` (`partner_service_id`),
  CONSTRAINT `coupons_partner_id_foreign` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`id`) ON DELETE CASCADE,
  CONSTRAINT `coupons_partner_service_id_foreign` FOREIGN KEY (`partner_service_id`) REFERENCES `partner_services` (`id`) ON DELETE CASCADE,
  CONSTRAINT `coupons_service_type_id_foreign` FOREIGN KEY (`service_type_id`) REFERENCES `service_types` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupons`
--

LOCK TABLES `coupons` WRITE;
/*!40000 ALTER TABLE `coupons` DISABLE KEYS */;
INSERT INTO `coupons` VALUES (1,'R$ 10 de desconto para serviços de manicure','R$ 10 de desconto para serviços de manicure, válidos até amanhã',10.00,'category','partner','active',1,1,NULL,'1406623d5fd40b061','2021-04-28','2021-04-28 06:30:58','2021-04-28 06:30:58'),(2,'R$ 10 de desconto para serviços de manicure','R$ 10 de desconto para serviços de manicure, válidos até amanhã',10.00,'category','partner','active',1,1,NULL,'bb881a07882','2021-04-28','2021-04-28 06:32:47','2021-04-28 06:32:47'),(3,'R$ 10 de desconto para serviços de manicure','R$ 10 de desconto para serviços de manicure, válidos até amanhã',10.00,'category','partner','active',1,1,NULL,'943d18363','2021-04-28','2021-04-28 06:34:56','2021-04-28 06:34:56'),(4,'R$ 10 de desconto para serviços de manicure','R$ 10 de desconto para serviços de manicure, válidos até amanhã',10.00,'category','partner','active',1,1,NULL,'d15fb5f54','2021-04-29','2021-04-28 06:44:42','2021-04-28 06:44:42');
/*!40000 ALTER TABLE `coupons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credit_movimentations`
--

DROP TABLE IF EXISTS `credit_movimentations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credit_movimentations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `service_request_id` int(10) unsigned DEFAULT NULL,
  `type` enum('credit','debit') DEFAULT NULL,
  `name` varchar(254) NOT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `when` date DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `credit_movimentations_user_id_foreign` (`user_id`),
  KEY `credit_movimentations_service_request_id_foreign` (`service_request_id`),
  CONSTRAINT `credit_movimentations_service_request_id_foreign` FOREIGN KEY (`service_request_id`) REFERENCES `service_requests` (`id`) ON DELETE CASCADE,
  CONSTRAINT `credit_movimentations_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credit_movimentations`
--

LOCK TABLES `credit_movimentations` WRITE;
/*!40000 ALTER TABLE `credit_movimentations` DISABLE KEYS */;
INSERT INTO `credit_movimentations` VALUES (2,2,NULL,'debit','Esmaltes',13.50,'2021-04-27','2021-04-27 14:07:23','2021-04-27 14:07:23');
/*!40000 ALTER TABLE `credit_movimentations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_addresses`
--

DROP TABLE IF EXISTS `customer_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `address_id` int(10) unsigned DEFAULT NULL,
  `customer_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_addresses_address_id_foreign` (`address_id`),
  KEY `customer_addresses_customer_id_foreign` (`customer_id`),
  CONSTRAINT `customer_addresses_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE,
  CONSTRAINT `customer_addresses_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_addresses`
--

LOCK TABLES `customer_addresses` WRITE;
/*!40000 ALTER TABLE `customer_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customers_user_id_foreign` (`user_id`),
  CONSTRAINT `customers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_addresses`
--

DROP TABLE IF EXISTS `employee_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee_addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `address_id` int(10) unsigned DEFAULT NULL,
  `employee_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employee_addresses_address_id_foreign` (`address_id`),
  KEY `employee_addresses_employee_id_foreign` (`employee_id`),
  CONSTRAINT `employee_addresses_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE,
  CONSTRAINT `employee_addresses_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_addresses`
--

LOCK TABLES `employee_addresses` WRITE;
/*!40000 ALTER TABLE `employee_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employees` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `responsibility` varchar(254) DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employees_user_id_foreign` (`user_id`),
  CONSTRAINT `employees_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_partners`
--

DROP TABLE IF EXISTS `image_partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image_partners` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image_id` int(10) unsigned DEFAULT NULL,
  `partner_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `image_partners_image_id_foreign` (`image_id`),
  KEY `image_partners_partner_id_foreign` (`partner_id`),
  CONSTRAINT `image_partners_image_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`) ON DELETE CASCADE,
  CONSTRAINT `image_partners_partner_id_foreign` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_partners`
--

LOCK TABLES `image_partners` WRITE;
/*!40000 ALTER TABLE `image_partners` DISABLE KEYS */;
INSERT INTO `image_partners` VALUES (1,1,1,NULL,NULL);
/*!40000 ALTER TABLE `image_partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) DEFAULT NULL,
  `size` int(10) unsigned DEFAULT NULL,
  `original_name` varchar(255) DEFAULT NULL,
  `extension` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'1619580855303-PtOtATwNf9nJwLFQZ821XQ7zAUqj8g.jpeg',11231,'beleza.jpg','jpeg','2021-04-28 00:34:15','2021-04-28 00:34:15');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `from` int(11) DEFAULT NULL,
  `to` int(11) DEFAULT NULL,
  `model_id` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `readed` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner_addresses`
--

DROP TABLE IF EXISTS `partner_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partner_addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `address_id` int(10) unsigned DEFAULT NULL,
  `partner_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partner_addresses_address_id_foreign` (`address_id`),
  KEY `partner_addresses_partner_id_foreign` (`partner_id`),
  CONSTRAINT `partner_addresses_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE,
  CONSTRAINT `partner_addresses_partner_id_foreign` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner_addresses`
--

LOCK TABLES `partner_addresses` WRITE;
/*!40000 ALTER TABLE `partner_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `partner_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner_certificates`
--

DROP TABLE IF EXISTS `partner_certificates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partner_certificates` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `certificate_id` int(10) unsigned DEFAULT NULL,
  `partner_id` int(10) unsigned DEFAULT NULL,
  `emissor` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `file_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partner_certificates_certificate_id_foreign` (`certificate_id`),
  KEY `partner_certificates_partner_id_foreign` (`partner_id`),
  KEY `partner_certificates_file_id_foreign` (`file_id`),
  CONSTRAINT `partner_certificates_certificate_id_foreign` FOREIGN KEY (`certificate_id`) REFERENCES `available_certificates` (`id`) ON DELETE CASCADE,
  CONSTRAINT `partner_certificates_file_id_foreign` FOREIGN KEY (`file_id`) REFERENCES `images` (`id`) ON DELETE CASCADE,
  CONSTRAINT `partner_certificates_partner_id_foreign` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner_certificates`
--

LOCK TABLES `partner_certificates` WRITE;
/*!40000 ALTER TABLE `partner_certificates` DISABLE KEYS */;
INSERT INTO `partner_certificates` VALUES (1,NULL,1,'12313','2020-02-02','1545545',NULL,NULL,'454545454',1);
/*!40000 ALTER TABLE `partner_certificates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner_customers`
--

DROP TABLE IF EXISTS `partner_customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partner_customers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `partner_id` int(10) unsigned DEFAULT NULL,
  `customer_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partner_customers_customer_id_foreign` (`customer_id`),
  KEY `partner_customers_partner_id_foreign` (`partner_id`),
  CONSTRAINT `partner_customers_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `partner_customers_partner_id_foreign` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner_customers`
--

LOCK TABLES `partner_customers` WRITE;
/*!40000 ALTER TABLE `partner_customers` DISABLE KEYS */;
INSERT INTO `partner_customers` VALUES (1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `partner_customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner_service_types`
--

DROP TABLE IF EXISTS `partner_service_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partner_service_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `service_type_id` int(10) unsigned DEFAULT NULL,
  `partner_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partner_service_types_service_type_id_foreign` (`service_type_id`),
  KEY `partner_service_types_partner_id_foreign` (`partner_id`),
  CONSTRAINT `partner_service_types_partner_id_foreign` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`id`) ON DELETE CASCADE,
  CONSTRAINT `partner_service_types_service_type_id_foreign` FOREIGN KEY (`service_type_id`) REFERENCES `service_types` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner_service_types`
--

LOCK TABLES `partner_service_types` WRITE;
/*!40000 ALTER TABLE `partner_service_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `partner_service_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner_services`
--

DROP TABLE IF EXISTS `partner_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partner_services` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `service_type_id` int(10) unsigned DEFAULT NULL,
  `name` varchar(254) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `time` time NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `partner_id` int(10) unsigned NOT NULL,
  `image_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partner_services_service_type_id_foreign` (`service_type_id`),
  KEY `partner_services_partner_id_foreign` (`partner_id`),
  KEY `partner_services_image_id_foreign` (`image_id`),
  CONSTRAINT `partner_services_image_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`) ON DELETE CASCADE,
  CONSTRAINT `partner_services_partner_id_foreign` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`id`) ON DELETE CASCADE,
  CONSTRAINT `partner_services_service_type_id_foreign` FOREIGN KEY (`service_type_id`) REFERENCES `service_types` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner_services`
--

LOCK TABLES `partner_services` WRITE;
/*!40000 ALTER TABLE `partner_services` DISABLE KEYS */;
INSERT INTO `partner_services` VALUES (1,1,'Unha em Gel','Aplicação em unha em gel',19.90,'01:30:00','2021-04-28 00:34:15','2021-04-28 00:34:15',1,1);
/*!40000 ALTER TABLE `partner_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partners` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image_id` int(10) unsigned DEFAULT NULL,
  `legal_name` varchar(254) DEFAULT NULL,
  `bio` text,
  `legal_document` varchar(20) DEFAULT NULL,
  `exp_time` decimal(8,2) NOT NULL,
  `how_meet` varchar(254) DEFAULT NULL,
  `other_app` varchar(254) DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `public_name` varchar(255) DEFAULT NULL,
  `status` enum('approved','rejected','waiting') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partners_user_id_foreign` (`user_id`),
  CONSTRAINT `partners_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (1,NULL,'rafael sistemas',NULL,'23454h55',3.00,'inst/face','0',NULL,NULL,2,'2021-04-27 11:29:19','2021-04-27 11:29:19',NULL,'approved');
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_methods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `method` enum('credit_card','debit_card') DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `card_holder_name` varchar(255) DEFAULT NULL,
  `card_number` bigint(20) DEFAULT NULL,
  `card_expiration_date` varchar(255) DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_methods_user_id_foreign` (`user_id`),
  CONSTRAINT `payment_methods_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_slug_unique` (`slug`),
  UNIQUE KEY `permissions_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ratings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `from` int(10) unsigned DEFAULT NULL,
  `to` int(10) unsigned DEFAULT NULL,
  `type` enum('to_partner','to_customer') DEFAULT NULL,
  `feedback` text,
  `stars` double(8,2) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ratings_from_foreign` (`from`),
  KEY `ratings_to_foreign` (`to`),
  CONSTRAINT `ratings_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ratings_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_slug_unique` (`slug`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'partner','Partner',NULL,NULL,NULL),(2,'employee','Employee',NULL,NULL,NULL),(3,'customer','Customer',NULL,NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_permissions`
--

DROP TABLE IF EXISTS `roles_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles_permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `permission_id` int(10) unsigned DEFAULT NULL,
  `role_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roles_permissions_permission_id_index` (`permission_id`),
  KEY `roles_permissions_role_id_index` (`role_id`),
  CONSTRAINT `roles_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `roles_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_permissions`
--

LOCK TABLES `roles_permissions` WRITE;
/*!40000 ALTER TABLE `roles_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_requests`
--

DROP TABLE IF EXISTS `service_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service_requests` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int(10) unsigned DEFAULT NULL,
  `quantity` int(10) unsigned DEFAULT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `coupon_id` int(10) unsigned DEFAULT NULL,
  `address_id` int(10) unsigned DEFAULT NULL,
  `partner_id` int(10) unsigned DEFAULT NULL,
  `payment_method_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `partner_service_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `service_requests_customer_id_foreign` (`customer_id`),
  KEY `service_requests_coupon_id_foreign` (`coupon_id`),
  KEY `service_requests_address_id_foreign` (`address_id`),
  KEY `service_requests_payment_method_id_foreign` (`payment_method_id`),
  KEY `service_requests_partner_id_foreign` (`partner_id`),
  KEY `service_requests_partner_service_id_foreign` (`partner_service_id`),
  CONSTRAINT `service_requests_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_requests_coupon_id_foreign` FOREIGN KEY (`coupon_id`) REFERENCES `coupons` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_requests_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_requests_partner_id_foreign` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_requests_partner_service_id_foreign` FOREIGN KEY (`partner_service_id`) REFERENCES `partner_services` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_requests_payment_method_id_foreign` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_requests`
--

LOCK TABLES `service_requests` WRITE;
/*!40000 ALTER TABLE `service_requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_types`
--

DROP TABLE IF EXISTS `service_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `image_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `service_types_image_id_foreign` (`image_id`),
  CONSTRAINT `service_types_image_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_types`
--

LOCK TABLES `service_types` WRITE;
/*!40000 ALTER TABLE `service_types` DISABLE KEYS */;
INSERT INTO `service_types` VALUES (1,'Manicure','Manicure',NULL,NULL,NULL);
/*!40000 ALTER TABLE `service_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tokens_token_unique` (`token`),
  KEY `tokens_user_id_foreign` (`user_id`),
  KEY `tokens_token_index` (`token`),
  CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (1,2,'f4c5a62d-dde3-4b70-b514-653efb79d8cc','jwt_refresh_token',0,'2021-04-27 12:14:47','2021-04-27 12:14:47');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transport_methods`
--

DROP TABLE IF EXISTS `transport_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transport_methods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transport_methods`
--

LOCK TABLES `transport_methods` WRITE;
/*!40000 ALTER TABLE `transport_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `transport_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(254) NOT NULL,
  `fullname` varchar(254) NOT NULL,
  `document` varchar(20) NOT NULL,
  `phone` varchar(254) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `invited_by` int(11) DEFAULT NULL,
  `facebook_id` varchar(60) DEFAULT NULL,
  `google_id` varchar(60) DEFAULT NULL,
  `image_id` int(10) unsigned DEFAULT NULL,
  `status` enum('active','inactive','banished') DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `token_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `verification_code` varchar(255) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_document_unique` (`document`),
  UNIQUE KEY `users_phone_unique` (`phone`),
  KEY `users_image_id_foreign` (`image_id`),
  CONSTRAINT `users_image_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'rafaelminossi+partner@rede.ulbra.br','rafael','12726947719','51999138014','2021-04-27 11:29:19',NULL,NULL,NULL,NULL,'active','2021-04-27 11:29:19','2021-04-27 12:03:31',NULL,'2021-04-27 14:29:19','$2a$10$WaIXYTvbbWhaAO/uY8EFSeimklnpmtuLzg4ZUMe9eqoJhBw1YiusW',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_permissions`
--

DROP TABLE IF EXISTS `users_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `permission_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_permissions_permission_id_index` (`permission_id`),
  KEY `users_permissions_user_id_index` (`user_id`),
  CONSTRAINT `users_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `users_permissions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_permissions`
--

LOCK TABLES `users_permissions` WRITE;
/*!40000 ALTER TABLE `users_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles`
--

DROP TABLE IF EXISTS `users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_roles_role_id_index` (`role_id`),
  KEY `users_roles_user_id_index` (`user_id`),
  CONSTRAINT `users_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `users_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles`
--

LOCK TABLES `users_roles` WRITE;
/*!40000 ALTER TABLE `users_roles` DISABLE KEYS */;
INSERT INTO `users_roles` VALUES (1,1,2,NULL,NULL);
/*!40000 ALTER TABLE `users_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-03 19:56:55
