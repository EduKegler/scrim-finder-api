"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamsService = void 0;
const config_1 = require("../../config");
exports.getTeamsService = config_1.pool.query('SELECT * FROM teams');
