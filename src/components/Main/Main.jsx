import { useState } from 'react';
import Board from '../Board/Board';
import Info from '../Info/Info';
import './Main.css';

function Main() {
  const [difficulty, setDifficulty] = useState('Easy');
  return (
    <div id="main">
      <Board />
      <Info difficulty={difficulty} />
    </div>
  );
}

export default Main;
