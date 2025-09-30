import styled from 'styled-components';
import RightArrow from '../../assets/arrow-right(brown).svg';
import DisableArrow from '../../assets/arrow-right(disabled).svg';

const OutlineButtonBox = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: #f5f1ee;
  color: #542f1a;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding: 12px 24px;
  margin-top: 8px;
  text-align: center;
  border: 1px solid #542f1a;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  & img {
    width: 18px;
  }
  &:hover {
    border: 2px solid #542f1a;
  }
  &:active {
    background-color: #e4d5c9;
  }
  &:disabled {
    background-color: #f5f1ee;
    color: #c7bbb5;
    border: 1px solid #c7bbb5;
    cursor: not-allowed;
  }
`;

export default function OutlineBtn({ btnText, isDisabled }) {
  return (
    <>
      <OutlineButtonBox disabled={isDisabled}>
        {btnText}
        <img src={isDisabled ? DisableArrow : RightArrow} alt="오른쪽 화살표" />
      </OutlineButtonBox>
    </>
  );
}
