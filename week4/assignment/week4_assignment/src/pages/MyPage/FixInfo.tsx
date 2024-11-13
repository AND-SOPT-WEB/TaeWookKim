import { useEffect, useState } from 'react';
import { checkingInstance } from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Theme } from '../../styles/Themes';

const FixInfo = () => {
  const [password, setPassword] = useState('');
  const [hobby, setHobby] = useState('');
  const [myInfo, setMyInfo] = useState({});
  const navigate = useNavigate();

  const clickFixButton = async () => {
    if (!password && !hobby) {
      alert('비밀번호 혹은 취미를 입력해주세요');
      return;
    }
    try {
      await checkingInstance.put('/user', myInfo);
      alert('정보 수정에 성공했습니다.');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (password && hobby) {
      setMyInfo({
        hobby,
        password,
      });
    } else if (password && !hobby) {
      setMyInfo({ password });
    } else {
      setMyInfo({ hobby });
    }
  }, [password, hobby]);

  return (
    <MyInfoContainer>
      <H2>새 비밀번호</H2>
      <Input
        type="password"
        placeholder="새 비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <H2>새 취미</H2>
      <Input
        type="text"
        placeholder="새 취미를 입력하세요"
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
      />
      <Button onClick={() => clickFixButton()}>수정하기</Button>
    </MyInfoContainer>
  );
};

export default FixInfo;

const MyInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 40%;
  gap: 0.5rem;
`;

const H2 = styled.h2`
  ${Theme.font.h2medium}
  width: 20rem;
`;

const Input = styled.input`
  width: 20rem;
  height: 3rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${Theme.color.Lightgray};
  border-radius: 0.5rem;
  padding-left: 1rem;
`;

const Button = styled.button`
  width: 20rem;
  height: 3rem;
  border: 1px solid ${Theme.color.Lightgray};
  border-radius: 0.5rem;
  background-color: ${Theme.color.Yellowgreen};
  color: ${Theme.color.White};
  transition: background-color 0.4s ease;
  &:hover {
    background-color: ${Theme.color.Darkbrown};
  }
`;
