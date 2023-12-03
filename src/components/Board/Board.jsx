import { getSquares } from '../../scripts/helpers';
import './Board.css';

function Board({ game, numCounts, currentNumber }) {
  const { grid } = game;
  const squares = getSquares(game, numCounts, grid, currentNumber);

  return <div id="board">{squares}</div>;
}

export default Board;
