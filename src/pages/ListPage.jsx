
import { useState, useEffect } from 'react';
import logoImage from '../assets/image/logo.svg';
import OutlineBtn from '../components/ButtonBox/OutlineBtn';
import Dropdown from '../components/Dropdown/Dropdown';
import UserCard from '../components/UserCard/UserCard';
import Pagenation from '../components/Pagenation/Pagenation';

function ListPage() {
  const [selectedOption, setSelectedOption] = useState('recent');
  const [subjects, setSubjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSubjects();
  }, [selectedOption, currentPage]);

  const fetchSubjects = async () => {
    try {
      const response = await fetch(
        `https://openmind-api.vercel.app/19-1/subjects/?limit=8&offset=${(currentPage - 1) * 8}`
      );
      const data = await response.json();
      
      let sortedResults = data.results || [];
      
      if (selectedOption === 'name') {
        sortedResults = sortedResults.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        sortedResults = sortedResults.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
      
      setSubjects(sortedResults);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleAnswerClick = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      window.location.href = `/post/${userId}/answer`;
    } else {
      window.location.href = '/';
    }
  };

  return (
    <>
      <style>{`
        :root {
          --grayscale60: #000000;
          --grayscale50: #515151;
          --grayscale40: #818181;
          --grayscale30: #CFCFCF; 
          --grayscale20: #F9F9F9;
          --grayscale10: #FFFFFF;
          --brown50: #341909;
          --brown40: #542F1A;
          --brown30: #C7BBB5;
          --brown20: #E4D5C9;
          --brown10: #F5F1EE;
          --blue: #1877F2;
          --yellow: #FEE500;
          --red: #B93333;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .header-wrap {
          padding: 49px 130px 45px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          height: 57px;
          width: auto;
          cursor: pointer;
        }

        .btn-wrapper {
          margin-top: -8px;
        }

        .list-wrap {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .list-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .list-title {
          font-size: 40px;
          font-weight: 400;
          color: var(--grayscale60);
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, 220px);
          gap: 20px;
          justify-content: center;
        }

        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 40px;
          gap: 8px;
        }
      `}</style>

      <header>
        <div className="header-wrap">
          <img 
            src={logoImage}
            alt="OpenMind 로고" 
            className="logo"
            onClick={handleLogoClick}
          />
          <div className="btn-wrapper" onClick={handleAnswerClick}>
            <OutlineBtn btnText="답변하러 가기" />
          </div>
        </div>
      </header>

      <main className="list-container">
        <div className="list-wrap">
          <div className="list-box">
            <h1 className="list-title">누구에게 질문할까요?</h1>
            <Dropdown 
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
          <div className="card-box">
            <div className="card-grid" id="cardGrid">
              {subjects.map((subject) => (
                <UserCard 
                  key={subject.id}
                  name={subject.name}
                  questionCount={subject.questionCount}
                />
              ))}
            </div>
            <div className="pagination" id="pagination">
              <Pagenation/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ListPage;