import { getNumbers } from '../../scripts/helpers';

function Numbers({ numCounts, setCurrentNumber }) {
  const numbers = getNumbers(numCounts, setCurrentNumber);

  return <div id="numbers">{numbers}</div>;
}

export default Numbers;
