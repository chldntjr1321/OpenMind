import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnswerPage from './pages/AnswerPage';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import { LoadingProvider } from './components/Loading/Loading'; // App 컴포넌트를 LoadingProvider로 감싸서 앱 전체에서 로딩 상태를 사용할 수 있도록 설정

function App() {
  return (
    <LoadingProvider>
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
    </LoadingProvider>
  );
}
export default App;
