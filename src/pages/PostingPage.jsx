import styled from "styled-components";

const PostingHeader = styled.div`
  background-color: #f9f9f9;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 369px;
  margin: 0 auto;
  @media (max-width: 375px) {
    min-height: 299px;
  }
`;
const PostingHeaderImage = styled.div`
  background-color: #999999;
  width: 100%;
  height: 234px;
  object-fit: cover;
  object-position: center;
  `;
const ProfileArea = styled.div`
  background-color: #666666;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50px;
  min-height: auto;
  gap: 12px;
  @media (max-width: 375px) {
    top: 40px;
  }
`;
const PostingLogo = styled.div`
  background-color: #777777;
  position: relative;
  width: 170px;
  height: 67px;
  @media (max-width: 375px) {
    width: 124px;
    height: 49px;
  }
`;
const ProfileImg = styled.div`
  background-color: #888888;
  width: 136px;
  height: 136px;
  @media (max-width: 375px) {
    width: 104px;
    height: 104px;
  }
`;
const ProfileUsername = styled.div`
  background-color: #888888;
  width: auto;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0px;
  @media (max-width: 375px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
const ShareIconArea = styled.div`
  background-color: #888888;
  display: flex;
  position: relative;
  flex-direction: row;
  width: 144px;
  height: 40px;
  gap: 0px 12px;
`;
const PostingBody = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 54px 24px 166px;
`;
const PostingArea = styled.div`
  background-color: #f5f1ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 716px;
  height: auto;
  border: 1px solid #c7bbb5;
  border-radius: 16px;
  padding: 16px;
  gap: 16px;
  .questionCount {
    color: #542f1a;
    font-family: Actor;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0px;
    @media (max-width: 375px) {
      font-family: Actor;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
const FeedCard = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 684px;
  height: auto;
  border-radius: 16px;
  padding: 32px;
  gap: 32px;
  @media (max-width: 375px) {
    max-width: 295px;
    padding: 24px 16px;
    gap: 24px;
  }
`;
const FeedBadge = styled.div`
  background-color: #999999;
  width: 100%;
  height: 26px;
  @media (max-width: 375px) {
    width: 100%;
  }
`;
const QuestionFeed = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: column;
  width:100%;
  height: auto;
  .question {
    font-family: Actor;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0px;
    @media (max-width: 375px) {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;
const UpdatedTime = styled.div`
  color: #818181;
  display: inline-flex;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
const AnswerFeed = styled.div`
  background-color: #999999;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 4px 12px;
`;
const AnswerLeft = styled.div`
  flex-shrink: 0;
`;
const AnswerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;
const AnswerProfileImg = styled.div`
  background-color: #666666;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
`;
const AnswerUsername = styled.div`
  background-color: orange;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 12px;
  & {
    font-family: Actor;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0px;
    @media (max-width: 375px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
const AnswerContents = styled.div`
  background-color: orange;
  width: 100%;
  height: auto;
  & {
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0px;
  }
  word-break: break-word;
`;
const AnswerReaction = styled.div`
  background-color: #999999;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 43px;
`;
const FloatingBtn = styled.div`
  width: 208px;
  height: 54px;
  position: fixed;
  bottom: 40px;
`;

function PostingPage() {
  return (
    <>
      <PostingHeader>
        <PostingHeaderImage />
        <ProfileArea>
          <PostingLogo />
          <ProfileImg />
          <ProfileUsername>
            아초는고양이
          </ProfileUsername>
          <ShareIconArea />
        </ProfileArea>
      </PostingHeader>
      <PostingBody>
        <PostingArea>
          <div className="questionCount">3개의 질문이 있습니다</div>
          <FeedCard>
            <FeedBadge />
            <QuestionFeed>
              <div>
                <UpdatedTime>질문 · 2주전</UpdatedTime>
              </div>
              <div className="question">좋아하는 동물은?</div>
            </QuestionFeed>
            <AnswerFeed>
              <AnswerLeft>
                <AnswerProfileImg />
              </AnswerLeft>
              <AnswerRight>
                <AnswerUsername>
                  <span>아초는고양이</span>
                  <div>
                    <UpdatedTime>2주전</UpdatedTime>
                  </div>
                </AnswerUsername>
                <AnswerContents>
                  <div>그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.</div>
                </AnswerContents>
              </AnswerRight>
            </AnswerFeed>
            <AnswerReaction />
          </FeedCard>
        </PostingArea>
        <FloatingBtn />
      </PostingBody>
    </>
  );
}

export default PostingPage;