import Loot from './loot';

const lootTable = [
  { name: 'Sword', color: 'darkgrey', ascii: '|', offset: { x: 0, y: 3 } },
  { name: 'Mace', color: 'darkgrey', ascii: '\\', offset: { x: 0, y: 3 } },
  { name: 'Axe', color: 'darkgrey', ascii: '/', offset: { x: 0, y: 3 }  },
  { name: 'Health Potion', color: 'red', ascii: '!', offset: { x: 0, y: 3 } },
  { name: 'Gold coin', color: 'yellow', ascii: '$', offset: { x: 0, y: 3 } },
  {
    name: 'Light Armor',
    color: 'darkgrey',
    ascii: ')',
    offset: { x: 4, y: 3 }
  },
    {
    name: 'Heavy Armor',
    color: 'darkgrey',
      ascii: ']',
    offset: { x: 4, y: 3 }
  }
];

class Spawner {
  constructor(world) {
    this.world = world;
  }

  spawn(spawnCount, createEntity) {
    for (let count = 0; count < spawnCount; count++) {
      let entity = createEntity();
      this.world.addEntity(entity);
      this.world.moveToSpace(entity);
    }
  }

  spawnLoot(spawnCount) {
    this.spawn(spawnCount, () => {
      return new Loot(
        getRandomInt(this.world.width - 1),
        getRandomInt(this.world.height - 1),
        this.world.tilesize,
        lootTable[getRandomInt(lootTable.length)]
      );
    });
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Spawner;
