import React, { useRef, useEffect, useState } from 'react';
import World from './utils/world'

const Game = ({ width, height, tilesize }) => {
  const canvasRef = useRef();
  const [world, setWorld] = useState(new World(width, height, tilesize));

  useEffect(() => {
    console.log('Create Map!');

    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.createCellularMap();
    newWorld.moveToSpace(world.player);

    setWorld(newWorld);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('Draw to canvas');

    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width * tilesize, height * tilesize);
    world.draw(ctx);
  });
  return (
    <>
      <canvas
        ref={canvasRef}
        width={width * tilesize}
        height={height * tilesize}
        style={{ border: '1px solid black', background: 'DimGray' }}
      ></canvas>

      <ul>
        {world.player.inventory.map((item, index) => (
          <li key={index}>{item.attributes.name}</li>
        ))}
      </ul>

      <ul>
        {world.history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Game;
