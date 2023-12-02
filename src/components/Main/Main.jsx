import { useEffect, useState } from 'react';
import PhaseOne from '../PhaseOne/PhaseOne';
import PhaseTwo from '../PhaseTwo/PhaseTwo';
import PhaseThree from '../PhaseThree/PhaseThree';
import Sudoku from '../Game/Game';
import { convertDifficulty } from '../../scripts/helpers';
import './Main.css';

function Main() {
  const [isPhaseOne, setIsPhaseOne] = useState(true);
  const [isPhaseTwo, setIsPhaseTwo] = useState(false);
  const [isPhaseThree, setIsPhaseThree] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    if (!isPhaseOne) {
      console.log('useEffect');
      setIsPhaseTwo(true);
    }
    if (!isPhaseOne && !isPhaseTwo) {
      setIsPhaseThree(true);
    }
  }, [isPhaseOne, isPhaseTwo]);

  const diffNum = convertDifficulty(difficulty);
  const game = Sudoku();
  game.generate(diffNum);
  const solution = game.getSolution();

  return isPhaseOne ? (
    <PhaseOne
      setFalse={setIsPhaseOne}
      setDifficulty={setDifficulty}
    />
  ) : isPhaseTwo ? (
    <PhaseTwo
      game={game}
      solution={solution}
      difficulty={difficulty}
    />
  ) : isPhaseThree ? (
    <PhaseThree />
  ) : null;
}

export default Main;
