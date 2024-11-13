import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../styles/Themes';

interface FormData {
  id: string;
  password: string;
  hobby: string;
}

interface HobbyPageProps {
  onChange: (field: keyof FormData, value: string) => void;
  onComplete: () => void;
  value: string;
}

const HobbyPage = ({ onChange, onComplete, value }: HobbyPageProps) => {
  const navigate = useNavigate();

  const MovetoLogin = () => {
    navigate('/');
  };

  return (
    <div>
      <H2>취미</H2>
      <InputContainer>
        <Input
          type="text"
          placeholder="취미를 입력해주세요"
          value={value}
          onChange={(e) => onChange('hobby', e.target.value)}
        />
        {value.length > 8 && <span>취미는 8자 이하로 입력해주세요</span>}
      </InputContainer>
      <ButtonContainer>
        <Button disabled={value.length == 0 || value.length > 8} onClick={onComplete}>
          회원가입
        </Button>
      </ButtonContainer>
      <LoginContainer>
        <span>이미 회원이신가요?</span>
        <span onClick={MovetoLogin}>로그인</span>
      </LoginContainer>
    </div>
  );
};

export default HobbyPage;

const H2 = styled.h2`
  ${Theme.font.medium};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    ${Theme.font.smallred};
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }
`;

const Input = styled.input`
  width: 20rem;
  height: 3rem;
  margin-top: 0.5rem;
  border: 1px solid ${Theme.color.Lightgray};
  border-radius: 0.5rem;
  padding-left: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const Button = styled.button`
  width: 20rem;
  height: 3rem;
  border: 1px solid ${Theme.color.Lightgray};
  border-radius: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? Theme.color.Gray : Theme.color.Yellowgreen)};
  color: ${Theme.color.White};
  transition: background-color 0.4s ease;

  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      background-color: ${Theme.color.Darkbrown};
    }
  `}
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.8rem;

  span {
    ${Theme.font.small};
    margin-right: 0.5rem;
  }

  span:nth-of-type(2) {
    color: ${Theme.color.Darkbrown};
    cursor: pointer;
  }
`;