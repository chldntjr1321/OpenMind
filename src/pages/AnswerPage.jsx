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
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  max-width: 716px;
  width: 100%;
  margin: 189px auto 140px auto;
  border: 1px solid #c7bbb5;
  border-radius: 16px;
  & > p {
    text-align: center;
  }
`;
const Card = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
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
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
const TextArea = styled.div`
  background-color: peru;
  height: 186px;
  padding: 16px;
  overflow-y: auto;
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
              <TextArea>답변 입력란</TextArea>
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
