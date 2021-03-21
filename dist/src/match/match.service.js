"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchesService = void 0;
const config_1 = require("../../config");
exports.getMatchesService = config_1.pool.query('SELECT * FROM matches');
