import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../assets/image/logo.svg';
import illustrationImage from '../assets/image/v872batch5-nunny-04.png';
import OutlineBtn from '../components/ButtonBox/OutlineBtn';
import FilledBtn from '../components/ButtonBox/FilledBtn';
import InputField from '../components/InputField/InputField';
import { useLoading } from '../components/Loading/Loading';

const PageContainer = styled.div`
  background-image: url(${illustrationImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;

  height: 100vh;
  position: relative;
`;

const Header = styled.header`
  padding: 45px 130px 0;
  text-align: right;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 69px;
  margin: 0 auto;
  gap: 24px;
  position: relative;
  z-index: 2;
`;

const Logo = styled.img`
  width: auto;
  height: auto;
`;

const MainForm = styled.form`
  width: 400px;
  display: flex;
  padding: 32px;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  background: #ffffff;
`;

const ButtonContainer = styled.div`
  cursor: pointer;
`;

function MainPage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const { isLoading, setIsLoading } = useLoading(); // 로딩 상태를 제어하는 함수

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (isLoading) return; // 로딩 중이면 함수 종료
    e.preventDefault();
    if (!name.trim()) return;
    try {
      setIsLoading(true); // 로딩 시작
      const response = await fetch(
        'https://openmind-api.vercel.app/19-1/subjects/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name.trim() }),
        }
      );
      const data = await response.json();
      localStorage.setItem('userId', data.id);
      navigate(`/post/${data.id}/answer`);
    } catch (error) {
      console.error(error);
      alert('계정 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };
  const handleGoToAsk = () => {
    navigate('/list');
  };

  return (
    <PageContainer>
      <Header>
        <ButtonWrapper onClick={handleGoToAsk}>
          <OutlineBtn btnText="질문하러 가기" />
        </ButtonWrapper>
      </Header>

      <MainContainer>
        <div>
          <Logo src={logoImage} alt="OpenMind 로고" />
        </div>

        <MainForm onSubmit={handleSubmit}>
          <InputField value={name} onChange={handleInputChange} />
          <ButtonContainer onClick={handleSubmit}>
            <FilledBtn btnText="질문 받기" />
          </ButtonContainer>
        </MainForm>
      </MainContainer>
    </PageContainer>
  );
}

export default MainPage;
