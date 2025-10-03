import styled from 'styled-components';
import ProfileImg from '../assets/profile.svg';
import ShareURLIcon from '../assets/link.svg';
import ShareKakaoIcon from '../assets/kakao.svg';
import ShareFacebookIcon from '../assets/facebook.svg';

const Banner = styled.div`
  background-color: skyblue;
  width: 100%;
  height: 234px;
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
`;
const Logo = styled.div`
  background-color: pink;
  width: 170px;
  height: 67px;
  @media (max-width: 375px) {
    width: 124px;
    height: 49px;
  }
`;
const ProfileBox = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  & img {
    width: 136px;
  }
  @media (max-width: 375px) {
    & img {
      width: 104px;
    }
  }
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  & img {
    width: 40px;
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
const Card = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  @media (max-width: 375px) {
    padding: 24px;
    gap: 24px;
  }
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  & div {
    background-color: yellow;
  }
`;
const Question = styled.div`
  background-color: mediumaquamarine;
`;
const AnswerBox = styled.div`
  background-color: lavender;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  & img {
    width: 48px;
  }
  @media (max-width: 375px) {
    & img {
      width: 32px;
    }
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
const TextArea = styled.div`
  background-color: peru;
  min-height: 186px;

  word-break: break-all;
`;
const AnswerEndBtn = styled.div`
  background-color: lightskyblue;
  width: 100%;
  padding: 12px 24px;
  text-align: center;
`;
const ReactionBtns = styled.div`
  background-color: palevioletred;
  display: flex;
  gap: 32px;
  padding-top: 24px;
`;
const DeleteAllBtn = styled.div`
  background-color: burlywood;
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

export default function AnswerPage() {
  return (
    <>
      <Banner>
        배너
        <HeaderBox>
          <Logo>로고</Logo>
          <ProfileBox>
            <img src={ProfileImg} alt="프로필 이미지" />
            <p>닉네임 기입 공간</p>
            <IconBox>
              <img src={ShareURLIcon} alt="링크URL 공유 아이콘" />
              <img src={ShareKakaoIcon} alt="카카오톡 공유 아이콘" />
              <img src={ShareFacebookIcon} alt="페이스북 공유 아이콘" />
            </IconBox>
          </ProfileBox>
        </HeaderBox>
      </Banner>
      <CardBox>
        <p>질문 개수 표시 부분</p>
        <Card>
          <CardHeader>
            <div>답변 여부</div>
            <div>타코 메뉴</div>
          </CardHeader>
          <Question>
            <div>질문 생성 일자</div>
            <div>질문 내용</div>
          </Question>
          <AnswerBox>
            <img src={ProfileImg} alt="프로필 이미지" />
            <Contents>
              <div>유저 이름</div>
              <TextArea>
                그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
                찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를
                청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에
                피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은
                방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며,
                말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에
                있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의
                것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서
                끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한
                영원히 듣기만 운다.
              </TextArea>
              <AnswerEndBtn>답변 완료 버튼</AnswerEndBtn>
            </Contents>
          </AnswerBox>
          <ReactionBtns>
            <div>좋아요 버튼</div>
            <div>싫어요 버튼</div>
          </ReactionBtns>
        </Card>
        <DeleteAllBtn>삭제하기</DeleteAllBtn>
      </CardBox>
    </>
  );
}
