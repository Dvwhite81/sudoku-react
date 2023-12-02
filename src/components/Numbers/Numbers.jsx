import { getNumbers } from '../../scripts/helpers';

function Numbers({ setCurrentNumber }) {
  const numbers = getNumbers(setCurrentNumber);

  return <div id="numbers">{numbers}</div>;
}

export default Numbers;
