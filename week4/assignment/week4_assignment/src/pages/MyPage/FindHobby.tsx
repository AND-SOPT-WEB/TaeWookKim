import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { checkingInstance } from '../../api/axios';
import { Theme } from '../../styles/Themes';

const FindHobby = () => {
  const [no, setNo] = useState<number | null>(null);
  const [hobby, setHobby] = useState('');
  const [othersHobby, setOthersHobby] = useState('');
  const [selectedHobby, setSelectedHobby] = useState('');

  useEffect(() => {
    setSelectedHobby(`${no}번 사용자의 취미: ${othersHobby}`);
  }, [othersHobby]);

  const getMyHobby = async () => {
    try {
      const response = await checkingInstance.get('/user/my-hobby');
      return response.data.result.hobby;
    } catch (e) {
      console.log(e);
    }
  };

  const getOtherHobby = async () => {
    try {
      const response = await checkingInstance.get(`/user/${no}/hobby`);
      setOthersHobby(response.data.result.hobby);
      return response.data.result.hobby;
    } catch (e) {
      console.log(e);
      alert('해당 번호의 데이터가 존재하지 않습니다');
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const hobby = await getMyHobby();
      setHobby(hobby);
    };
    fetch();
  }, []);

  return (
    <HobbyContainer>
      <Hobby>
        <H2>나의 취미</H2>
        <Span>{hobby}</Span>
      </Hobby>
      <Search>
        <H2>다른 사람들의 취미</H2>
        <Input
          type="number"
          placeholder="사용자 번호"
          value={no || ''}
          onChange={(e) => setNo(Number(e.target.value))}
        />
        <Button onClick={() => getOtherHobby()}>검색</Button>
        <Span>{selectedHobby && othersHobby}</Span>
      </Search>
    </HobbyContainer>
  );
};

export default FindHobby;

const HobbyContainer = styled.section`
  width: 100%;
  height: 60%;
  isplay: flex;
  flex-direction: column;
  gap: 1rem;
`;
const H2 = styled.h2`
  ${Theme.font.h2bold}
`;

const Span = styled.span`
  ${Theme.font.h3bronze}
  padding: 0 0.5rem;
`;
const Input = styled.input`
  width: 20rem;
  height: 3rem;
  border: 1px solid ${Theme.color.Lightgray};
  border-radius: 0.5rem;
  padding-left: 1rem;
`;

const Hobby = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;
const Search = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
