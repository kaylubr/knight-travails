function knightMoves(startPosition, goalPosition) {
  const visited = new Set();

  const queue = [];
  queue.push([startPosition, [startPosition]]);
  
  while (queue.length > 0) {
    const [current, path] = queue.shift();
    visited.add(JSON.stringify(current));

    if (compareTwoPosition(current, goalPosition)) {
      console.log(`You made it in ${path.length} moves! Here's your path:`);
      path.forEach(p => console.log(p));
      return;
    }
   
    const movesToQueue = generatedMoves(current)
      .filter(move => !visited.has(JSON.stringify(move)))
      .map(move => [move, [...path, move]]);

    queue.push(...movesToQueue);
  }
};

function generatedMoves(position) {
  const [row, col] = position;
  const moveList = [];

  if (row - 2 >= 0 && col - 1 >= 0)
    moveList.push([row - 2, col - 1]);

  if (row - 1 >= 0 && col - 2 >= 0)
    moveList.push([row - 1, col - 2]);

  if (row + 1 <= 7 && col - 2 >= 0)
    moveList.push([row + 1, col - 2]);

  if (row + 2 <= 7 && col - 1 >= 0)
    moveList.push([row + 2, col - 1]);

  if (row + 2 <= 7 && col + 1 <= 7)
    moveList.push([row + 2, col + 1]);

  if (row + 1 <= 7 && col + 2 <= 7)
    moveList.push([row + 1, col + 2]);

  if (row - 1 >= 0 && col + 2 <= 7)
    moveList.push([row - 1, col + 2]);

  if (row - 2 >= 0 && col + 1 <= 7)
    moveList.push([row - 2, col + 1]);

  return moveList;
};

function compareTwoPosition(move, moveToCompare) { 
  return move[0] === moveToCompare[0] && move[1] === moveToCompare[1];
}

export default { 
  knightMoves, 
  generatedMoves, 
  compareTwoPosition
}