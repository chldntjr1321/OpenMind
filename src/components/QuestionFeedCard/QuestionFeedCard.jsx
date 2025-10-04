import styled from 'styled-components';

const QuestionFeedBox = styled.div`
  background-color: #ffffff;
  width: 620px;
  min-width: 247px;
  height: 46px;
  gap: 12px;
  padding: 2px;
`;
const QuestionDotDate = styled.div`
  color: #818181;
  height: 50%;
  font-family: Pretendard;
  font-weight: 500;
  font-style: Regular;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
`
const StyledQuestion = styled.div`
  color: #000000;
  height: 50%;
  font-family: Actor;
  font-weight: 400;
  font-style: Regular;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
`;

function QuestionDot() {
  return ('질문 · ');
}

function UpdatedDate() {
  return ('2주전');
}
function Question() {
  return (<div>좋아하는 동물은?</div>);
}
function QuestionFeedCard() {
  return (
    <>
      <QuestionFeedBox>
        <QuestionDotDate />
        <UpdatedDate />
        <Question />
      </QuestionFeedBox>
    </>
  );
}

export default QuestionFeedCard;