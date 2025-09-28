import Badge from './components/Badge/Badge.jsx';
import Dropdown from './components/Dropdown/Dropdown.jsx';
import GlobalStyle from './components/GlobalStyle';
import Reaction from './components/Reaction/Reaction.jsx';
import UserCard from './components/UserCard/UserCard.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <p>이곳은 메인 화면입니다.</p>
      <Reaction />
      <Badge />
      <UserCard />
      <Dropdown />
    </>
  );
}

export default App;
