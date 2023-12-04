import './PhaseThree.css';

function PhaseThree({ setTrue, setFalse }) {
  const playAgain = () => {
    setTrue(true);
    setFalse(false);
  };
  return (
    <div id="phase-three-container">
      <h1>You Won!</h1>
      <button
        id="play-again-btn"
        type="button"
        className="btn"
        onClick={playAgain}
      >
        Play Again
      </button>
    </div>
  );
}

export default PhaseThree;
