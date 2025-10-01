import styled from 'styled-components';
import RightArrow from '../../assets/arrow-right(white).svg';

const FillButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #542f1a;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding: 12px 24px;
  margin-top: 8px;
  text-align: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  & img {
    width: 18px;
  }
  &:hover {
    border: 2px solid #341909;
  }
  &:active {
    background-color: #341909;
  }
  &.disabled {
    background-color: #c7bbb5;
    border: none;
    cursor: not-allowed;
  }
`;

export default function FilledBtn({ btnText, isDisabled }) {
  return (
    <>
      <FillButtonBox className={isDisabled ? 'disabled' : ''}>
        {btnText}
        <img src={RightArrow} alt="오른쪽 화살표" />
      </FillButtonBox>
    </>
  );
}
