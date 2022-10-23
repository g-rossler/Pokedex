export class Pokemon {
  constructor(data) {
    this.name = data.name.toUpperCase();
    this.id = data.id;
    this.image = data.sprites.front_default;
    this.height = data.height;
    this.weight = data.weight;
    this.health = data.stats[0].base_stat;
    this.attack = data.stats[1].base_stat;
    this.defence = data.stats[2].base_stat;
    this.specialAttack = data.stats[3].base_stat;
    this.specialDefence = data.stats[4].base_stat;
    this.speed = data.stats[5].base_stat;
    this.type = data.types;
  }
}
