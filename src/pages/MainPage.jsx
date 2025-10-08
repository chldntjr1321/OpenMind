import { useState } from 'react';
import logoImage from '../assets/image/logo.svg';
import illustrationImage from '../assets/image/v872batch5-nunny-04.png';
import OutlineBtn from '../components/ButtonBox/OutlineBtn';
import FilledBtn from '../components/ButtonBox/FilledBtn';
import personGrayIcon from '../assets/Person-Gray.svg';

function MainPage() {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const response = await fetch('https://openmind-api.vercel.app/4-6/subjects/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim() }),
    });

    const data = await response.json();
    window.location.href = `/post/${data.id}/answer`;
  };

  const handleGoToAsk = () => {
    window.location.href = '/list';
  };

  return (
    <div className="page-container">
      <style>{`
        :root {
          --grayscale20: #F9F9F9;
          --grayscale10: #FFFFFF;
          --grayscale40: #818181;
          --brown40: #542F1A;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .page-container {
          background: var(--grayscale20);
          min-height: 100vh;
        }

        .header {
          padding: 45px 130px 0;
          text-align: right;
        }

        .main-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 69px;
          margin: 0 auto;
          gap: 24px;
          position: relative;
          z-index: 2;
        }

        .main-form {
          width: 400px;
          display: flex;
          padding: 32px;
          flex-direction: column;
          gap: 16px;
          border-radius: 16px;
          background: var(--grayscale10);
        }

        .input-container {
          position: relative;
          display: block;
        }

        .person-icon {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          left: 12px;
          width: 20px;
          height: 20px;
        }

        .main-input {
          background-color: var(--grayscale10);
          font-size: 16px;
          border: 1px solid var(--grayscale40);
          border-radius: 8px;
          width: 100%;
          height: 46px;
          padding: 12px 16px 12px 40px;
        }

        .main-illustration {
          width: 1200px;
          margin: -331px auto 0 auto;
          position: relative;
          z-index: 1;
        }

        .main-illustration img {
          width: 100%;
          height: auto;
        }
      `}</style>

      <header className="header">
        <div onClick={handleGoToAsk} style={{ display: 'inline-block', cursor: 'pointer' }}>
          <OutlineBtn btnText="질문하러 가기" />
        </div>
      </header>

      <main className="main-container">
        <div className="main-logo">
          <img src={logoImage} alt="OpenMind 로고" />
        </div>

        <form className="main-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <img
              src={personGrayIcon}
              alt="사람 아이콘"
              className="person-icon"
            />
            <input
              type="text"
              className="main-input"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div onClick={handleSubmit}>
            <FilledBtn btnText="질문 받기" />
          </div>
        </form>
      </main>

      <div className="main-illustration">
        <img src={illustrationImage} alt="배너 일러스트" />
      </div>
    </div>
  );
}

export default MainPage;
