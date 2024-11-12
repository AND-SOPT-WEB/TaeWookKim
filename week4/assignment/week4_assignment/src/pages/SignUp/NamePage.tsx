import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

interface FormData {
  id: string;
  password: string;
  hobby: string;
}

interface NamePageProps {
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  value: string;
}

const NamePage = ({ onChange, onNext, value }: NamePageProps) => {
  const navigate = useNavigate();

  const MovetoLogin = () => {
    navigate('/');
  };
  
  return (
    <div>
      <h2>이름</h2>
      <div>
      <input
        type="text"
        placeholder="사용자 이름을 입력해주세요"
        value={value}
        onChange={(e) => onChange('id', e.target.value)}
      />
      {value.length > 8 && <span>이름은 8자 이하로 입력해주세요</span>}
    </div>
    <div><button>다음</button></div>
    <div>
    <span>이미 회원이신가요?</span>
    <span onClick={MovetoLogin}>로그인</span>
    </div>
    </div>
  );
};

export default NamePage;
