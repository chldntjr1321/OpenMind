import { createRoot } from 'react-dom/client';
import messageIcon from '../assets/messages.svg';
import userProfile from '../assets/userProfile.svg';
import close from '../assets/close.svg';

const username = '아초는고양이';
const modalTitle = '질문을 작성하세요';

function ModalTitle() {
  return (
    <>
      <div>
        <img src={messageIcon} alt='말풍선 아이콘' />
        {modalTitle}
        <img src={close} alt='닫기' />
      </div>
    </>
  );
}

function Modal() {
  return (
    <>
      <ModalTitle />
      <div>
        To.<img src={userProfile} alt='프로필 이미지' />{username}
      </div>
      <div>
        <textarea placeholder='질문을 입력해주세요' alt='질문 입력란'></textarea>
        <button>질문 보내기</button>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Modal />);

export default Modal;