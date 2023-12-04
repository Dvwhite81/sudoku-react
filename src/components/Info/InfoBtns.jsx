import InfoButton from './InfoButton';
import Undo from '../../assets/images/undo.png';
import Hint from '../../assets/images/hint.png';
import { handleUndo, getHint } from '../../scripts/helpers';

function InfoBtns({ setFalse, setTrue, game, numCounts, setMessage }) {
  const handleHintClick = () => {
    getHint(game, numCounts);
    if (game.checkWin()) {
      setFalse(false);
      setTrue(true);
    }
  };

  const btns = [
    { name: 'undo', source: Undo, func: handleUndo },
    { name: 'hint', source: Hint, func: handleHintClick },
  ];

  return (
    <div id="info-btns">
      {btns.map((btn) => (
        <InfoButton
          key={btn.name}
          name={btn.name}
          src={btn.source}
          game={game}
          func={btn.func}
          setMessage={setMessage}
        />
      ))}
    </div>
  );
}

export default InfoBtns;
