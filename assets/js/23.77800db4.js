(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{698:function(e,n,r){"use strict";r.r(n);var s=r(47),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"реалізація-інформаціиного-та-програмного-забезпечення"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#реалізація-інформаціиного-та-програмного-забезпечення"}},[e._v("#")]),e._v(" Реалізація інформаційного та програмного забезпечення")]),e._v(" "),r("h2",{attrs:{id:"sql-скрипт-для-створення-на-початкового-наповнення-бази-даних"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-скрипт-для-створення-на-початкового-наповнення-бази-даних"}},[e._v("#")]),e._v(" SQL-скрипт для створення на початкового наповнення бази даних")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("-- MySQL Workbench Forward Engineering\n\nSET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;\nSET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;\nSET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';\n\nDROP SCHEMA IF EXISTS `survey_of_experts` ;\n\n-- ---------------Створення бази даних---------------------\nCREATE SCHEMA IF NOT EXISTS `survey_of_experts` DEFAULT CHARACTER SET utf8 ;\nUSE `survey_of_experts` ;\n-- --------------------------------------------------------\n\n-- ---------------Структура таблиці permission-------------------\nDROP TABLE IF EXISTS `survey_of_experts`.`permission` ;\n\nCREATE TABLE IF NOT EXISTS `survey_of_experts`.`permission`(\n    `id` INT NOT NULL AUTO_INCREMENT,\n    `name` VARCHAR(45) NOT NULL,\n    `text` VARCHAR(45) NOT NULL,\n    PRIMARY KEY (`id`)\n)ENGINE = InnoDB;\n\n-- ------------------------------------------------------------\n\n\n-- ---------------Структура таблиці user-------------------\nDROP TABLE IF EXISTS `survey_of_experts`.`user` ;\n\nCREATE TABLE IF NOT EXISTS `survey_of_experts`.`user`(\n    `id` INT NOT NULL AUTO_INCREMENT,\n    `username` VARCHAR(20) NOT NULL,\n    `email` VARCHAR(45) NOT NULL,\n    `password` VARCHAR(20) NOT NULL,\n    `permission_id` INT NOT NULL,\n    PRIMARY KEY (`id`),\n    CONSTRAINT `fk_user_permission`\n\t\tFOREIGN KEY (`permission_id`)\n\t\tREFERENCES `survey_of_experts`.`permission` (`id`)\n\t\tON DELETE NO ACTION\n\t\tON UPDATE NO ACTION\n)ENGINE = InnoDB;\n\n\n-- -------------------------------------------------------\n\n-- ---------------Структура таблиці quiz-------------------\nDROP TABLE IF EXISTS `survey_of_experts`.`quiz` ;\n\nCREATE TABLE IF NOT EXISTS `survey_of_experts`.`quiz` (\n    `id` INT NOT NULL AUTO_INCREMENT,\n    `type` TEXT(200),\n    `topic` TEXT(200),\n    `text` TEXT(200),\n    `date` DATETIME,\n    PRIMARY KEY (`id`)\n);\n\n-- -------------------------------------------------------\n\n-- ---------------Структура таблиці question-------------------\nDROP TABLE IF EXISTS `survey_of_experts`.`question` ;\n\nCREATE TABLE IF NOT EXISTS `survey_of_experts`.`question` (\n    `id` INT NOT NULL AUTO_INCREMENT,\n    `type` TEXT(200),\n    `text` TEXT(200),\n    `topic` TEXT(200),\n    `quiz_id` INT NOT NULL,\n    `answer_id` INT NOT NULL,\n    PRIMARY KEY (`id`),\n    CONSTRAINT `fk_question_quiz`\n\t\tFOREIGN KEY (`quiz_id`)\n\t\tREFERENCES `survey_of_experts`.`quiz` (`id`)\n\t\tON DELETE NO ACTION\n\t\tON UPDATE NO ACTION,\n\tCONSTRAINT `fk_question_answer`\n\t\tFOREIGN KEY (`answer_id`)\n\t\tREFERENCES `survey_of_experts`.`answer` (`id`)\n\t\tON DELETE NO ACTION\n\t\tON UPDATE NO ACTION\n)ENGINE = InnoDB;\n\n-- -------------------------------------------------------\n\n-- ---------------Структура таблиці option-------------------\nDROP TABLE IF EXISTS `survey_of_experts`.`option_` ;\n\nCREATE TABLE IF NOT EXISTS `survey_of_experts`.`option_`(\n    `id` INT NOT NULL AUTO_INCREMENT,\n    `type` TEXT(200),\n    `text` TEXT(200),\n    `question_id` INT NOT NULL,\n    PRIMARY KEY (`id`),\n    CONSTRAINT `fk_option_question`\n\t\tFOREIGN KEY (`question_id`)\n\t\tREFERENCES `survey_of_experts`.`question` (`id`)\n\t\tON DELETE NO ACTION\n\t\tON UPDATE NO ACTION\n)ENGINE = InnoDB;\n\n-- -------------------------------------------------------\n\n-- ---------------Структура таблиці selectedOption-------------------\nDROP TABLE IF EXISTS `survey_of_experts`.`selectedOption` ;\n\nCREATE TABLE IF NOT EXISTS `survey_of_experts`.`selectedOption`(\n    `id` INT NOT NULL AUTO_INCREMENT,\n    `option_id` INT NOT NULL,\n    PRIMARY KEY (`id`),\n    CONSTRAINT `fk_selectedOption_option`\n\t\tFOREIGN KEY (`option_id`)\n\t\tREFERENCES `survey_of_experts`.`option_` (`id`)\n\t\tON DELETE NO ACTION\n\t\tON UPDATE NO ACTION\n)ENGINE = InnoDB;\n\n-- -------------------------------------------------------\n\n\n-- ---------------Структура таблиці answer-------------------\nDROP TABLE IF EXISTS `survey_of_experts`.`answer` ;\n\nCREATE TABLE IF NOT EXISTS `survey_of_experts`.`answer` (\n    `id` INT NOT NULL AUTO_INCREMENT,\n    `text` TEXT(200) NOT NULL,\n    `data` DATE NOT NULL,\n    `user_id` INT NOT NULL,\n    `selectedOption_id` INT NOT NULL,\n    PRIMARY KEY (`id`),\n\tCONSTRAINT `fk_answer_user`\n\t\tFOREIGN KEY (`user_id`)\n\t\tREFERENCES `survey_of_experts`.`user` (`id`)\n\t\tON DELETE NO ACTION\n\t\tON UPDATE NO ACTION,\n\tCONSTRAINT `fk_answer_selectedOption`\n\t\tFOREIGN KEY (`selectedOption_id`)\n\t\tREFERENCES `survey_of_experts`.`selectedOption` (`id`)\n\t\tON DELETE NO ACTION\n\t\tON UPDATE NO ACTION\n);\n\n-- -------------------------------------------------------\n\n\n-- -------------------Дані для таблиці `survey_of_experts`.`permission`---------\nUSE `survey_of_experts`;\nINSERT INTO `survey_of_experts`.`permission` (`name`, `text`)\nVALUES ('success', 'Permission granted');\nINSERT INTO `survey_of_experts`.`permission` (`name`, `text`)\nVALUES ('faile', 'Permission not granted');\n\n-- ---------------------------------------------------------------------------\n\n-- -------------------Дані для таблиці `survey_of_experts`.`user`---------\nUSE `survey_of_experts`;\nINSERT INTO `survey_of_experts`.`user` (`username`, `email`, `password`, `permission_id`)\nVALUES ('Joe Todler', 'joetodler@gmail.com', 'joe5247', 1);\nINSERT INTO `survey_of_experts`.`user` (`username`, `email`, `password`, `permission_id`)\nVALUES ('Mike Smith', 'mikesmith@gmail.com', 'mike1990', 1);\nINSERT INTO `survey_of_experts`.`user` (`username`, `email`, `password`, `permission_id`)\nVALUES ('Frenk Junhson', 'frenkjonhson@gmail.com', 'jonhson777', 2);\n\n\n-- ---------------------------------------------------------------------------\n\n\n-- -------------------Дані для таблиці `survey_of_experts`.`quiz`---------\nUSE `survey_of_experts`;\nINSERT INTO `survey_of_experts`.`quiz` (`type`, `topic`, `text`, `date`)\nVALUES (\"Обов'язково\", 'МКР з АМО', 'Робота буде відкрита з 25.05.2023 по 27.05.2023', \"2023-05-25\");\nINSERT INTO `survey_of_experts`.`quiz` (`type`, `topic`, `text`, `date`)\nVALUES (\"Не обов'язково\", 'Додатковий тест з АМО', 'Робота буде відкрита з 27.05.2023 по 29.05.2023', \"2023-05-27\");\nINSERT INTO `survey_of_experts`.`quiz` (`type`, `topic`, `text`, `date`)\nVALUES (\"Обов'язково\", 'МКР з Англійськох', 'Робота буде відкрита з 8:30 25.05.2023 до 23.59', \"2023-05-25\");\n\n\n\n\n-- ---------------------------------------------------------------------------\n\n")])])]),r("h2",{attrs:{id:"restfull-сервіс-для-управління-даними"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restfull-сервіс-для-управління-даними"}},[e._v("#")]),e._v(" RESTfull сервіс для управління даними")]),e._v(" "),r("h3",{attrs:{id:"налаштування-express-сервера"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#налаштування-express-сервера"}},[e._v("#")]),e._v(" Налаштування Express сервера")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const express = require('express');\nconst cors = require('cors');\nconst router = require('./routes');\nconst AppError = require('./utils/appError');\nconst errorHandler = require('./utils/errorHandler');\n\nconst app = express();\n\napp.use(express.json());\napp.use(cors());\napp.use('/api', router);\n\napp.all('*', (req, res, next) => {\n  next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));\n});\napp.use(errorHandler);\n\nconst PORT = 3000;\napp.listen(PORT, () => {\n  console.log(`server running on port ${PORT}`);\n});\n\nmodule.exports = app;\n\n")])])]),r("h3",{attrs:{id:"підключення-до-бази-даних-mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#підключення-до-бази-даних-mysql"}},[e._v("#")]),e._v(" Підключення до бази даних MySQL")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const mysql = require('mysql2');\nconst conn = mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  password: '*********',\n  database: 'survey_of_experts',\n});\n\nconn.connect();\n\nmodule.exports = conn;\n")])])]),r("h3",{attrs:{id:"створення-контролерів-додатка"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#створення-контролерів-додатка"}},[e._v("#")]),e._v(" Створення контролерів додатка")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const AppError = require('../utils/appError');\nconst conn = require('../service/db');\n\nexports.getAllUsers = (req, res, next) => {\n  conn.query('SELECT * FROM user', function (err, data, fields) {\n    if (err) return next(new AppError(err));\n    res.status(200).json({\n      status: 'success',\n      length: data?.length,\n      data: data,\n    });\n  });\n};\n\nexports.getUserById = (req, res, next) => {\n  if (!req.params.id) {\n    return next(new AppError('No user id found', 404));\n  }\n  conn.query(\n    'SELECT * FROM user WHERE id = ?',\n    [req.params.id],\n    function (err, data, fields) {\n      if (err) return next(new AppError(err, 500));\n      res.status(200).json({\n        status: 'success',\n        length: data?.length,\n        data: data,\n      });\n    }\n  );\n};\n\nexports.createUser = (req, res, next) => {\n  if (!req.body) return next(new AppError('No form data found', 404));\n  const values = [\n    req.body.username,\n    req.body.email,\n    req.body.password,\n    req.body.permission_id,\n  ];\n  conn.query(\n    'INSERT INTO user (username, email, password, permission_id) VALUES(?)',\n    [values],\n    function (err, data, fields) {\n      if (err) return next(new AppError(err, 500));\n      res.status(201).json({\n        status: 'success',\n        message: 'user added!',\n      });\n    }\n  );\n};\n\nexports.deleteUser = (req, res, next) => {\n  if (!req.params.id) {\n    return next(new AppError('No todo id found', 404));\n  }\n  conn.query(\n    'DELETE FROM user WHERE id=?',\n    [req.params.id],\n    function (err, fields) {\n      if (err) return next(new AppError(err, 500));\n      res.status(201).json({\n        status: 'success',\n        message: 'user deleted!',\n      });\n    }\n  );\n};\n\nexports.getAllQuizes = (req, res, next) => {\n  conn.query('SELECT * FROM quiz', function (err, data, fields) {\n    if (err) return next(new AppError(err));\n    res.status(200).json({\n      status: 'success',\n      length: data?.length,\n      data: data,\n    });\n  });\n};\n\nexports.getQuizById = (req, res, next) => {\n  if (!req.params.id) {\n    return next(new AppError('No user id found', 404));\n  }\n  conn.query(\n    'SELECT * FROM quiz WHERE id = ?',\n    [req.params.id],\n    function (err, data, fields) {\n      if (err) return next(new AppError(err, 500));\n      res.status(200).json({\n        status: 'success',\n        length: data?.length,\n        data: data,\n      });\n    }\n  );\n};\n\nexports.createQuiz = (req, res, next) => {\n  if (!req.body) return next(new AppError('No form data found', 404));\n  const values = [req.body.type, req.body.topic, req.body.text, req.body.date];\n  conn.query(\n    'INSERT INTO quiz (type, text, topic, date) VALUES(?)',\n    [values],\n    function (err, data, fields) {\n      if (err) return next(new AppError(err, 500));\n      res.status(201).json({\n        status: 'success',\n        message: 'quiz added!',\n      });\n    }\n  );\n};\n\nexports.updateQuiz = (req, res, next) => {\n  if (!req.params.id) {\n    return next(new AppError('No user id found', 404));\n  }\n  conn.query(\n    'UPDATE quiz SET type=?, text=?, topic=?, date=?, WHERE id=?',\n    [\n      req.body.type,\n      req.body.text,\n      req.body.topic,\n      req.body.date,\n      req.params.id,\n    ],\n    function (err, data, fields) {\n      if (err) return next(new AppError(err, 500));\n      res.status(201).json({\n        status: 'success',\n        message: 'quiz info updated!',\n      });\n    }\n  );\n};\n\nexports.deleteQuiz = (req, res, next) => {\n  if (!req.params.id) {\n    return next(new AppError('No todo id found', 404));\n  }\n  conn.query(\n    'DELETE FROM quiz WHERE id=?',\n    [req.params.id],\n    function (err, fields) {\n      if (err) return next(new AppError(err, 500));\n      res.status(201).json({\n        status: 'success',\n        message: 'quiz deleted!',\n      });\n    }\n  );\n};\n\n")])])]),r("h3",{attrs:{id:"створення-глобальних-обробників-помилок"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#створення-глобальних-обробників-помилок"}},[e._v("#")]),e._v(" Створення глобальних обробників помилок")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("class AppError extends Error {\n  constructor(msg, statusCode) {\n    super(msg);\n\n    this.statusCode = statusCode;\n    this.error = `${statusCode}`.startsWith('4') ? 'fail' : 'error';\n    this.isOperational = true;\n\n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n\nmodule.exports = AppError;\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("module.exports = (err, req, res, next) => {\n  err.statusCode = err.statusCode || 500;\n  err.status = err.status || 'error';\n  res.status(err.statusCode).json({\n    status: err.status,\n    message: err.message,\n  });\n};\n")])])]),r("h3",{attrs:{id:"створення-routes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#створення-routes"}},[e._v("#")]),e._v(" Створення routes")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const express = require('express');\nconst controllers = require('../controllers');\nconst router = express.Router();\n\nrouter.route('/user').get(controllers.getAllUsers).post(controllers.createUser);\nrouter\n  .route('/user/:id')\n  .get(controllers.getUserById)\n  .delete(controllers.deleteUser);\nrouter\n  .route('/quiz')\n  .get(controllers.getAllQuizes)\n  .post(controllers.createQuiz);\n\nrouter\n  .route('/quiz/:id')\n  .get(controllers.getQuizById)\n  .put(controllers.updateQuiz)\n  .delete(controllers.deleteQuiz);\nmodule.exports = router;\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);