import { getSquares } from '../../scripts/helpers';
import './Board.css';

function Board({
  setFalse,
  setTrue,
  game,
  numCounts,
  currentNumber,
  setMessage,
}) {
  const { grid } = game;
  const squares = getSquares(
    setFalse,
    setTrue,
    game,
    numCounts,
    grid,
    currentNumber,
    setMessage,
  );

  return <div id="board">{squares}</div>;
}

export default Board;
