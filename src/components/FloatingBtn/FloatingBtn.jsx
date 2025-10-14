import styled from 'styled-components';

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: #542f1a;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 200px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  padding: 14.5px 49.5px;
  cursor: pointer;
  user-select: none;
`;

export default function FloatingBtn({ handleBtnClick }) {
  return (
    <>
      <FloatingButton onClick={handleBtnClick}></FloatingButton>
    </>
  );
}
