import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../assets/image/logo.svg';
import OutlineBtn from '../components/ButtonBox/OutlineBtn';
import Dropdown from '../components/Dropdown/Dropdown';
import UserCard from '../components/UserCard/UserCard';
import Pagenation from '../components/Pagenation/Pagenation';

const HeaderWrap = styled.div`
  padding: 0 130px 40px 130px;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 57px;
  width: auto;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin-top: -8px;
  cursor: pointer;
`;

const ListContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background: #f9f9f9;
`;

const ListWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ListTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: #000000;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  gap: 20px;
  justify-content: center;
`;

const CardWrapper = styled.div`
  cursor: pointer;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 8px;
`;

function ListPage() {
  const [selectedOption, setSelectedOption] = useState('recent');
  const [subjects, setSubjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 8;

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  useEffect(() => {
    fetchSubjects();
  }, [selectedOption, currentPage]);

  const fetchSubjects = async () => {
    try {
      const response = await fetch(
        `https://openmind-api.vercel.app/19-1/subjects/?limit=${ITEMS_PER_PAGE}&offset=${
          (currentPage - 1) * ITEMS_PER_PAGE
        }`
      );
      const data = await response.json();

      setTotalCount(data.count);
      let sortedResults = data.results || [];

      if (selectedOption === 'name') {
        sortedResults = sortedResults.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else {
        sortedResults = sortedResults.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }

      setSubjects(sortedResults);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/post/${id}`);
  };

  const handleAnswerClick = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      navigate(`/post/${userId}/answer`);
    } else {
      navigate('/');
    }
  };

  return (
    <ListContainer>
      <header>
        <HeaderWrap>
          <Link to="/">
            <Logo src={logoImage} alt="OpenMind 로고" />
          </Link>
          <ButtonWrapper onClick={handleAnswerClick}>
            <OutlineBtn btnText="답변하러 가기" />
          </ButtonWrapper>
        </HeaderWrap>
      </header>

      <ListWrap>
        <ListBox>
          <ListTitle>누구에게 질문할까요?</ListTitle>
          <Dropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </ListBox>
        <div>
          <CardGrid>
            {subjects.map((subject) => (
              <CardWrapper key={subject.id} onClick={() => handleCardClick(subject.id)}>
                <UserCard
                  name={subject.name}
                  questionCount={subject.questionCount}
                />
              </CardWrapper>
            ))}
          </CardGrid>
          <PaginationWrapper>
            <Pagenation
              totalPage={totalPages}
              currentPage={currentPage}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </PaginationWrapper>
        </div>
      </ListWrap>
    </ListContainer>
  );
}

export default ListPage;