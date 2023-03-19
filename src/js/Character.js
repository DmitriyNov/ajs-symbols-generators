export default class Character {
  constructor(name, type, attack, defence) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя не соответствует условиям (длинна от 2 до 10 символов)');
    }
    if (!types.includes(type)) {
      throw new Error('Задан несуществующий тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 50;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}
