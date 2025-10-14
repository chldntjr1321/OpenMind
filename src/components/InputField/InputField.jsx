import styled from 'styled-components';
import personIcon from '../../assets/person-gray.svg';

const inputName = '이름';
const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const PersonIcon = styled.img`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 12px;
  width: 20px;
  height: 20px;
`;
const Input = styled.input`
  background-color: #ffffff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #818181;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  padding: 12px 16px 12px 40px;
  &:focus {
    outline: 1px solid #542F1A;
    outline-offset: -1px;
    color: #000000;
  }
  &:not(:placeholder-shown):not(:focus) {
    color: #000000;
  }
`;

function InputField(props) {
  return (
    <>
      <InputContainer>
        <PersonIcon src={personIcon} alt='사람 아이콘' />
        <Input 
          placeholder={inputName + '을 입력하세요'}
          alt={inputName + ' 입력란'}
          {...props}
        />
      </InputContainer>
    </>
  );
}

export default InputField;