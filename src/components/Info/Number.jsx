import { checkNumCountEmpty, highlightBoardNums } from '../../scripts/helpers';

function Number({ i, numCounts, setCurrentNumber }) {
  const btnClass = checkNumCountEmpty(numCounts, i) ? ' hide-number' : '';

  const handleNumberClick = (e) => {
    const button = e.target;
    const number = parseInt(button.textContent, 10);
    setCurrentNumber(number);
    setButton(button);
    highlightBoardNums(number);
  };

  const setButton = (button) => {
    const allNumBtns = document.querySelectorAll('.number-btn');
    allNumBtns.forEach((btn) => btn.classList.remove('active-btn'));
    button.classList.add('active-btn');
  };

  return (
    <div key={i} className="number-div">
      <button
        id={`number-${i}`}
        className={`number-btn ${btnClass}`}
        type="button"
        onClick={handleNumberClick}
      >
        {i}
      </button>
    </div>
  );
}

export default Number;
