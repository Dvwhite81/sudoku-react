import './PhaseOne.css';

function PhaseOne({ setFalse, setDifficulty }) {
  const handleSubmit = (difficulty) => {
    console.log('handleSubmit difficulty:', difficulty);
    setDifficulty(difficulty);
    setFalse(false);
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
