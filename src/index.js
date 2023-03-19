import './css/style.css';
import Team from './js/Team';

const team = new Team(5);
for (const character of team) {
  console.log(character);
}
