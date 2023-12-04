import Difficulty from './Difficulty';
import InfoBtns from './InfoBtns';
import Numbers from './Numbers';
import './Info.css';

function Info({
  setFalse,
  setTrue,
  game,
  numCounts,
  difficulty,
  setCurrentNumber,
  setMessage,
}) {
  return (
    <div id="info">
      <Difficulty difficulty={difficulty} />
      <InfoBtns
        setFalse={setFalse}
        setTrue={setTrue}
        game={game}
        numCounts={numCounts}
        setMessage={setMessage}
      />
      <Numbers numCounts={numCounts} setCurrentNumber={setCurrentNumber} />
    </div>
  );
}

export default Info;
