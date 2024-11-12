import { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import FindHobby from '../pages/MyPage/FindHobby';
import FixInfo from '../pages/MyPage/FixInfo';
import { Theme } from '../styles/Themes';

const Mypage = () => {
  const [viewMode, setViewMode] = useState('hobby');
  const navigate = useNavigate();
  const clickLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <MypageContainer>
      <Header>
        <LeftHeader>
          <h1>마이페이지</h1>
          <H3 onClick={() => setViewMode('hobby')}> 취미 </H3>
          <H3 onClick={() => setViewMode('info')}> 내정보 </H3>
        </LeftHeader>

        <H3 onClick={clickLogout}> 로그아웃 </H3>
      </Header>
      <Content>
        <H1>{viewMode == 'hobby' ? '취미' : '내 정보 수정하기'}</H1>
        {viewMode == 'hobby' ? <FindHobby /> : <FixInfo />}
      </Content>
    </MypageContainer>
  );
};

export default Mypage;

const MypageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100vw;
  height: 4rem;
  background-color: ${Theme.color.Darkbrown};
  padding: 0rem 1rem;
  ${Theme.font.header}
`;

const LeftHeader = styled.div`
  display: flex;
  gap: 2rem;
`;

const H3 = styled.h3`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 60%;
  height: 100vh;
  width: 60%;
  height: 100vh;
  padding: 5vw 5vh;
`;

const H1 = styled.h1`
  ${Theme.font.large}
`;
