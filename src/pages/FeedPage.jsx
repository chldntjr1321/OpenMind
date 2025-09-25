import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import BannerImg from '../assets/banner.svg';
import ProfileImg from '../assets/profile.svg';
import LogoImg from '../assets/logo.svg';
import CopyLinkIcon from '../assets/link.svg';
import KaKaoIcon from '../assets/kakao.svg';
import FacebookIcon from '../assets/facebook.svg';
import MessageIcon from '../assets/message.svg';
import EmptyIcon from '../assets/empty.svg';
import LikeIcon from '../assets/thumbs-up.svg';
import DislikeIcon from '../assets/thumbs-down.svg';

const GlobalStyle = createGlobalStyle`
  * {
    html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
      box-sizing: border-box;

      *.hidden {
    display: none;
    }
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }

  body {
      line-height: 1;
      font-family: 'Actor','Pretendard', sans-serif;
      background-color: #F9F9F9;
  }

  ol, ul {
      list-style: none;
  }

  blockquote, q {
      quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Banner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 300px;
  background-image: url(${BannerImg});
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  position: absolute;
  z-index: 2;
  width: 170px;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
`;

const Profile = styled.img`
  width: 136px;
  height: 136px;
`;
const Nickname = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  margin-top: 12px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
`;
const IconBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  & img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;
const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f1ee;
  border: 1px solid #e4d5c9;
  border-radius: 16px;
  width: 716px;
  height: fit-content;
  margin-top: 189px;
  margin-bottom: 136px;

  .question__status {
    height: 25px;
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 16px 0;
  }
  p {
    color: #542f1a;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
  }
  & img {
    width: 150px;
    margin-top: 54px;
    margin-bottom: 65px;
  }
  & .message__icon {
    width: 24px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 684px;
  min-height: 234px;
  margin-bottom: 20px;
  padding: 32px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;
const AnswerEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: #ffffff;
  border: 1px solid #542f1a;
  border-radius: 10px;
  padding: 4px 12px;
  color: #542f1a;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
const AnswerYet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 26px;
  background-color: #ffffff;
  border: 1px solid #818181;
  border-radius: 10px;
  padding: 4px 12px;
  color: #818181;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
const Question = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 620px;
  height: fit-content;
  gap: 4px;

  .question__date {
    color: #818181;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
  .question__text {
    color: #000000;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;
const ReactionBtns = styled.div`
  display: flex;
  gap: 32px;
  border-top: 1px solid #cfcfcf;
  margin-top: 32px;
  padding-top: 25px;

  div {
    display: flex;
    justify-content: center;
    gap: 6px;
  }
  p {
    color: #818181;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
  }

  & img {
    width: 16px;
    margin-top: 0;
    margin-bottom: 0;
    cursor: pointer;
  }
`;

const PostBtn = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 208px;
  height: 54px;
  background-color: #542f1a;
  border-radius: 27px;
  box-shadow: 0px 4px 4px 0px #00000040;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
`;

function FeedPage() {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleOnClick = () => {
    setIsEmpty(!isEmpty);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Banner>
          <Logo src={LogoImg} alt="로고 이미지" />
          <ProfileWrapper>
            <Profile src={ProfileImg} alt="프로필 이미지" />
            <Nickname>아초는고양이</Nickname>
            <IconBox>
              <IconBtn>
                <img src={CopyLinkIcon} alt="링크 복사 아이콘" />
              </IconBtn>
              <IconBtn>
                <img src={KaKaoIcon} alt="카카오톡 링크 아이콘" />
              </IconBtn>
              <IconBtn>
                <img src={FacebookIcon} alt="페이스북 링크 아이콘" />
              </IconBtn>
            </IconBox>
          </ProfileWrapper>
        </Banner>
        <QuestionBox>
          <div className="question__status">
            <img
              src={MessageIcon}
              className="message__icon"
              alt="메세지 아이콘"
            />
            {isEmpty ? (
              <p>아직 질문이 없습니다</p>
            ) : (
              <p>3개의 질문이 있습니다</p>
            )}
          </div>
          <img
            src={EmptyIcon}
            alt="빈 서랍장 아이콘"
            className={isEmpty ? null : 'hidden'}
          />
          <QuestionCards isEmpty={isEmpty} />
          <QuestionCards isEmpty={isEmpty} />
          <QuestionCards isEmpty={isEmpty} />
        </QuestionBox>
        <PostBtn onClick={handleOnClick}>질문 작성하기</PostBtn>
      </Wrapper>
    </>
  );
}

export default FeedPage;

function QuestionCards({ isEmpty }) {
  const [isAnswered, setIsAnswered] = useState(false);
  return (
    <div className={isEmpty ? 'hidden' : null}>
      <Card>
        {isAnswered ? (
          <AnswerEnd>답변 완료</AnswerEnd>
        ) : (
          <AnswerYet>미답변</AnswerYet>
        )}
        <Question>
          <p className="question__date">질문 · 2주전</p>
          <p className="question__text">좋아하는 동물은??</p>
        </Question>
        <ReactionBtns>
          <div>
            <img src={LikeIcon} alt="좋아요 아이콘" />
            <p>좋아요</p>
          </div>
          <div>
            <img src={DislikeIcon} alt="싫어요 아이콘" />
            <p>싫어요</p>
          </div>
        </ReactionBtns>
      </Card>
    </div>
  );
}
