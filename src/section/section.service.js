"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSectionsService = void 0;
const config_1 = require("../../config");
exports.getSectionsService = config_1.pool.query('SELECT * FROM sections');
