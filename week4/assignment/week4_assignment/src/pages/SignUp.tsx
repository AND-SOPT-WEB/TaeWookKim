import { useState } from 'react';
import NamePage from './SignUp/NamePage';
import PasswordPage from './SignUp/PasswordPage';
import HobbyPage from './SignUp/HobbyPage';
import { useNavigate } from 'react-router-dom';
import { instance } from '../api/axios';
import { Theme } from '../styles/Themes';
import styled from '@emotion/styled';

interface FormData {
  id: string;
  password: string;
  hobby: string;
}

type ChangeType = (field: keyof FormData, value: string) => void;

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    id: '',
    password: '',
    hobby: '',
  });
  const navigate = useNavigate();

  const ChangeField: ChangeType = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const ChangeNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  //회원가입 API 요청
  const ApiSignup = async () => {
    try {
      const response = await instance.post('/user', {
        username: formData.id,
        password: formData.password,
        hobby: formData.hobby,
      });
      return response.data.result.no;
    } catch (e) {
      console.log(e);
      alert('회원가입에 실패했습니다.');
    }
  };

  // 회원가입 성공 여부 판단
  const CheckComplete = async () => {
    try {
      const no = await ApiSignup();
      alert(`회원가입 성공! 회원 번호 : ${no}`);
      navigate('/');
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        alert('회원가입에 실패했습니다.');
      }
    }
  };

  return (
    <>
      <SignupContainer>
        <H1>회원가입</H1>
        {step === 1 && (
          <NamePage
            onChange={ChangeField}
            onNext={ChangeNext}
            value={formData.id}
          />
        )}
        {step === 2 && (
          <PasswordPage
            onChange={ChangeField}
            onNext={ChangeNext}
            value={formData.password}
          />
        )}
        {step === 3 && (
          <HobbyPage
            onChange={ChangeField}
            onComplete={CheckComplete}
            value={formData.hobby}
          />
        )}
      </SignupContainer>
    </>
  );
};

export default SignUp;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
const H1 = styled.h1`
  ${Theme.font.H1Large}
`;