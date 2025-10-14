import styled from 'styled-components';
import Profile from '../../assets/profile.svg';
import TextArea from '../InputTextArea/InputTextArea.jsx';
import FilledBtn from '../ButtonBox/FilledBtn.jsx';
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
    display: flex;
    flex-direction: column;
  }
  & div p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
  & .profile__wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }
  & .profile__wrapper p:nth-child(2) {
    color: #818181;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;
const RejectedAnswer = styled.div`
  color: #b93333;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

export default function AnswerCard({ name, date, content }) {
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
      {/* 답변 작성 중 화면 */}
      <CardBox>
        <img src={Profile} alt="프로필 사진" />
        <div>
          <p>{name}</p>
          <TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <FilledBtn btnText={text} isDisabled={isDisabled}></FilledBtn>
        </div>
      </CardBox>
      {/* 답변 작성 후 화면 */}
      <CardBox>
        <img src={Profile} alt="프로필 사진" />
        <div>
          <div className="profile__wrapper">
            <p>{name}</p>
            <p>{date}</p>
          </div>
          <div>
            {content}
            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            qui illum, vel dicta iste quos! Ipsam, laboriosam itaque, voluptatum
            ab et similique quasi accusantium fugit facere dolorum qui impedit.
            Eveniet? */}
          </div>
        </div>
      </CardBox>
      {/* 답변 거절 했을 시 화면 */}
      <CardBox>
        <img src={Profile} alt="프로필 사진" />
        <div>
          <div className="profile__wrapper">
            <p>{name}</p>
            <p>{date}</p>
          </div>
          <RejectedAnswer>답변 거절</RejectedAnswer>
        </div>
      </CardBox>
    </>
  );
}
