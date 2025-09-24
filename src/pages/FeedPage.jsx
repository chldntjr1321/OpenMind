import styled, { createGlobalStyle } from 'styled-components';
import BannerImg from '../assets/banner.png';
import ProfileImg from '../assets/profile.png';
import LogoImg from '../assets/logo.png';
import CopyLinkIcon from '../assets/linkcopy.png';
import KaKaoIcon from '../assets/kakaoicon.png';
import FacebookIcon from '../assets/facebookicon.png';

const GlobalStyle = createGlobalStyle`
  * {
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
      </Wrapper>
    </>
  );
}

export default FeedPage;
