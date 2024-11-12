import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Theme } from '../styles/Themes';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  // 회원 가입 클릭 시 회원 가입 페이지로 이동
  const MovetoSignup = () => {
    navigate('/signup');
  };
  // 로그인 버튼 클릭 시
  const ClickLogin = () => {

  }

  return (
    <>
      <LoginContainer>
        <H1>로그인</H1>
        <Input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="패스워드"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        ></Input>
        <Button onClick={ClickLogin}>로그인</Button>
        <Span onClick={MovetoSignup}>회원가입</Span>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const H1 = styled.h1`
  ${Theme.font.H1Large}
`;

const Input = styled.input`
  width: 20rem;
  height: 3rem;
  margin-top: 0.5rem;
  border: 1px solid ${Theme.color.Lightgray};
  border-radius: 0.5rem;
  padding-left: 1rem;
`;

const Button = styled.button`
  width: 20rem;
  height: 3rem;
  margin-top: 0.5rem;
  border: 1px solid ${Theme.color.Lightgray};
  border-radius: 0.5rem;
  background-color: ${Theme.color.Yellowgreen};
  color: ${Theme.color.White};
  &:hover {
    background-color: ${Theme.color.Darkbrown};
  }
`;

const Span = styled.span`
  margin-top: 1.5rem;
  ${Theme.font.medium}
  text-decoration: underline;
  cursor: pointer;
`;
