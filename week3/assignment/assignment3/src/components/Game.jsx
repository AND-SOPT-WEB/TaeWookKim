import {keyframes} from "@emotion/react";
import styled from '@emotion/styled';
import { Theme } from '../styles/theme';
import gameAlgorithm from '../algorithm/GameAlgorithm';

const Game = ({ level, timer, handleTimerChange }) => {
  const gameData = gameAlgorithm(level, timer, handleTimerChange);
  const rowNum = gameData.rowNum;
  const beforeNums = gameData.beforeNums; 
  const currentNum = gameData.currentNum;
  const isFinish = gameData.isFinish;
  const checkNumberClick = gameData.checkNumberClick;
  const closeModal = gameData.closeModal;

  return (
    <>
    <GameSection>
      <NextNum>다음숫자: {currentNum}</NextNum>
      <GameBoard row={rowNum}>
          {beforeNums.map((number, i) => (
            <NumberCard
              key={i}
              className={`clicked${number}`}
              onClick={() => checkNumberClick(number)}
            >
              {number}
            </NumberCard>
          ))}
        </GameBoard>
    </GameSection>
    {isFinish && <Modal timer={timer} closeModal={closeModal} />}
    </>
  );
};

const blinkEffect = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const GameSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const GameBoard = styled.div`
display: grid;
grid-template-columns: repeat(${(props) => props.row}, 1fr);
gap: 0.5rem;
`;

const NextNum = styled.span`
  ${Theme.font.large}
  margin-bottom: 2rem;
`;

const NumberCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.number !== null ? Theme.color.lightgreen : "transparent"};
  color: ${Theme.color.white};
  ${Theme.font.large};
  
  &.clicked{
    background-color: ${Theme.color.darkgreen};
    animation: ${blinkEffect} 1s;
  }
`

export default Game;
