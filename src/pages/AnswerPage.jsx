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
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
  & button {
    background: none;
    border: none;
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

export default function AnswerPage() {
  const TEAM_ID = '19-1';
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [openCardId, setOpenCardId] = useState(null);
  const [editingCards, setEditingCards] = useState({});
  const [deletingCards, setDeletingCards] = useState({});
  // state에 함수를 넣으면 복잡한 계산을 매 렌더링마다 하지 않아도 된다고 합니다~!
  const [clickedLikes, setClickedLikes] = useState(() => {
    const likes = localStorage.getItem('clickedLikes');
    return likes ? JSON.parse(likes) : [];
  });
  const [clickedDislikes, setClickedDislikes] = useState(() => {
    const dislikes = localStorage.getItem('clickedDislikes');
    return dislikes ? JSON.parse(dislikes) : [];
  });
  const { id } = useParams();

  useEffect(() => {
    async function fetchUserData() {
      if (!id) return;
      try {
        const [userRes, questionsRes] = await Promise.all([
          fetch(`https://openmind-api.vercel.app/${TEAM_ID}/subjects/${id}/`),
          fetch(
            `https://openmind-api.vercel.app/${TEAM_ID}/subjects/${id}/questions/`
          ),
        ]);

        if (!userRes.ok || !questionsRes.ok) {
          throw new Error('서버 응답 실패');
        }
        const userData = await userRes.json();
        const questionsData = await questionsRes.json();
        setUser(userData);
        setQuestions(questionsData.results);
      } catch (err) {
        console.error('데이터를 불러오지 못했습니다.', err);
      }
    }
    fetchUserData();
  }, [id]);

  const handleInputChange = (id, value) => {
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

  // 수정 버튼 클릭 시 동작 함수
  const handleEditClick = (id) => {
    const question = questions.find((q) => q.id === id);
    if (!question) return;

    setEditingCards({ [id]: true });
    setInputValues((prev) => ({
      ...prev,
      [id]: question.answer?.content ?? '',
    }));
  };
  const answerContent = (question) => {
    const currentInput = inputValues[question.id] || '';
    const isDisabled = currentInput.trim().length === 0;

    if (editingCards[question.id]) {
      return (
        <>
          <InputTextArea
            value={inputValues[question.id] || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
          <FilledBtn
            btnText={'수정 완료'}
            isDisabled={isDisabled}
            onClick={() => {
              handleUpdateAnswer(question.id);
              setOpenCardId(null);
            }}
          />
        </>
      );
    }
    if (question.answer) {
      return <>{question.answer.content}</>;
    } else {
      return (
        <>
          <InputTextArea
            value={currentInput}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
          <FilledBtn
            btnText="답변 완료"
            isDisabled={isDisabled}
            onClick={() => handleCreateAnswer(question.id)}
          />
        </>
      );
    }
  };

  // 답변 생성 함수
  const handleCreateAnswer = async (id) => {
    const question = questions.find((q) => q.id === id);
    if (!question) {
      console.error('해당 질문을 찾을 수 없습니다.');
      return;
    }
    const questionId = question.id;
    const content = (inputValues[id] || '').trim();
    if (content.length === 0) {
      console.error('답변 내용이 비어 있습니다.');
      return;
    }
    try {
      const response = await fetch(
        `https://openmind-api.vercel.app/${TEAM_ID}/questions/${questionId}/answers/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: content,
            isRejected: false,
          }),
        }
      );
      if (!response.ok) throw new Error('답변 생성 실패');

      const updatedAnswer = await response.json();

      setQuestions((prev) =>
        prev.map((q) => (q.id === id ? { ...q, answer: updatedAnswer } : q))
      );
      setEditingCards((prev) => ({ ...prev, [id]: false }));
      setInputValues((prev) => ({ ...prev, [id]: '' }));
    } catch (error) {
      console.error('에러가 발생했습니다.', error);
    }
  };
  const handleUpdateAnswer = async (id) => {
    const question = questions.find((q) => q.id === id);
    if (!question || !question.answer) {
      console.error('해당 질문이나 답변을 찾을 수 없습니다.');
      return;
    }
    const answerId = question.answer.id;
    try {
      const response = await fetch(
        `https://openmind-api.vercel.app/${TEAM_ID}/answers/${answerId}/`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: inputValues[id],
            isRejected: false,
          }),
        }
      );
      if (!response.ok) throw new Error('답변 수정 실패');

      const updatedAnswer = await response.json();

      setQuestions((prev) =>
        prev.map((q) => (q.id === id ? { ...q, answer: updatedAnswer } : q))
      );
      setEditingCards((prev) => ({ ...prev, [id]: false }));
    } catch (error) {
      console.error('에러가 발생했습니다.', error);
    }
  };

  // 개별 질문 삭제 함수
  const handleDeleteQuestion = async (id) => {
    const question = questions.find((q) => q.id === id);
    if (!question) {
      console.error('해당 질문을 찾을 수 없습니다.');
      return;
    }
    const questionId = question.id;

    try {
      const response = await fetch(
        `https://openmind-api.vercel.app/${TEAM_ID}/questions/${questionId}/`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) throw new Error('질문 삭제 실패');

      setQuestions((prev) => prev.filter((q) => q.id !== id));
      setEditingCards((prev) => ({ ...prev, [id]: false }));
    } catch (error) {
      console.error('에러가 발생했습니다.', error);
    }
  };

  // 전체 질문 삭제 함수
  const handleDeleteQuestionsAll = async () => {
    if (questions.length === 0) {
      console.error('질문이 없습니다!');
      return;
    }

    try {
      await Promise.all(
        questions.map((q) =>
          fetch(
            `https://openmind-api.vercel.app/${TEAM_ID}/questions/${q.id}/`,
            {
              method: 'DELETE',
            }
          )
        )
      );
      setQuestions([]); // 화면에서 질문들 모두 제거
    } catch (error) {
      console.error('전체 삭제 실패:', error);
    }
  };

  // 좋아요 기능 함수
  const handleLike = async (id) => {
    const question = questions.find((q) => q.id === id);
    if (!question) return;
    if (clickedDislikes.includes(id)) return; // 싫어요 누른 상태에서 좋아요 못누르게
    if (clickedLikes.includes(id)) return; // 이미 클릭한 경우 다시 클릭 안되게

    const questionId = question.id;

    try {
      const response = await fetch(
        `https://openmind-api.vercel.app/${TEAM_ID}/questions/${questionId}/reaction/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'like',
          }),
        }
      );
      if (!response.ok) throw new Error('좋아요 등록 실패');

      setQuestions((prev) =>
        prev.map((q) =>
          q.id === id
            ? {
                ...q,
                like: q.like + 1,
              }
            : q
        )
      );
      setClickedLikes((prev) => {
        if (!prev.includes(id)) {
          const updated = [...prev, id];
          localStorage.setItem('clickedLikes', JSON.stringify(updated));
          return updated;
        }
        return prev;
      });
    } catch (error) {
      console.error('에러가 발생했습니다.', error);
    }
  };

  // 싫어요 기능 함수
  const handleDislike = async (id) => {
    const question = questions.find((q) => q.id === id);
    if (!question) return;
    if (clickedLikes.includes(id)) return; // 좋아요 누른 상태에서 싫어요 못누르게
    if (clickedDislikes.includes(id)) return; // 이미 클릭한 경우 다시 클릭 안되게
    const questionId = question.id;

    try {
      const response = await fetch(
        `https://openmind-api.vercel.app/${TEAM_ID}/questions/${questionId}/reaction/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'dislike',
          }),
        }
      );
      if (!response.ok) throw new Error('싫어요 등록 실패');

      setQuestions((prev) =>
        prev.map((q) =>
          q.id === id
            ? {
                ...q,
                dislike: q.dislike + 1,
              }
            : q
        )
      );
      setClickedDislikes((prev) => {
        if (!prev.includes(id)) {
          const updated = [...prev, id];
          localStorage.setItem('clickedDislikes', JSON.stringify(updated));
          return updated;
        }
        return prev;
      });
    } catch (error) {
      console.error('에러가 발생했습니다.', error);
    }
  };

  return (
    <>
      <Banner>
        <HeaderBox>
          <Link to="/">
            <img src={Logo} alt="로고 이미지" className="logo" />
          </Link>
          <ProfileBox>
            <img src={ProfileImg} alt="프로필 이미지" />
            <p>{user ? user.name : '닉네임 불러오는 중..'}</p>
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
          <p>{questions.length}개의 질문이 있습니다</p>
        </CardBoxHeader>
        {questions.map((question) => {
          return (
            <Card key={question.id}>
              <CardHeader>
                <Badge answer={question.answer} />
                <button
                  key={question.id}
                  onClick={() => {
                    setOpenCardId(
                      openCardId === question.id ? null : question.id
                    );
                  }}
                >
                  <img src={MoreIcon} alt="더보기 버튼" />
                </button>
                {openCardId === question.id && (
                  <Edit
                    onEdit={() => handleEditClick(question.id)}
                    isEditActive={editingCards[question.id] || false}
                    setIsEditActive={(value) =>
                      setEditingCards((prev) => ({
                        ...prev,
                        [question.id]: value,
                      }))
                    }
                    onDelete={() => handleDeleteQuestion(question.id)}
                    isDeleteActive={deletingCards[question.id] || false}
                    setIsDeleteActive={(value) =>
                      setDeletingCards((prev) => ({
                        ...prev,
                        [question.id]: value,
                      }))
                    }
                  />
                )}
              </CardHeader>
              <QuestionFeedCard question={question} />
              <AnswerBox>
                <img src={ProfileImg} alt="프로필 이미지" />
                <Contents>
                  <p>{user.name}</p>
                  {answerContent(question)}
                </Contents>
              </AnswerBox>
              <ReactionBtns
                likeCount={question.like}
                onLike={() => handleLike(question.id)}
                dislikeCount={question.dislike}
                onDislike={() => handleDislike(question.id)}
                isClickedLike={clickedLikes.includes(question.id)}
                isClickedDislike={clickedDislikes.includes(question.id)}
              />
            </Card>
          );
        })}

        {questions ? (
          <DeleteAllBtn onClick={handleDeleteQuestionsAll}>
            삭제하기
          </DeleteAllBtn>
        ) : null}
      </CardBox>
    </>
  );
}
