import { useState } from 'react';
import PhaseOne from '../PhaseOne/PhaseOne';
import PhaseTwo from '../PhaseTwo/PhaseTwo';
import PhaseThree from '../PhaseThree/PhaseThree';
import './Main.css';

function Main() {
  const [isPhaseOne, setIsPhaseOne] = useState(true);
  const [isPhaseTwo, setIsPhaseTwo] = useState(false);
  const [isPhaseThree, setIsPhaseThree] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [game, setGame] = useState(null);
  const [numCounts, setNumCounts] = useState(null);
  const [solution, setSolution] = useState(null);

  return isPhaseOne ? (
    <PhaseOne
      setFalse={setIsPhaseOne}
      setTrue={setIsPhaseTwo}
      setDifficulty={setDifficulty}
      setGame={setGame}
      setNumCounts={setNumCounts}
      setSolution={setSolution}
    />
  ) : isPhaseTwo ? (
    <PhaseTwo
      setFalse={setIsPhaseTwo}
      setTrue={setIsPhaseThree}
      game={game}
      numCounts={numCounts}
      solution={solution}
      difficulty={difficulty}
    />
  ) : isPhaseThree ? (
    <PhaseThree />
  ) : null;
}

export default Main;
