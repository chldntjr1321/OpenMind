import styled from 'styled-components';
import Profile from '../../assets/profile.svg';
import MessageIcon from '../../assets/message(gray).svg';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%; 
  height: 187px;
  padding: 20px;
  border: 1px solid #818181;
  border-radius: 16px;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > img {
    width: 60px;
    height: 60px;
  }
  & > p {
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
  }
`;

const QuestionBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: #818181;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  & > div {
    display: flex;
    gap: 4px;
  }
  & > div > img {
    width: 18px;
    height: 18px;
  }
`;

export default function UserCard({ name, questionCount }) {
  return (
    <>
      <Card>
        <ProfileBox>
          <img src={Profile} alt="프로필 이미지" />
          <p>{name}</p>
        </ProfileBox>
        <QuestionBox>
          <div>
            <img src={MessageIcon} alt="메세지 아이콘" />
            <span>받은 질문</span>
          </div>
          <span>{questionCount}개</span>
        </QuestionBox>
      </Card>
    </>
  );
}