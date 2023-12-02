import { getSquares } from '../../scripts/helpers';
import './Board.css';

function Board({ game, currentNumber }) {
  const { grid } = game;
  const squares = getSquares(game, grid, currentNumber);

  return <div id="board">{squares}</div>;
}

export default Board;
