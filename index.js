const knightMoves = (currentPosition, goalPosition) => {

};

const generateEdges = position => {
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

export default { knightMoves, generateEdges }