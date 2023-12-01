import { getNumbers } from '../../scripts/helpers';

function Numbers() {
  const numbers = getNumbers();

  return <div id="numbers">{numbers}</div>;
}

export default Numbers;
