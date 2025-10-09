import styled from 'styled-components';
import BannerImg from '../assets/banner.svg';
import Logo from '../assets/logo.svg';
import ProfileImg from '../assets/profile.svg';
import ShareURLIcon from '../assets/link.svg';
import ShareKakaoIcon from '../assets/kakao.svg';
import ShareFacebookIcon from '../assets/facebook.svg';
import MessageIcon from '../assets/message-brown.svg';
import MoreIcon from '../assets/more.svg';
import Badge from '../components/Badge/Badge';
import QuestionFeedCard from '../components/QuestionFeedCard/QuestionFeedCard';
import InputTextArea from '../components/InputTextArea/InputTextArea';
import FilledBtn from '../components/ButtonBox/FilledBtn';
import ReactionBtns from '../components/Reaction/Reaction';
import { FloatingButton } from '../components/FloatingBtn/FloatingBtn';
import Edit from '../components/Edit/Edit';
import Modal from '../components/Modal/Modal';
import ModalPortal from '../components/Portal';
import { useEffect, useState } from 'react';

const Banner = styled.div`
  width: 100%;
  height: 234px;
  background-image: url(${BannerImg});
  background-size: cover;
  background-position: center 70%;
  position: relative;
`;
const HeaderBox = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  z-index: 2;
  & .logo {
    width: 170px;
    height: 67px;
    cursor: pointer;
    @media (max-width: 375px) {
      width: 124px;
      height: 49px;
    }
  }
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  & img {
    width: 136px;
  }
  & p {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
  }
  @media (max-width: 375px) {
    & img {
      width: 104px;
    }
    & p {
      font-size: 24px;
      line-height: 30px;
    }
  }
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  & img {
    width: 40px;
    cursor: pointer;
  }
`;
const CardBox = styled.div`
  background-color: #f5f1ee;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  max-width: 716px;
  margin: 189px auto 140px auto;
  border: 1px solid #c7bbb5;
  border-radius: 16px;
  & > p {
    text-align: center;
  }
  @media (max-width: 375px) {
    margin: 176px 24px 168px 24px;
  }
`;
const CardBoxHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  & img {
    width: 24px;
  }
  & p {
    color: #542f1a;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  border-radius: 16px;
  @media (max-width: 375px) {
    padding: 24px;
    gap: 24px;
  }
`;
const CardHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  & img {
    cursor: pointer;
  }
`;
const AnswerBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  & img {
    width: 48px;
  }
  & p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
  @media (max-width: 375px) {
    & img {
      width: 32px;
    }
    & p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  & p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;
const TextArea = styled.div`
  min-height: 186px;
  word-break: break-all;
`;
const AnswerEndBtn = styled.div`
  width: 100%;
  padding: 12px 24px;
  text-align: center;
`;

const DeleteAllBtn = styled(FloatingButton)`
  position: absolute;
  top: -9px;
  right: 0;
  transform: translateY(-100%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 35px;
  padding: 12px 24px;
  border-radius: 200px;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  @media (max-width: 375px) {
    width: 70px;
    height: 25px;
    font-size: 10px;
    white-space: nowrap;
  }
`;
const ModalOpenBtn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #542f1a;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export default function AnswerPage({ name, questionCount }) {
  const [inputValue, setInputValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsDisabled(inputValue.trim() === '');
  }, [inputValue]);

  return (
    <>
      <Banner>
        <HeaderBox>
          <img src={Logo} alt="로고 이미지" className="logo" />
          <ProfileBox>
            <img src={ProfileImg} alt="프로필 이미지" />
            <p>{name}</p>
            <IconBox>
              <img src={ShareURLIcon} alt="링크URL 공유 아이콘" />
              <img src={ShareKakaoIcon} alt="카카오톡 공유 아이콘" />
              <img src={ShareFacebookIcon} alt="페이스북 공유 아이콘" />
            </IconBox>
          </ProfileBox>
        </HeaderBox>
      </Banner>
      <CardBox>
        <CardBoxHeader>
          <img src={MessageIcon} alt="메시지 아이콘" />
          <p>{questionCount}개의 질문이 있습니다</p>
        </CardBoxHeader>
        <Card>
          <CardHeader>
            <Badge />
            <img
              src={MoreIcon}
              alt="더보기 버튼"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
            {isOpen ? <Edit /> : null}
          </CardHeader>
          <QuestionFeedCard />
          <AnswerBox>
            <img src={ProfileImg} alt="프로필 이미지" />
            <Contents>
              <div></div>
              <InputTextArea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <FilledBtn btnText={'답변 완료'} isDisabled={isDisabled} />
            </Contents>
          </AnswerBox>
          <ReactionBtns />
        </Card>
        <DeleteAllBtn>삭제하기</DeleteAllBtn>
      </CardBox>

      {/* 포탈 */}
      <ModalOpenBtn onClick={() => setIsModalOpen(true)}>
        모달 열기
      </ModalOpenBtn>
      <ModalPortal>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      </ModalPortal>
    </>
  );
}
