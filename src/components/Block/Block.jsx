import { getSquares } from '../../scripts/helpers';
import './Block.css';

function Block({ id, blockI }) {
  const squares = getSquares(blockI);

  return (
    <div id={id} className="block">
      {squares}
    </div>
  );
}

export default Block;
