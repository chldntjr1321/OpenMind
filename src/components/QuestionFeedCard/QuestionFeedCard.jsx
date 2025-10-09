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

function QuestionDot() {
  return '질문 · ';
}

function UpdatedDate() {
  return '2주전';
}
function Question() {
  return '좋아하는 동물은?';
}
function QuestionFeedCard() {
  return (
    <>
      <QuestionFeedBox>
        <StyledQuestionDot>
          <QuestionDot />
          <UpdatedDate />
        </StyledQuestionDot>
        <StyledQuestion>
          <Question />
        </StyledQuestion>
      </QuestionFeedBox>
    </>
  );
}

export default QuestionFeedCard;
