import Difficulty from '../Difficulty/Difficulty';
import InfoBtns from '../InfoBtns/InfoBtns';
import Numbers from '../Numbers/Numbers';
import './Info.css';

function Info({ difficulty }) {
  return (
    <div id="info">
      <Difficulty difficulty={difficulty} />
      <InfoBtns />
      <Numbers />
    </div>
  );
}

export default Info;
