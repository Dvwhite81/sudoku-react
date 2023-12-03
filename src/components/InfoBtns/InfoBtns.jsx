import InfoButton from '../InfoButton/InfoButton';
import Undo from '../../assets/images/undo.png';
import Delete from '../../assets/images/delete.png';
import Hint from '../../assets/images/hint.png';
import { handleUndo } from '../../scripts/helpers';

function InfoBtns({ game }) {
  const btns = [
    { name: 'undo', source: Undo, func: handleUndo },
    { name: 'delete', source: Delete, func: handleUndo },
    { name: 'hint', source: Hint, func: handleUndo },
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
        />
      ))}
    </div>
  );
}

export default InfoBtns;
