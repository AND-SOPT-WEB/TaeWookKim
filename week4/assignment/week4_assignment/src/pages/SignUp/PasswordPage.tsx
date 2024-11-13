import { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../styles/Themes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash  } from '@fortawesome/free-solid-svg-icons';

interface FormData {
  id: string;
  password: string;
  hobby: string;
}

interface PasswordPageProps {
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  value: string;
}

const PasswordPage = ({ onChange, onNext, value }: PasswordPageProps) => {
  const [copyPassword, setCopyPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const MovetoLogin = () => {
    navigate('/');
  };

  const clickEye = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      <H2>비밀번호</H2>
      <InputContainer>
        <InputWrapper>
          <Input
            type={visible ? 'text' : 'password'}
            placeholder="비밀번호를 입력해주세요"
            value={value}
            onChange={(e) => onChange('password', e.target.value)}
          />
          <Eyebutton onClick={clickEye} type="button">
            <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
          </Eyebutton>
        </InputWrapper>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
        />
        {value.length > 8 && <span>비밀번호를 8자 이하로 입력해주세요</span>}
        {copyPassword.length > 0 && value !== copyPassword && (
          <span>비밀번호가 일치하지 않습니다</span>
        )}
      </InputContainer>
      <ButtonContainer>
        <Button
          disabled={value.length == 0 || value.length > 8 || copyPassword.length ==0 || value != copyPassword}
          onClick={onNext}
        >
          다음
        </Button>
      </ButtonContainer>
      <LoginContainer>
        <span>이미 회원이신가요?</span>
        <span onClick={MovetoLogin}>로그인</span>
      </LoginContainer>
    </div>
  );
};

export default PasswordPage;

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

const InputWrapper = styled.div`
  position: relative;
  width: 20rem;
`;

const Input = styled.input`
  width: 20rem;
  height: 3rem;
  margin-top: 0.5rem;
  border: 1px solid ${Theme.color.Lightgray};
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 2.5rem;
`;

const Eyebutton = styled.button`
  position: absolute;
  right: 0.6rem;
  top: 55%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${Theme.color.Gray};
  font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
  margin-top: 0.5rem;
`;

const Button = styled.button`
  width: 20rem;
  height: 3rem;
  border: 1px solid ${Theme.color.Lightgray};
  border-radius: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) =>
    disabled ? Theme.color.Gray : Theme.color.Yellowgreen};
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