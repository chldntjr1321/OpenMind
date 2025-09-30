import styled from "styled-components";

const inputContents = '질문';   // 내용, 질문, 답변 등 입력할 컨텐츠를 넣어주세요
const TextArea = styled.textarea`
  background-color: #F9F9F9;
  color: #818181;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  border: none;
  border-radius: 16px;
  box-sizing: border-box;
  width: 100%;
  min-height: 180px;
  padding: 16px 8px 8px 16px;
  resize: none;
  &:focus {
    outline: 1px solid #542F1A;
    outline-offset: -1px;
    color: #000000;
  }
  &:not(:placeholder-shown):not(:focus) {
    color: #000000;
    }
`;

function InputTextArea() {
  return (
    <>
      <div>
        <TextArea
          placeholder={inputContents + '을 입력하세요'}
          alt={inputContents + ' 입력란'}
        />
      </div>
    </>
  );
}

export default InputTextArea;