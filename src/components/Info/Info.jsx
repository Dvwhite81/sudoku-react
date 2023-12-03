import Difficulty from '../Difficulty/Difficulty';
import InfoBtns from '../InfoBtns/InfoBtns';
import Numbers from '../Numbers/Numbers';
import './Info.css';

function Info({ game, difficulty, setCurrentNumber }) {
  return (
    <div id="info">
      <Difficulty difficulty={difficulty} />
      <InfoBtns game={game} />
      <Numbers setCurrentNumber={setCurrentNumber} />
    </div>
  );
}

export default Info;
