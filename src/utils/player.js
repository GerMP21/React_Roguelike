import Entity from './Entity';

class Player extends Entity {
  inventory = [];

  attributes = {
    name: 'Player',
    color: 'white'
    ascii: '@',
    health: 10
  };

  move(dx, dy) {
    if (this.attributes.health <= 0) return;
    this.x += dx;
    this.y += dy;
  }

  copy() {
    let newPlayer = new Player();
    Object.assign(newPlayer, this);
    return newPlayer;
  }

  addToInventory(item) {
    this.inventory.push(item);
  }

}

export default Player;
