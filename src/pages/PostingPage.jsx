import styled from 'styled-components';
import headerImg from '../assets/banner.svg';
import logoImg from '../assets/logo.svg';
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
import { useParams, Link } from 'react-router-dom';
import { useLoading } from '../components/Loading/Loading';

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
  & img {
    width: 100%;
    height: 100%;
  }
  & > a {
    cursor: pointer;
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
    cursor: pointer;
  }
`;
const PostingBody = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 54px 24px 166px;
`;
const EmptyFeed = styled.div`
  // 피드(질문)가 없는 경우
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
const PostingArea = styled.div`
  // 피드(질문)가 1개 이상인 경우
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
`;
const FloatingBtn = styled(FloatingButton)`
  font-family: Actor;
`;

function PostingPage() {
  const [user, setUser] = useState(null);
  const [question, setQuestion] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 375);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const { isLoading, setIsLoading } = useLoading(); // 로딩 상태를 제어하는 함수

  const { id } = useParams();
  const currentCopyUrl = window.location.href;

  // 카카오 SDK 초기화
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_JS_KEY);
      console.log('Kakao SDK 초기화 완료');
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true); // 로딩 시작
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
      } catch (error) {
        console.error('데이터를 불러올 수 없습니다:', error);
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 375) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  async function fetchQuestionList() {
    if (isLoading) return; // 로딩 중이면 함수 종료
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

  async function handleSubmit(content) {
    try {
      setIsLoading(true); // 로딩 시작
      await fetch(
        `https://openmind-api.vercel.app/19-1/subjects/${id}/questions/`,
        {
          method: 'POST',
          body: JSON.stringify({ content: content }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      await fetchQuestionList();

      setIsModalOpen(false);
    } catch (error) {
      console.error('질문 작성에 실패하였습니다:', error);
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  }

  // URL 공유하기
  async function handleCopyUrl() {
    try {
      await navigator.clipboard.writeText(currentCopyUrl);
      setMessage('URL이 복사되었습니다');
    } catch {
      setMessage('복사에 실패하였습니다');
    } finally {
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }
  }

  // 카카오톡 공유하기
  function handleShareKakao() {
    if (!window.Kakao) {
      alert('카카오톡 공유 기능을 불러오는 중입니다.');
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${user.name}님에게 질문하기`,
        description: '궁금한 것을 질문해보세요!',
        imageUrl: user.imageSource,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '질문하러 가기',
          link: {
            mobileWebUrl: currentCopyUrl,
            webUrl: currentCopyUrl,
          },
        },
      ],
    });
  }

  function handleShareFacebook() {
    const shareUrl =
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentCopyUrl)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
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
            <Link to="/">
              <img src={logoImg} alt="로고 이미지" />
            </Link>
          </PostingLogo>
          <ProfileImg>
            <img src={user.imageSource} alt="프로필 이미지" />
          </ProfileImg>
          <ProfileUsername>{user.name}</ProfileUsername>
          <ShareIconArea>
            <img src={linkIcon} onClick={handleCopyUrl} alt="링크 URL 공유 아이콘" />
            <img src={facebookIcon} onClick={handleShareFacebook} alt="페이스북 공유 아이콘" />
            <img src={kakaoIcon} onClick={handleShareKakao} alt="카카오톡 공유 아이콘" />
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
            {question.map((q) => (
              <FeedCard key={q.id}>
                <FeedBadge>
                  <Badge answer={q.answer} />
                </FeedBadge>
                <QuestionFeedCard question={q} createdAt={q.createdAt} />
                {q.answer &&
                  (q.answer.isRejected ? (
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
                  ))}
                <Reaction />
              </FeedCard>
            ))}
          </PostingArea>
        )}

        <FloatingBtn onClick={() => setIsModalOpen(true)}>
          {isMobile ? '질문 작성' : '질문 작성하기'}
        </FloatingBtn>
        {isModalOpen && (
          <ModalPortal>
            <Modal
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleSubmit}
              userName={user.name}
              userImage={user.imageSource}
            />
          </ModalPortal>
        )}
        <Toast message={message} visible={visible} />
      </PostingBody>
    </>
  );
}

export default PostingPage;
