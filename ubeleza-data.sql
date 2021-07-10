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
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `adonis_schema`
--

LOCK TABLES `adonis_schema` WRITE;
/*!40000 ALTER TABLE `adonis_schema` DISABLE KEYS */;
INSERT INTO `adonis_schema` VALUES (8,'1503250034279_user',1,'2021-04-26 22:18:48'),(9,'1503250034280_token',1,'2021-04-26 22:18:49'),(10,'1613411168725_create_permission_schema',1,'2021-04-26 22:18:49'),(11,'1613411168735_create_role_schema',1,'2021-04-26 22:18:49'),(12,'1613411168738_create_permission_role_schema',1,'2021-04-26 22:18:50'),(13,'1613411168741_create_permission_user_schema',1,'2021-04-26 22:18:51'),(14,'1613411168744_create_role_user_schema',1,'2021-04-26 22:18:51'),(15,'1613418145440_user_schema',2,'2021-04-26 22:30:11'),(16,'1615839087605_customer_schema',2,'2021-04-26 22:30:12'),(17,'1615839112558_employee_schema',2,'2021-04-26 22:30:12'),(18,'1615839120541_partner_schema',2,'2021-04-26 22:30:12'),(19,'1615923049578_image_schema',2,'2021-04-26 22:30:12'),(20,'1615923184103_user_image_fk_schema',2,'2021-04-26 22:30:13'),(21,'1615924403880_service_type_schema',2,'2021-04-26 22:30:13'),(22,'1616114325860_chat_message_schema',2,'2021-04-26 22:30:13'),(23,'1616114337888_coupon_schema',2,'2021-04-26 22:30:14'),(24,'1616114364943_partner_customer_schema',2,'2021-04-26 22:30:14'),(25,'1616114373952_address_schema',2,'2021-04-26 22:30:14'),(26,'1616114386918_partner_service_schema',2,'2021-04-26 22:30:15'),(27,'1616114464862_transport_method_schema',2,'2021-04-26 22:30:15'),(28,'1616114470433_payment_method_schema',2,'2021-04-26 22:30:15'),(29,'1616114475673_bank_schema',2,'2021-04-26 22:30:15'),(30,'1616114475674_bank_account_schema',2,'2021-04-26 22:30:16'),(31,'1616114503131_notification_schema',2,'2021-04-26 22:30:16'),(32,'1616114511210_rating_schema',2,'2021-04-26 22:30:17'),(33,'1616114525661_comment_schema',2,'2021-04-26 22:30:17'),(34,'1616114545427_available_certificate_schema',2,'2021-04-26 22:30:17'),(35,'1616114555479_partner_certificate_schema',2,'2021-04-26 22:30:18'),(36,'1616114572153_benefit_club_schema',2,'2021-04-26 22:30:18'),(37,'1616114584022_service_request_schema',2,'2021-04-26 22:30:19'),(38,'1616115179565_customer_address_schema',2,'2021-04-26 22:30:20'),(39,'1616115187911_partner_address_schema',2,'2021-04-26 22:30:21'),(40,'1616115196659_employee_address_schema',2,'2021-04-26 22:30:21'),(41,'1616115751589_credit_movimentation_schema',2,'2021-04-26 22:30:22'),(42,'1616426543968_alter_users_add_mobile_verification_code_schema',2,'2021-04-26 22:30:22'),(43,'1616532073824_alter_users_remove_password_column_schema',2,'2021-04-26 22:30:22'),(44,'1616693141033_alter_partners_rename_name_column_schema',2,'2021-04-26 22:30:23'),(45,'1616693374703_alter_partners_add_public_name_column_schema',2,'2021-04-26 22:30:24'),(46,'1616965477832_alter_partners_add_approved_column_schema',2,'2021-04-26 22:30:24'),(47,'1617054027893_alter_partners_rename_document_column_schema',2,'2021-04-26 22:30:25'),(48,'1617060659168_create_partner_service_type_schema',2,'2021-04-26 22:30:25'),(49,'1617198171519_alter_partners_rename_and_change_type_approved_column_schema',2,'2021-04-26 22:30:26'),(50,'1617210327716_alter_partner_certificate_add_title_column_schema',2,'2021-04-26 22:30:26'),(51,'1617210356426_alter_available_certificates_add_emissor_column_schema',2,'2021-04-26 22:30:26'),(52,'1617234180538_alter_users_add_password_column_schema',2,'2021-04-26 22:30:26'),(53,'1617234180539_alter_partner_certificate_rename_path_column',2,'2021-04-26 22:30:27'),(54,'1617234180540_alter_address_latlon_columns',2,'2021-04-26 22:30:27'),(55,'1617234180541_alter_partner_services_add_partner_id_column_schema',2,'2021-04-26 22:30:28'),(56,'1618338927169_alter_service_request_foreign_service_id_schema',2,'2021-04-26 22:30:29'),(57,'1618498644328_alter_address_add_range_schema',2,'2021-04-26 22:30:29'),(58,'1618528944535_alter_service_request_foreign_service_id_schema',2,'2021-04-26 22:30:30'),(59,'1619548342092_alter_bank_accounts_schema',3,'2021-04-27 18:35:06'),(60,'1619550399887_drop_coupon_schema',4,'2021-04-27 19:07:57'),(61,'1619579640923_alter_partner_services_schema',5,'2021-04-28 03:19:33'),(62,'1619581816168_alter_bank_schema',6,'2021-04-28 05:26:00'),(63,'1619585232031_alter_coupons_schema',7,'2021-04-28 05:35:41'),(64,'1619588263593_alter_coupons_schema',8,'2021-04-28 06:06:39'),(65,'1619826697646_image_partner_schema',9,'2021-04-30 23:59:54');
/*!40000 ALTER TABLE `adonis_schema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `available_certificates`
--

LOCK TABLES `available_certificates` WRITE;
/*!40000 ALTER TABLE `available_certificates` DISABLE KEYS */;
/*!40000 ALTER TABLE `available_certificates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `bank_accounts`
--

LOCK TABLES `bank_accounts` WRITE;
/*!40000 ALTER TABLE `bank_accounts` DISABLE KEYS */;
INSERT INTO `bank_accounts` VALUES (1,2,1,1,NULL,1245781,1,'corrente','2021-04-28 05:05:37','2021-04-28 05:05:37','Rafael Minossi','12726947719'),(2,2,1,1,NULL,1245781,1,'corrente','2021-04-28 05:06:25','2021-04-28 05:06:25','Rafael Minossill','12726947719');
/*!40000 ALTER TABLE `bank_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `banks`
--

LOCK TABLES `banks` WRITE;
/*!40000 ALTER TABLE `banks` DISABLE KEYS */;
INSERT INTO `banks` VALUES (1,260,'Nubank',NULL,NULL,1);
/*!40000 ALTER TABLE `banks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `benefit_clubs`
--

LOCK TABLES `benefit_clubs` WRITE;
/*!40000 ALTER TABLE `benefit_clubs` DISABLE KEYS */;
/*!40000 ALTER TABLE `benefit_clubs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `chat_messages`
--

LOCK TABLES `chat_messages` WRITE;
/*!40000 ALTER TABLE `chat_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `coupons`
--

LOCK TABLES `coupons` WRITE;
/*!40000 ALTER TABLE `coupons` DISABLE KEYS */;
INSERT INTO `coupons` VALUES (1,'R$ 10 de desconto para serviços de manicure','R$ 10 de desconto para serviços de manicure, válidos até amanhã',10.00,'category','partner','active',1,1,NULL,'1406623d5fd40b061','2021-04-28','2021-04-28 06:30:58','2021-04-28 06:30:58'),(2,'R$ 10 de desconto para serviços de manicure','R$ 10 de desconto para serviços de manicure, válidos até amanhã',10.00,'category','partner','active',1,1,NULL,'bb881a07882','2021-04-28','2021-04-28 06:32:47','2021-04-28 06:32:47'),(3,'R$ 10 de desconto para serviços de manicure','R$ 10 de desconto para serviços de manicure, válidos até amanhã',10.00,'category','partner','active',1,1,NULL,'943d18363','2021-04-28','2021-04-28 06:34:56','2021-04-28 06:34:56'),(4,'R$ 10 de desconto para serviços de manicure','R$ 10 de desconto para serviços de manicure, válidos até amanhã',10.00,'category','partner','active',1,1,NULL,'d15fb5f54','2021-04-29','2021-04-28 06:44:42','2021-04-28 06:44:42');
/*!40000 ALTER TABLE `coupons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `credit_movimentations`
--

LOCK TABLES `credit_movimentations` WRITE;
/*!40000 ALTER TABLE `credit_movimentations` DISABLE KEYS */;
INSERT INTO `credit_movimentations` VALUES (2,2,NULL,'debit','Esmaltes',13.50,'2021-04-27','2021-04-27 14:07:23','2021-04-27 14:07:23');
/*!40000 ALTER TABLE `credit_movimentations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `customer_addresses`
--

LOCK TABLES `customer_addresses` WRITE;
/*!40000 ALTER TABLE `customer_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `employee_addresses`
--

LOCK TABLES `employee_addresses` WRITE;
/*!40000 ALTER TABLE `employee_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `image_partners`
--

LOCK TABLES `image_partners` WRITE;
/*!40000 ALTER TABLE `image_partners` DISABLE KEYS */;
INSERT INTO `image_partners` VALUES (1,1,1,NULL,NULL);
/*!40000 ALTER TABLE `image_partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'1619580855303-PtOtATwNf9nJwLFQZ821XQ7zAUqj8g.jpeg',11231,'beleza.jpg','jpeg','2021-04-28 00:34:15','2021-04-28 00:34:15');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `partner_addresses`
--

LOCK TABLES `partner_addresses` WRITE;
/*!40000 ALTER TABLE `partner_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `partner_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `partner_certificates`
--

LOCK TABLES `partner_certificates` WRITE;
/*!40000 ALTER TABLE `partner_certificates` DISABLE KEYS */;
INSERT INTO `partner_certificates` VALUES (1,NULL,1,'12313','2020-02-02','1545545',NULL,NULL,'454545454',1);
/*!40000 ALTER TABLE `partner_certificates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `partner_customers`
--

LOCK TABLES `partner_customers` WRITE;
/*!40000 ALTER TABLE `partner_customers` DISABLE KEYS */;
INSERT INTO `partner_customers` VALUES (1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `partner_customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `partner_service_types`
--

LOCK TABLES `partner_service_types` WRITE;
/*!40000 ALTER TABLE `partner_service_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `partner_service_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `partner_services`
--

LOCK TABLES `partner_services` WRITE;
/*!40000 ALTER TABLE `partner_services` DISABLE KEYS */;
INSERT INTO `partner_services` VALUES (1,1,'Unha em Gel','Aplicação em unha em gel',19.90,'01:30:00','2021-04-28 00:34:15','2021-04-28 00:34:15',1,1);
/*!40000 ALTER TABLE `partner_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (1,NULL,'rafael sistemas',NULL,'23454h55',3.00,'inst/face','0',NULL,NULL,2,'2021-04-27 11:29:19','2021-04-27 11:29:19',NULL,'approved');
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'partner','Partner',NULL,NULL,NULL),(2,'employee','Employee',NULL,NULL,NULL),(3,'customer','Customer',NULL,NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles_permissions`
--

LOCK TABLES `roles_permissions` WRITE;
/*!40000 ALTER TABLE `roles_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `service_requests`
--

LOCK TABLES `service_requests` WRITE;
/*!40000 ALTER TABLE `service_requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `service_types`
--

LOCK TABLES `service_types` WRITE;
/*!40000 ALTER TABLE `service_types` DISABLE KEYS */;
INSERT INTO `service_types` VALUES (1,'Manicure','Manicure',NULL,NULL,NULL);
/*!40000 ALTER TABLE `service_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (1,2,'f4c5a62d-dde3-4b70-b514-653efb79d8cc','jwt_refresh_token',0,'2021-04-27 12:14:47','2021-04-27 12:14:47');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `transport_methods`
--

LOCK TABLES `transport_methods` WRITE;
/*!40000 ALTER TABLE `transport_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `transport_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'rafaelminossi+partner@rede.ulbra.br','rafael','12726947719','51999138014','2021-04-27 11:29:19',NULL,NULL,NULL,NULL,'active','2021-04-27 11:29:19','2021-04-27 12:03:31',NULL,'2021-04-27 14:29:19','$2a$10$WaIXYTvbbWhaAO/uY8EFSeimklnpmtuLzg4ZUMe9eqoJhBw1YiusW',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_permissions`
--

LOCK TABLES `users_permissions` WRITE;
/*!40000 ALTER TABLE `users_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_permissions` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2021-05-03 20:21:32
