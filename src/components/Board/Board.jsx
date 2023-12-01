import { getBlocks } from '../../scripts/helpers';
import './Board.css';

function Board() {
  const blocks = getBlocks();

  return <div id="board">{blocks}</div>;
}

export default Board;
