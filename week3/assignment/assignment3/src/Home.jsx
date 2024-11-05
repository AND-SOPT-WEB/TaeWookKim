import styled from "@emotion/styled";
import { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Rank from './components/Rank'
import { Theme } from "./styles/theme";

const Home = () =>{
    const [menu, setMenu] = useState("game");
    const [level, setLevel] = useState(1);
    const [timer, setTimer] = useState(0);

    const handleMenuChange = (menu) => {
        setMenu(menu);
    }
    const handleLevelSelect = (level) => {
        setLevel(level);
      };
    const handleTimerChange = (timer) => {
        setTimer(timer);
    };

    return (
      <>
        <Header
          menu={menu}
          timer={timer}
          handleMenuChange={handleMenuChange}
          handleLevelSelect={handleLevelSelect}
        />
        <Main>
            {menu === "game" ? (
                <Game level={level} timer={timer} handleTimerChange={handleTimerChange}/>
            ):(
                <Rank/>
            )}
        </Main>
      </>
    );
};

const Main = styled.main`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 2rem;
`;

export default Home;