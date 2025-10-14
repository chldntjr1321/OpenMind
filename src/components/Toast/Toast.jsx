import styled from 'styled-components';

const ToastMessage = styled.div`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000000;
  padding: 12px 20px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

export default function Toast({ message, visible }) {
  if (!visible) return null;
  return (
    <>
      <ToastMessage>{message}</ToastMessage>
    </>
  );
}
