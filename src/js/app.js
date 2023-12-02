// TODO: write your code here
import Bowerman from './Bowerman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Zombie from './Zombie';
import Team from './Team';


console.log('worked');

const player1 = new Bowerman('Legolas', 'Bowerman');
const player2 = new Daemon('Lucifer', 'Daemon');
const player3 = new Magician('Merlin', 'Magician');
const player4 = new Swordsman('Arthur', 'Swordsman');
const player5 = new Undead('Crispy', 'Undead');
const player6 = new Zombie('Shawn', 'Zombie');

const group = [
    player2,
    player3,
    player3,
    player3,
    player4,
    player4,
    player4,
    player5,
    player6
]

const team = new Team();
console.log(team);
team.add(player1);
console.log(team);
team.addAll(group);
console.log(team);
console.log(team.toArray());



