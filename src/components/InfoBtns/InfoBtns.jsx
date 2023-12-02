import InfoButton from '../InfoButton/InfoButton';
import Undo from '../../assets/images/undo.png';
import Hint from '../../assets/images/hint.png';

function InfoBtns() {
  const btns = [
    { name: 'undo', source: Undo },
    { name: 'hint', source: Hint },
  ];

  return (
    <div id="info-btns">
      {btns.map((btn) => (
        <InfoButton key={btn.name} name={btn.name} src={btn.source} />
      ))}
    </div>
  );
}

export default InfoBtns;
