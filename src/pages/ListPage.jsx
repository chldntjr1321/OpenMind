import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../assets/image/logo.svg';
import OutlineBtn from '../components/ButtonBox/OutlineBtn';
import Dropdown from '../components/Dropdown/Dropdown';
import UserCard from '../components/UserCard/UserCard';
import Pagenation from '../components/Pagenation/Pagenation';
import { useLoading } from '../components/Loading/Loading';

const ITEMS_PER_PAGE = 8;
const API_BASE_URL = 'https://openmind-api.vercel.app/19-1';
const SORT_OPTIONS = {
  RECENT: 'recent',
  NAME: 'name'
};
const STORAGE_KEYS = {
  USER_ID: 'userId'
};

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

const sortSubjects = (subjects, sortOption) => {
  if (sortOption === SORT_OPTIONS.NAME) {
    return [...subjects].sort((a, b) => a.name.localeCompare(b.name));
  }
  return [...subjects].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

const validateSortOption = (option) => {
  return Object.values(SORT_OPTIONS).includes(option) ? option : SORT_OPTIONS.RECENT;
};

const validatePage = (page) => {
  const pageNum = parseInt(page, 10);
  return isNaN(pageNum) || pageNum < 1 ? 1 : pageNum;
};

function ListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [subjects, setSubjects] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useLoading(); 

  const selectedOption = validateSortOption(searchParams.get('sort'));
  const currentPage = validatePage(searchParams.get('page'));

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const fetchSubjects = useCallback(async () => {
    try {
      setIsLoading(true);
      
      const offset = (currentPage - 1) * ITEMS_PER_PAGE;
      const response = await fetch(
        `${API_BASE_URL}/subjects/?limit=${ITEMS_PER_PAGE}&offset=${offset}`
      );

      if (!response.ok) {
        throw new Error('데이터를 불러오는데 실패했습니다.');
      }

      const data = await response.json();
      
      const calculatedTotalPages = Math.ceil(data.count / ITEMS_PER_PAGE);

      if (currentPage > calculatedTotalPages && data.count > 0) {
          setSearchParams(prev => ({ 
              sort: prev.get('sort') || SORT_OPTIONS.RECENT, 
              page: String(calculatedTotalPages) 
          }), { replace: true }); 
          return; 
      }

      setTotalCount(data.count);
      
      const sortedResults = sortSubjects(data.results || [], selectedOption);
      setSubjects(sortedResults);
    } catch (error) {
      console.error('Error fetching subjects:', error);
      setSubjects([]);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, selectedOption, setSearchParams]);

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  const handleCardClick = useCallback((id) => {
    navigate(`/post/${id}`);
  }, [navigate]);

  const handleAnswerClick = useCallback(() => {
    const userId = localStorage.getItem(STORAGE_KEYS.USER_ID);
    navigate(userId ? `/post/${userId}/answer` : '/');
  }, [navigate]);

  const handleSortChange = useCallback((option) => {
    setSearchParams({ sort: option, page: '1' });
  }, [setSearchParams]);

  const handlePageChange = useCallback((page) => {
    setSearchParams(prev => ({
        sort: prev.get('sort') || SORT_OPTIONS.RECENT, 
        page: String(page)
    }));
  }, [setSearchParams]);

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
            setSelectedOption={handleSortChange}
          />
        </ListBox>
        
        <div>
          <CardGrid>
            {subjects.map((subject) => (
              <CardWrapper
                key={subject.id}
                onClick={() => handleCardClick(subject.id)}
              >
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
              onPageChange={handlePageChange}
            />
          </PaginationWrapper>
        </div>
      </ListWrap>
    </ListContainer>
  );
}

export default ListPage;