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

function UpdatedDate() {
  return '2주전';
}

function QuestionFeedCard({ question }) {
  return (
    <>
      <QuestionFeedBox>
        <StyledQuestionDot>
          <p>질문 · {<UpdatedDate />}</p>
        </StyledQuestionDot>
        <StyledQuestion>
          <p>{question.content}</p>
        </StyledQuestion>
      </QuestionFeedBox>
    </>
  );
}

export default QuestionFeedCard;
