import styled from 'styled-components';

const QuestionFeedBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: #ffffff;
  max-width: 620px;
  min-width: 247px;
  min-height: 46px;
  height: auto;
`;
const StyledQuestionDot = styled.div`
  color: #818181;
  height: 50%;
  font-family: Pretendard;
  font-weight: 500;
  font-style: Regular;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
`;
const StyledQuestion = styled.div`
  color: #000000;
  font-family: Actor;
  font-weight: 400;
  font-style: Regular;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
`;

function UpdatedDate({ createdAt }) {
  const today = new Date();
  const made = new Date(createdAt);
  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const madeDate = new Date(
    made.getFullYear(),
    made.getMonth(),
    made.getDate()
  );
  const diffTime = todayDate.getTime() - madeDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  // }
  if (diffDays === 0) return '오늘';
  if (diffDays < 7) return `${diffDays}일 전`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}달 전`;
  return `${Math.floor(diffDays / 365)}년 전`;
}

function QuestionFeedCard({ question }) {
  return (
    <>
      <QuestionFeedBox>
        <StyledQuestionDot>
          <p>질문 · {<UpdatedDate createdAt={question.createdAt} />}</p>
        </StyledQuestionDot>
        <StyledQuestion>
          <p>{question.content}</p>
        </StyledQuestion>
      </QuestionFeedBox>
    </>
  );
}

export default QuestionFeedCard;
