import styled from 'styled-components';
import Profile from '../../assets/profile.svg';
import TextArea from '../InputTextArea/InputTextArea.jsx';
import FilledBtn from '../ButtonBox/FilledBtn.jsx';
import OutlineBtn from '../ButtonBox/OutlineBtn.jsx';
import { useEffect, useState } from 'react';

const CardBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  & > img {
    width: 48px;
  }
  & > div {
    width: 100%;
  }
`;

export default function AnswerCard() {
  const text = '답변 완료';
  const [inputValue, setInputValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    if (inputValue === '') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [inputValue]);

  return (
    <>
      <CardBox>
        <img src={Profile} alt="프로필 사진" />
        <div>
          <p>아초는고양이</p>
          <TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <FilledBtn btnText={text} isDisabled={isDisabled}></FilledBtn>
        </div>
      </CardBox>
    </>
  );
}
