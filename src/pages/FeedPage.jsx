import styled, { createGlobalStyle } from 'styled-components';
import BannerImg from '../assets/banner.svg';
import ProfileImg from '../assets/profile.svg';
import LogoImg from '../assets/logo.svg';
import CopyLinkIcon from '../assets/link.svg';
import KaKaoIcon from '../assets/kakao.svg';
import FacebookIcon from '../assets/facebook.svg';
import MessageIcon from '../assets/message.svg';
import EmptyIcon from '../assets/empty.svg';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Actor','Pretendard', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
  background-color: #F9F9F9;
}`;

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
`;
const IconBtn = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
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
  height: 330px;
  margin-top: 189px;

  div {
    width: 207px;
    height: 25px;
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
  }
  p {
    color: #542f1a;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
  }
  img {
    width: 150px;
    margin-top: 70px;
    align-self: top;
  }
  div .message__icon {
    width: 24px;
    margin-top: 0;
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
          <div>
            <img
              src={MessageIcon}
              className="message__icon"
              alt="메세지 아이콘"
            />
            <p>아직 질문이 없습니다</p>
          </div>
          <img src={EmptyIcon} alt="빈 서랍장 아이콘" />
        </QuestionBox>
        <PostBtn>질문 작성하기</PostBtn>
      </Wrapper>
    </>
  );
}

export default FeedPage;
