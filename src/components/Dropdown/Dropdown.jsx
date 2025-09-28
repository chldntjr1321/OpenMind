import styled from 'styled-components';
import { useState } from 'react';
import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg';

const CurrentOption = styled.div`
  width: fit-content;
  border: 1px solid ${({ isOpen }) => (isOpen ? '#000000' : '#818181')};
  border-radius: 8px;
  background-color: #ffffff;
  color: ${({ isOpen }) => (isOpen ? '#000000' : '#818181')};
  cursor: pointer;
  padding: 8px 12px;
  user-select: none;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  }

  & > div > p {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
  }
  & > div > img {
    width: 14px;
  }
`;

const OptionBox = styled.div`
  width: fit-content;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  user-select: none;
  margin-top: 4px;

  & > ul {
    width: 79px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
    padding: 4px 0;
    box-shadow: 0 4px 4px 0 rgba(140, 140, 140, 0.25);
  }
  & > ul > li {
    padding: 6px 16px;
  }
  & .selected {
    color: #1877f2;
    pointer-events: none;
  }
`;

export default function Dropdown({ selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CurrentOption
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>
          <p>{selectedOption === 'name' ? '이름순' : '최신순'}</p>
          <img src={isOpen ? ArrowUp : ArrowDown} alt="옵션 버튼" />
        </div>
      </CurrentOption>

      {isOpen && (
        <OptionBox>
          <ul>
            <li
              className={selectedOption === 'name' ? 'selected' : ''}
              onClick={() => {
                setSelectedOption('name');
                setIsOpen(false);
              }}
            >
              이름순
            </li>
            <li
              className={selectedOption === 'recent' ? 'selected' : ''}
              onClick={() => {
                setSelectedOption('recent');
                setIsOpen(false);
              }}
            >
              최신순
            </li>
          </ul>
        </OptionBox>
      )}
    </>
  );
}
