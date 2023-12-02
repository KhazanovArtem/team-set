import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Team from '../Team';

test('Team create', () => {
    const team = new Team();
    const result = {"members": new Set()}
    expect(team).toEqual(result);
});

test('Check method add', () => {
    const player1 = new Bowerman('Legolas', 'Bowerman');
    const team = new Team();
    const member = new Set ();
    member.add({
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Legolas",
        type: "Bowerman"})
    const result = {"members": member}
    team.add(player1);
    expect(team).toEqual(result);
});

test('Check method error add', () => {
    expect(() => {
        const player1 = new Bowerman('Legolas', 'Bowerman');
        const team = new Team();
        team.add(player1);
        team.add(player1);
    }).toThrow('Персонаж уже есть в команде');
});

test('Check method addAll', () => {
    const player2 = new Daemon('Lucifer', 'Daemon');
    const player3 = new Magician('Merlin', 'Magician');
    const player4 = new Swordsman('Arthur', 'Swordsman');
    const player5 = new Undead('Crispy', 'Undead');
    const player6 = new Zombie('Shawn', 'Zombie');
    const team = new Team();
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
    ];
    const array = new Set();
    array.add({
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: "Lucifer",
        type: "Daemon"});
    array.add({
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: "Merlin",
        type: "Magician"});
    array.add({
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Arthur",
        type: "Swordsman"});
    array.add({
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Crispy",
        type: "Undead"});
    array.add({
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Shawn",
        type: "Zombie"});
        team.addAll(group);
    const result = {"members": array}
    expect(team).toEqual(result);
});

test('Check method to Array', () => {
    const player2 = new Daemon('Lucifer', 'Daemon');
    const player3 = new Magician('Merlin', 'Magician');
    const player4 = new Swordsman('Arthur', 'Swordsman');
    const player5 = new Undead('Crispy', 'Undead');
    const player6 = new Zombie('Shawn', 'Zombie');
    const team = new Team();
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
    ];
    team.addAll(group);
    const array = team.toArray();
    const result = [
        {
            attack: 10,
            defence: 40,
            health: 100,
            level: 1,
            name: "Lucifer",
            type: "Daemon"},
        {
            attack: 10,
            defence: 40,
            health: 100,
            level: 1,
            name: "Merlin",
            type: "Magician"},
        {
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "Arthur",
            type: "Swordsman"},
        {
            attack: 25,
            defence: 25,
            health: 100,
            level: 1,
            name: "Crispy",
            type: "Undead"},
        {
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "Shawn",
            type: "Zombie"}
    ]
    expect(array).toEqual(result);
});