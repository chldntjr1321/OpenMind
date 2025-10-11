import styled from 'styled-components';
import MessageIcon from '../../assets/messages.svg';
import CloseIcon from '../../assets/close.svg';
import ProfileImg from '../../assets/profile.svg';
import InputTextArea from '../InputTextArea/InputTextArea';
import FilledBtn from '../ButtonBox/FilledBtn';
import { useRef, useState, useEffect } from 'react';

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  max-width: 612px;
  min-width: 327px;
  width: 100%;
  border-radius: 24px;
  padding: 40px 40px 70px 40px;
  box-shadow: 0 16px 20px 0 rgba(48, 48, 48, 0.62);
  z-index: 9999;
  img {
    width: 28px;
  }
  @media (max-width: 375px) {
    min-height: 568px;
    width: auto;
    left: 25px;
    right: 25px;
    transform: translateY(-50%);
    padding: 24px;
  }
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
  }
  & img {
    width: 28px;
  }
  & img:last-child {
    cursor: pointer;
  }
  @media (max-width: 375px) {
    & > div {
      font-size: 20px;
      line-height: 25px;
    }
    & img:last-child {
      width: 22px;
    }
  }
`;
const RecieveUser = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
  p:last-child {
    font-size: 16px;
    line-height: 22px;
  }
  img {
    width: 28px;
  }
`;
const ContentBox = styled.div``;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 9998;
`;

export default function Modal({ onClose }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const textareaRef = useRef(null);

  useEffect(() => {
    if (inputValue.trim() === '') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div>
            <img src={MessageIcon} alt="말풍선 아이콘" />
            <p>질문을 작성하세요</p>
          </div>
          <img src={CloseIcon} alt="닫기 아이콘" onClick={onClose} />
        </ModalHeader>
        <RecieveUser>
          <p>To.</p>
          <img src={ProfileImg} alt="프로필 이미지" />
          <p>아초는 고양이</p>
        </RecieveUser>
        <ContentBox>
          <InputTextArea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <FilledBtn btnText="질문 보내기" isDisabled={isDisabled} />
        </ContentBox>
      </ModalBox>
    </Overlay>
  );
}
