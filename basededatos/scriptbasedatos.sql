-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema delfinesdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema delfinesdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `delfinesdb` DEFAULT CHARACTER SET utf8 ;
USE `delfinesdb` ;

-- -----------------------------------------------------
-- Table `delfinesdb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delfinesdb`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `descripcion` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delfinesdb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delfinesdb`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `precio` FLOAT NOT NULL,
  `descripcion` VARCHAR(150) NOT NULL,
  `stock` INT NOT NULL,
  `categorias_id` INT NOT NULL,
  PRIMARY KEY (`id`, `categorias_id`),
  INDEX `fk_productos_categorias1_idx` (`categorias_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delfinesdb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delfinesdb`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `domicilio` VARCHAR(150) NOT NULL,
  `correo` VARCHAR(150) NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delfinesdb`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delfinesdb`.`administradores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `correo` VARCHAR(150) NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delfinesdb`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delfinesdb`.`carrito` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuarios_id`),
  INDEX `fk_carrito_usuarios1_idx` (`usuarios_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delfinesdb`.`detalle_carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delfinesdb`.`detalle_carrito` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productos_id` INT NOT NULL,
  `carrito_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  PRIMARY KEY (`id`, `productos_id`, `carrito_id`),
  INDEX `fk_productos_has_carrito_carrito1_idx` (`carrito_id` ASC) VISIBLE,
  INDEX `fk_productos_has_carrito_productos1_idx` (`productos_id` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
