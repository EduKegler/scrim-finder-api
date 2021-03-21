import { getMatches } from './src/match/match.route';
import express from 'express';
import { getTeams } from './src/team/team.route';
import { getUsers } from './src/user/user.route';
import { getSections } from './src/section/section.route';

const port = 8000;
const app = express();

app.route('/book').get()

app.route('/api/matches/').get(getMatches);
app.route('/api/teams/').get(getTeams);
app.route('/api/users/').get(getUsers);
app.route('/api/sections/').get(getSections);

app.listen(port, () => {
    console.log(`Example app listing at http://localhost:${port}`)
})