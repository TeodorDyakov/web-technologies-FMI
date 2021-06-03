CREATE DATABASE annotation_tool;
CREATE TABLE `annotation_tool`.`image` ( `imgId` CHAR(200) NOT NULL , PRIMARY KEY (`imgId`)) ENGINE = InnoDB;
CREATE TABLE `annotation_tool`.`label` ( `id` INT(11) NOT NULL AUTO_INCREMENT ,
 `text` VARCHAR(200) NOT NULL , `x` INT(4) NOT NULL ,
  `y` INT(4) NOT NULL , `imgid` CHAR(200) NOT NULL ,
   PRIMARY KEY (`id`), INDEX (`imgid`)) ENGINE = InnoDB; ALTER TABLE `label` 
ADD CONSTRAINT `label_ibfk_1` FOREIGN KEY (`imgId`) REFERENCES `image`(`imgId`) ON DELETE RESTRICT ON UPDATE RESTRICT;

