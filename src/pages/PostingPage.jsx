import styled from 'styled-components';
import headerImg from '../assets/banner.svg';
import logoImg from '../assets/logo.svg';
import profileImg from '../assets/profile.svg';
import linkIcon from '../assets/link.svg';
import facebookIcon from '../assets/facebook.svg';
import kakaoIcon from '../assets/kakao.svg';
import messageIcon from '../assets/message-brown.svg';
import emptyImg from '../assets/empty.svg';
import Badge from '../components/Badge/Badge';
import QuestionFeedCard from '../components/QuestionFeedCard/QuestionFeedCard';
import Reaction from '../components/Reaction/Reaction';
import Toast from '../components/Toast/Toast';
import { FloatingButton } from '../components/FloatingBtn/FloatingBtn';
import Modal from '../components/Modal/Modal';
import ModalPortal from '../components/Portal';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostingHeader = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 369px;
  margin: 0 auto;
  @media (max-width: 375px) {
    height: 299px;
  }
`;
const PostingHeaderImage = styled.img`
  width: 100%;
  height: 234px;
  object-fit: cover;
  object-position: center;
  @media (max-width: 375px) {
    height: 177px;
  }
  `;
const ProfileArea = styled.div`
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
  position: relative;
  width: 170px;
  height: 67px;
  @media (max-width: 375px) {
    width: 124px;
    height: 49px;
  }
  & > img {
    width: 100%;
    height: 100%;
  }
`;
const ProfileImg = styled.div`
  width: 136px;
  height: 136px;
  @media (max-width: 375px) {
    width: 104px;
    height: 104px;
  }
  & > img {
    width: 100%;
    height: 100%;
  }
`;
const ProfileUsername = styled.div`
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
  display: flex;
  position: relative;
  flex-direction: row;
  width: 144px;
  height: 40px;
  gap: 0px 12px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
const PostingBody = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 54px 24px 166px;
`;
const EmptyFeed = styled.div`     // 피드(질문)가 없는 경우
  background-color: #f5f1ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 716px;
  height: 330px;
  border: 1px solid #e4d5c9;
  border-radius: 16px;
  padding: 16px 24px;
  gap: 8px;
  & > span > img {
    width: 24px;
    height: 24px;
    @media (max-width: 375px) {
    width: 22px;
    height: 22px;
    }
  }
  .emptyFeedText {
    color: #542f1a;
    display: inline-flex;
    font-family: Actor;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0px;
    gap: 8px;
    @media (max-width: 375px) {
      font-size: 18px;
      line-height: 24px;
  }
}
@media (max-width: 375px) {
  padding: 16px 24px;
  gap: 8px;
}
`;
const EmptyFeedImage = styled.div`
  position: absolute;
  flex-direction: column;
  top: calc(16px + 50%);
  transform: translateY(-50%);
  width: 150px;
  height: 154px;
  @media (max-width: 375px) {
    top: 50%;
    width: 114px;
    height: 118px;
  }
  & > img {
    width: 100%;
    height: 100%;
  }
