import styled from '@emotion/styled';
import gameAlgorithm from '../algorithm/GameAlgorithm';

const Game = ({ level, timer, handleTimerChange }) => {
  const gameData = gameAlgorithm(level, timer, handleTimerChange);
  const rowNum = gameData.rowNum;
  const boardNum = gameData.boardNum; 
  const currentNum = gameData.currentNum;
  const isFinish = gameData.isFinish;
  const handleNumberClick = gameData.handleNumberClick;
  const closeModal = gemData.closeModal;

  return (
    <>
    <GameSection>
      <NextNum>다음숫자: {currentNum}</NextNum>
      <GameBoard row={rowNum}>
          {boardNum.map((number, i) => (
            <NumberCard
              key={i}
              id={`${number}`}
              onClick={() => handleNumberClick(number)}
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

const GameSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const GameBoard = styled.div`

`;
const NextNum = styled.span`
  font-size: 1.2rem;
`;

const NumberCard = styled.button`
`

export default Game;
