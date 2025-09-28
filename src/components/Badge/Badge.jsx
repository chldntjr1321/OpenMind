import styled from 'styled-components';

const AnswerEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: #ffffff;
  border: 1px solid #542f1a;
  border-radius: 10px;
  padding: 4px 12px;
  color: #542f1a;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
const AnswerYet = styled(AnswerEnd)`
  border: 1px solid #818181;
  color: #818181;
`;

export default function Badge({ type }) {
  if (type === 'end') {
    return <AnswerEnd>답변 완료</AnswerEnd>;
  } else {
    return <AnswerYet>미답변</AnswerYet>;
  }
}
