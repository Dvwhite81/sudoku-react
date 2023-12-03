import Sudoku from '../Game/Game';
import { convertDifficulty, getNumCounts } from '../../scripts/helpers';
import './PhaseOne.css';

function PhaseOne({
  setFalse,
  setTrue,
  setDifficulty,
  setGame,
  setNumCounts,
  setSolution,
}) {
  const handleSubmit = (difficulty) => {
    setDifficulty(difficulty);
    const diffNum = convertDifficulty(difficulty);
    const game = Sudoku();
    game.generate(diffNum);
    const solution = game.getSolution();
    setSolution(solution);
    const numCounts = getNumCounts(game.grid);
    setNumCounts(numCounts);
    setGame(game);
    setFalse(false);
    setTrue(true);
  };

  return (
    <div id="phase-one-container">
      <h1>Hello!</h1>
      <h3>Please select the difficulty:</h3>
      <div id="phase-one-btns">
        <button
          id="easy-submit"
          className="btn"
          type="submit"
          onClick={() => handleSubmit('easy')}
        >
          Easy
        </button>
        <button
          id="medium-submit"
          className="btn"
          type="submit"
          onClick={() => handleSubmit('medium')}
        >
          Medium
        </button>
        <button
          id="hard-submit"
          className="btn"
          type="submit"
          onClick={() => handleSubmit('hard')}
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default PhaseOne;
