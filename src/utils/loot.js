import Entity from './entity';

class Loot extends Entity {
  action(verb, world) {
    if (verb === 'touch') {
      world.player.addToInventory(this);
      world.remove(this);
    }
  }
}

export default Loot;
