import { getCells } from '../../scripts/helpers';
import './Square.css';

function Square({ id, squareI, number }) {
  const styles = !number
    ? { border: 'none' }
    : { border: '1px solid lightgray' };

  const cells = getCells(squareI, styles);

  return (
    <div id={id} className="square">
      {cells}
    </div>
  );
}

export default Square;
