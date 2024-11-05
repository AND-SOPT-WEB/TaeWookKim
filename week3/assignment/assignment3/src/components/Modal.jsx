import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import { Theme } from "../styles/theme";

const portalElement = document.getElementById("modal");

const Modal = ({ timer, closeModal }) => {
  return createPortal(
    <>
      <Backdrop onClick={closeModal} />
      <Container onClick={(e) => e.stopPropagation()}>
        <Text>걸린시간 : {timer}</Text>
        <Button onClick={closeModal}>
          확인
        </Button>
      </Container>
    </>,
    portalElement
  );
};

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 15rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${Theme.color.lightgray};
`;

const Text = styled.span`
  ${Theme.font.large}
  margin-bottom: 3rem;
`;

const Button = styled.div`
  background-color:gray;
  padding: 0.6rem;
  color: white;
`;

export default Modal;