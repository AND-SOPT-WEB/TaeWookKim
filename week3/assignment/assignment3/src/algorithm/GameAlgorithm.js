import { useState, useEffect } from 'react';

// 숫자를 섞어주는 함수
const randomArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// 숫자를 생성해서 랜덤으로 배열에 넣는 함수
const createNums = (min, max) => {
  const nums = [];
  for (let i = min; i <= max; i++) {
    nums.push(i);
  }
  return randomArray(nums);
};

// 결과 저장 및 local 저장소에서 넣고 빼기
const saveResult = (time, level) => {
  const result = {
    timestamp: new Date().toISOString(),
    time,
    level,
  };
  const savedResults = JSON.parse(localStorage.getItem('results')) || [];
  savedResults.push(result);
  localStorage.setItem('results', JSON.stringify(savedResults));
};

// 게임 알고리즘
const gameAlgorith = (level, timer, handleTimeChange) => {
  const rowNum = level + 2;
  const boardSize = rowNum * rowNum;
  const maxNum = boardSize * 2;
  const [currentNum, setCurrentNum] = useState(1);
  const [timeId, setTimeId] = useState(null);
  const [isFinish, setIsFinish] = useState(false);
  const [beforeNums, setBeforeNums] = useState(createNums(1, boardSize));
  const [afterNums, setAfterNums] = useState(createNums(boardSize + 1, maxNum));
  const [clickedNumbers, setClickedNumbers] = useState([]);

  const checkNumberClick = (number) => {
    // 게임을 시작 할때 타이머를 시작시키는 로직
    if (currentNum === 1) {
      const id = setInterval(() => {
        handleTimeChange((previousTime) => {
          const updatedTime = (previousTime + 0.01).toFixed(2);
          return parseFloat(updatedTime);
        });
      }, 10);
      setTimeId(id);
    }

    if (currentNum <= boardSize) {
      const newNum = afterNums.pop();
      const updateBoard = beforeNums.map((num) =>
        num === number ? newNum : num
      );
      setBeforeNums(updateBoard);
    }
    // 카드를 없애는 로직
    else if (currentNum > boardSize && currentNum < maxNum) {
      const updatedBoard = beforeNums.map((num) =>
        num === number ? null : num
      );
      setBeforeNums(updatedBoard);
    }
    
    setClickedNumbers((prev) => [...prev, number]);
    setCurrentNum(currentNum + 1);

    if (number === maxNum) {
      clearInterval(timeId);
      saveResult(timer, level);
      setIsFinish(true);
      return;
    }
  };

  const closeModal = () => {
    setBeforeNums(createNums(1, boardSize));
    setAfterNums(createNums(boardSize + 1, maxNum));
    setClickedNumbers([]);
    setIsFinish(false);
    setCurrentNum(1);
    handleTimeChange(0);
  };

  useEffect(() => {
    setBeforeNums(createNums(1, boardSize));
    setAfterNums(createNums(boardSize + 1, maxNum));
    setClickedNumbers([]);
    setIsFinish(false);
    clearInterval(timeId);
    setCurrentNum(1);
    handleTimeChange(0);
    return () => clearInterval(timeId);
  }, [level]); //level이 변경될 때 마다 렌더링이 되도록

  return {
    rowNum,
    beforeNums,
    currentNum,
    isFinish,
    closeModal,
    createNums,
    checkNumberClick,
    clickedNumbers,
  };
};

export default gameAlgorith;