`;
const PostingArea = styled.div`   // 피드(질문)가 1개 이상인 경우
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
  & > span > img {
    width: 24px;
    height: 24px;
    @media (max-width: 375px) {
    width: 22px;
    height: 22px;
    }
  }
  .questionCountText {
    color: #542f1a;
    display: inline-flex;
    font-family: Actor;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0px;
    gap: 8px;
    @media (max-width: 375px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
const FeedCard = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 684px;
  height: auto;
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
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
  width: 100%;
  height: 26px;
`;
const UpdatedTime = styled.div`
  color: #818181;
  display: inline-flex;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
`;
const AnswerFeed = styled.div`
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
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
const AnswerUsername = styled.div`
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
const AnswerRejected = styled.div`
  width: 100%;
  height: auto;
  & {
    color: #b93333;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0px;
  }
`
const FloatingBtn = styled(FloatingButton)`
  font-family: Actor;
`;

function PostingPage() {
  const [user, setUser] = useState(null);
  const [question, setQuestion] = useState([]);
  const [questionInput, setQuestionInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 375);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const userResponse = await fetch(
          `https://openmind-api.vercel.app/19-1/subjects/${id}/`
        );

        if (!userResponse.ok) {
          if (userResponse.status === 404) {
            console.error('해당 사용자를 찾을 수 없습니다');
          }
          throw new Error(`HTTP ${userResponse.status}`);
        }

        const user = await userResponse.json();
        setUser(user);

        await fetchQuestionList();
        setLoading(false);

      } catch (error) {
        console.error('데이터를 불러올 수 없습니다:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  async function fetchQuestionList() {
    try {
      const questionResponse = await fetch(
        `https://openmind-api.vercel.app/19-1/subjects/${id}/questions/`
      );
      const question = await questionResponse.json();
      setQuestion(question.results || question);
    } catch (error) {
      console.error('질문을 불러올 수 없습니다:', error);
    }
  }

  async function handleSubmit() {
    try {
      await fetch(
        `https://openmind-api.vercel.app/19-1/subjects/${id}/questions/`,
        {
          method: 'POST',
          body: JSON.stringify({ content: questionInput }),
          headers: { 'Content-Type': 'application/json' }
        }
      );

      await fetchQuestionList();

      setQuestionInput('');
      setIsModalOpen(false);
    } catch (error) {
      console.error('질문 작성에 실패하였습니다:', error);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 375) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!user) {
    return <div>데이터를 불러올 수 없습니다</div>;
  }

  return (
    <>
      <PostingHeader>
        <PostingHeaderImage src={headerImg} />
        <ProfileArea>
          <PostingLogo>
            <img src={logoImg} alt="로고 이미지" />
          </PostingLogo>
          <ProfileImg>
            <img src={user.imageSource} alt="프로필 이미지" />
          </ProfileImg>
          <ProfileUsername>
            {user.name}
          </ProfileUsername>
          <ShareIconArea>
            <img src={linkIcon} alt="링크 URL 공유 아이콘" />
            <img src={facebookIcon} alt="페이스북 공유 아이콘" />
            <img src={kakaoIcon} alt="카카오톡 공유 아이콘" />
          </ShareIconArea>
        </ProfileArea>
      </PostingHeader>
      <PostingBody>
        {user.questionCount === 0 ? (
          <EmptyFeed>
            <span className="emptyFeedText">
              <img src={messageIcon} alt="메시지 아이콘" />
              아직 질문이 없습니다
            </span>
            <EmptyFeedImage>
              <img src={emptyImg} alt="빈 상자 이미지" />
            </EmptyFeedImage>
          </EmptyFeed>
        ) : (
          <PostingArea>
            <span className="questionCountText">
              <img src={messageIcon} alt="메시지 아이콘" />
              {user.questionCount}개의 질문이 있습니다
            </span>
            {question.map(q => (
              <FeedCard key={q.id}>
                <FeedBadge>
                  <Badge />
                </FeedBadge>
                <QuestionFeedCard question={q} createdAt={q.createdAt} />
                {q.answer && (
                  q.answer.isRejected ? (
                    <AnswerFeed>
                      <AnswerLeft>
                        <AnswerProfileImg>
                          <img src={user.imageSource} alt="프로필 이미지" />
                        </AnswerProfileImg>
                      </AnswerLeft>
                      <AnswerRight>
                        <AnswerUsername>
                          <span>{user.name}</span>
                          <div>
                            <UpdatedTime>{q.answer.createdAt}</UpdatedTime>
                          </div>
                        </AnswerUsername>
                        <AnswerRejected>
                          <span>답변 거절</span>
                        </AnswerRejected>
                      </AnswerRight>
                    </AnswerFeed>
                  ) : (
                    <AnswerFeed>
                      <AnswerLeft>
                        <AnswerProfileImg>
                          <img src={user.imageSource} alt="프로필 이미지" />
                        </AnswerProfileImg>
                      </AnswerLeft>
                      <AnswerRight>
                        <AnswerUsername>
                          <span>{user.name}</span>
                          <div>
                            <UpdatedTime>{q.answer.createdAt}</UpdatedTime>
                          </div>
                        </AnswerUsername>
                        <AnswerContents>
                          <div>{q.answer.content}</div>
                        </AnswerContents>
                      </AnswerRight>
                    </AnswerFeed>
                  )
                )}
                <Reaction />
              </FeedCard>
            ))}
          </PostingArea>
        )}

        <FloatingBtn onClick={() => setIsModalOpen(true)}>
          {isMobile ? "질문 작성" : "질문 작성하기"}
        </FloatingBtn>
        {isModalOpen && (
          <ModalPortal>
            <Modal
              onClose={() => setIsModalOpen(false)}
              questionInput={questionInput}
              setQuestionInput={setQuestionInput}
              onSubmit={handleSubmit}
            />
          </ModalPortal>
        )}
        <Toast />
      </PostingBody>
    </>
  );
}

export default PostingPage;