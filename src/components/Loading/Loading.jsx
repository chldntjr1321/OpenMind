import { createContext, useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components'; // styled-components와 keyframes를 import하여 스타일 및 애니메이션 적용
import { createPortal } from 'react-dom'; // createPortal을 사용하여 React 트리 밖에 컴포넌트 렌더링

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #ccc;
  border-top-color: #007bff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 12px;
`;

const Message = styled.p`
  font-size: 16px;
  color: #333333;
`;

// 포탈을 별도의 파일로 두지 않고 여기에 작성
function LoadingPortal() {
  return createPortal(
    <Overlay>
      <Spinner />
      <Message>잠시만 기다려 주세요...</Message>
    </Overlay>,
    document.getElementById('loading-root')
  );
}

// Loading의 상태를 위한 전역 상태를 담아두는 공간인 Context 생성
const LoadingContext = createContext();

// Context 안에 담긴 isLoading, setIsLoading를 사용할 수 있도록 Provider 작성
export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && <LoadingPortal />}
    </LoadingContext.Provider>
  );
}

// LoadingContext를 쉽게 사용하기 위한 커스텀 훅 (안에서 useContext(LoadingContext)를 실행하는 함수의 이름이 useLoading인거임!)
export const useLoading = () => useContext(LoadingContext);
