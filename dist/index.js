"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const match_route_1 = require("./src/match/match.route");
const express_1 = __importDefault(require("express"));
const team_route_1 = require("./src/team/team.route");
const user_route_1 = require("./src/user/user.route");
const section_route_1 = require("./src/section/section.route");
const port = 8000;
const app = express_1.default();
app.route('/book').get();
app.route('/api/matches/').get(match_route_1.getMatches);
app.route('/api/teams/').get(team_route_1.getTeams);
app.route('/api/users/').get(user_route_1.getUsers);
app.route('/api/sections/').get(section_route_1.getSections);
app.listen(port, () => {
    console.log(`Example app listing at http://localhost:${port}`);
});
