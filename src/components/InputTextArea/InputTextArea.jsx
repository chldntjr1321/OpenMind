import styled from 'styled-components';
import { forwardRef } from 'react';

// const inputContents = '질문'; // 내용, 질문, 답변 등 입력할 컨텐츠를 넣어주세요
const TextArea = styled.textarea`
  background-color: #f9f9f9;
  color: #818181;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  min-height: 180px;
  padding: 16px;
  resize: none;
  &:focus {
    outline: 1px solid #542f1a;
    outline-offset: -1px;
    color: #000000;
  }
  &:not(:placeholder-shown):not(:focus) {
    color: #000000;
  }
`;

function InputTextArea({ value, onChange }, ref) {
  return (
    <>
      <div>
        <TextArea
          ref={ref}
          placeholder={`질문을 입력하세요`}
          alt={`질문 입력란`}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default forwardRef(InputTextArea);
