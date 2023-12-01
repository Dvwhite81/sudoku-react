import Block from '../components/Block/Block';
import Cell from '../components/Cell/Cell';
import Square from '../components/Square/Square';

const getBlocks = () => {
  const blocks = [];
  for (let i = 0; i < 9; i++) {
    const id = `block-${i}`;
    const block = <Block key={id} id={id} blockI={i} />;
    blocks.push(block);
  }
  return blocks;
};

const getSquares = (blockI) => {
  const squares = [];
  for (let i = 0; i < 9; i++) {
    const id = `square-${blockI}-${i}`;
    const square = (
      <Square key={id} id={id} squareI={`${blockI}-${i}`} />
    );
    squares.push(square);
  }
  return squares;
};

const getCells = (squareI, styles) => {
  const cells = [];
  for (let i = 0; i < 9; i++) {
    const id = `cell-${squareI}-${i}`;
    const cell = <Cell key={id} id={id} styles={styles} />;
    cells.push(cell);
  }
  return cells;
};

const getNumbers = () => {
  const numbers = [];
  for (let i = 1; i < 10; i++) {
    const number = (
      <div className="number-div">
        <button
          id={`number-${i}`}
          className="number-btn"
          type="button"
        >
          {i}
        </button>
      </div>
    );
    numbers.push(number);
  }
  return numbers;
};

export { getBlocks, getSquares, getCells, getNumbers };
