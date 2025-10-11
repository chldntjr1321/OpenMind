import { useNavigate } from "react-router-dom";
import logoImage from '../assets/image/logo.svg';
import illustrationImage from '../assets/image/v872batch5-nunny-04.png';
import OutlineBtn from '../components/ButtonBox/OutlineBtn';
import FilledBtn from '../components/ButtonBox/FilledBtn';
import InputField from '../components/InputField/InputField';

function MainPage() {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const response = await fetch('https://openmind-api.vercel.app/19-1/subjects/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim() }),
    });

    const data = await response.json();
    navigate(`/post/${data.id}/answer`);
  };

  const handleGoToAsk = () => {
    navigate('/list');
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
          <InputField 
            value={name}
            onChange={handleInputChange}
          />
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
