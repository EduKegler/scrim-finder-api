"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersService = void 0;
const config_1 = require("../../config");
exports.getUsersService = config_1.pool.query('SELECT * FROM Users');
