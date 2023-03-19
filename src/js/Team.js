import Character from './Character';

export default class Team {
  constructor(value) {
    this.value = value;
  }

  *[Symbol.iterator]() {
    const value = this.value;
    let index = 0;
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    const names = ['Исьа', 'Стиенс', 'Трастронун', 'Еран', 'Гагаллим', 'Бертрам'];
    while (index < value) {
      index++;
      const name = names[Math.floor(Math.random() * 6)];
      const type = types[Math.floor(Math.random() * 6)];
      const attack = Math.floor(Math.random() * (50 - 10) + 10);
      const defence = Math.floor(Math.random() * (50 - 10) + 10);
      yield new Character(name, type, attack, defence);
    }
  }
}
