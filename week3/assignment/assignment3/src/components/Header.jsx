import styled  from "@emotion/styled";
import { Theme } from "../styles/theme";

{/*게임 버튼을 클릭한 상태만 레벨 선택과 타이머가 나타나게 하는 로직*/}
const Header = ({ menu, timer, handleMenuChange, handleLevelSelect }) => {
    return (
      <Head>
        <LeftHead>
          <h1>1 to 50</h1>
          <div>
            <Button
              isSelected={menu === 'game'}
              onClick={() => handleMenuChange('game')}
            >
              게임
            </Button>
            <Button
              isSelected={menu === 'rank'}
              onClick={() => handleMenuChange('rank')}
            >
              랭킹
            </Button>
          </div>
        </LeftHead>  
        {menu === "game" && (
            <RightHead>
                <Select onChange={(e) => handleLevelSelect(Number(e.target.value))}>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                </Select>
                <Time>{timer}</Time>
            </RightHead>
        )}
      </Head>
    );
}

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 4rem;
  background-color: ${Theme.color.darkgreen};
`

const LeftHead = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: ${Theme.color.white};
    ${Theme.font.H1Large};
  }
`

const RightHead = styled.div`
display: flex;
align-items: center;
`

const Button = styled.button`
border-radius : 0.4rem;
margin-left: 1.5rem;
color: white;
font-size: 1.1rem;
padding: 0.3rem 0.8rem;
background: ${({ isSelected }) => (isSelected ? '#088A68' : 'transparent')};
`

const Select = styled.select`
border-radius : 0.4rem;
font-size: 1.1rem;
padding: 0.3rem;
`

const Time = styled.div`
color: white;
font-size: 1.3rem;
width: 2rem;
padding: 1rem;
`

export default Header;