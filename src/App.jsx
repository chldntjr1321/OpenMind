import Badge from './components/Badge/Badge.jsx';
import GlobalStyle from './components/GlobalStyle';
import Reaction from './components/Reaction/Reaction.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <p>이곳은 메인 화면입니다.</p>
      <Reaction />
      <Badge />
    </>
  );
}

export default App;
