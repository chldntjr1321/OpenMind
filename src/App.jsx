import Badge from './components/Badge/Badge.jsx';
import Dropdown from './components/Dropdown/Dropdown.jsx';
import Edit from './components/Edit/Edit.jsx';
import GlobalStyle from './components/GlobalStyle';
import Reaction from './components/Reaction/Reaction.jsx';
import UserCard from './components/UserCard/UserCard.jsx';
import Toast from './components/Toast/Toast.jsx';
import Pagenation from './components/Pagenation/Pagenation.jsx';
import './App.css';
import FloatingBtn from './components/FloatingBtn/FloatingBtn.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <p>이곳은 메인 화면입니다.</p>
      <Toast />
      <Reaction />
      <Badge />
      <UserCard />
      <Dropdown />
      <Edit />
      <Pagenation />
      <FloatingBtn />
    </>
  );
}

export default App;
