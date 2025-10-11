import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnswerPage from './pages/AnswerPage';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route
            path="/post/:id"
            element={<p>이곳은 개별 피드 화면입니다.</p>}
          />
          <Route path="/post/:id/answer" element={<AnswerPage />} />
          <Route path="/err" element={<p>이곳은 에러 페이지</p>} />
          <Route path="*" element={<p>잘못된 주소를 입력하셨습니다!</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
